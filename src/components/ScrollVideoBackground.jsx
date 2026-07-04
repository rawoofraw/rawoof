import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const ScrollVideoBackground = ({ videoUrl, canvasRef, videoRef }) => {
  const scroll = useScroll();

  const [frames, setFrames] = useState([]);
  const [framesReady, setFramesReady] = useState(false);
  const lastFrameIndex = useRef(-1);
  const videoSeeking = useRef(false);

  // Resize canvas to window size
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio, 2);
        const rect = canvasRef.current.parentElement.getBoundingClientRect();
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;
        lastFrameIndex.current = -1; // force redraw
      }
    };

    // Initial size
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [canvasRef]);

  // Frame extraction logic
  useEffect(() => {
    let isCancelled = false;

    const extractFrames = async () => {
      try {
        const response = await fetch(videoUrl, { mode: 'cors' });
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.crossOrigin = 'anonymous';
        video.preload = 'auto';
        video.src = objectUrl;

        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => resolve();
          video.onerror = () => reject();
          setTimeout(() => reject(), 15000);
        });

        if (isCancelled) return;

        const scale = Math.min(1, 800 / video.videoWidth); // Lower resolution to prevent massive memory usage
        const scaledWidth = Math.round(video.videoWidth * scale);
        const scaledHeight = Math.round(video.videoHeight * scale);
        // Extract up to 150 frames to keep memory footprint under 200MB, preventing GC lag
        const frameCount = Math.max(30, Math.min(150, Math.round(video.duration * 15)));
        const extractedFrames = [];

        for (let i = 0; i < frameCount; i++) {
          if (isCancelled) return;
          const time = (i / (frameCount - 1)) * (video.duration - 0.05);
          video.currentTime = time;

          await new Promise((resolve, reject) => {
            const onSeeked = () => { video.removeEventListener('seeked', onSeeked); resolve(); };
            video.addEventListener('seeked', onSeeked);
            setTimeout(() => { video.removeEventListener('seeked', onSeeked); reject(); }, 3000);
          });

          const bitmap = await createImageBitmap(video, { resizeWidth: scaledWidth, resizeHeight: scaledHeight });
          extractedFrames.push(bitmap);
        }

        if (!isCancelled && extractedFrames.length > 0) {
          setFrames(extractedFrames);
          setFramesReady(true);

          // hide video fallback, show canvas
          if (videoRef.current) videoRef.current.style.display = 'none';
          if (canvasRef.current) canvasRef.current.style.visibility = 'visible';
        }
        URL.revokeObjectURL(objectUrl);
      } catch (e) {
        console.error("Frame extraction failed, falling back to video seek", e);
      }
    };

    extractFrames();

    return () => {
      isCancelled = true;
    };
  }, [videoUrl, videoRef, canvasRef]);

  // Handle video element seeking flags for fallback
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onSeeked = () => { videoSeeking.current = false; };
    const onStalled = () => { videoSeeking.current = false; };
    const onLoadedData = () => { vid.currentTime = 0; };

    vid.addEventListener('seeked', onSeeked);
    vid.addEventListener('stalled', onStalled);
    vid.addEventListener('loadeddata', onLoadedData);

    return () => {
      vid.removeEventListener('seeked', onSeeked);
      vid.removeEventListener('stalled', onStalled);
      vid.removeEventListener('loadeddata', onLoadedData);
    };
  }, [videoRef]);

  // Sync scroll to frame
  useFrame(() => {
    // ScrollControls already applies damping, so we just use scroll.offset directly
    const progress = scroll.offset;

    if (framesReady && frames.length > 0 && canvasRef.current) {
      // Draw bitmap to canvas
      const idx = Math.min(frames.length - 1, Math.round(progress * (frames.length - 1)));
      if (idx !== lastFrameIndex.current) {
        lastFrameIndex.current = idx;
        const frame = frames[idx];
        if (frame) {
          const ctx = canvasRef.current.getContext('2d');
          const cw = canvasRef.current.width;
          const ch = canvasRef.current.height;
          const s = Math.max(cw / frame.width, ch / frame.height);
          const dw = frame.width * s;
          const dh = frame.height * s;
          ctx.fillStyle = "#010101";
          ctx.fillRect(0, 0, cw, ch);
          ctx.drawImage(frame, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
        }
      }
    } else if (videoRef.current && videoRef.current.readyState >= 1 && videoRef.current.duration) {
      // Fallback: Seek video
      const target = progress * videoRef.current.duration;
      if (!videoSeeking.current && Math.abs(videoRef.current.currentTime - target) > 0.01) {
        videoSeeking.current = true;
        videoRef.current.currentTime = target;
      }
    }
  });

  return null;
};
