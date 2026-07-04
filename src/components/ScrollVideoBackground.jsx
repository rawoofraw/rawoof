import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const ScrollVideoBackground = ({ canvasRef }) => {
  const scroll = useScroll();
  
  const imagesRef = useRef([]);
  const [imagesReady, setImagesReady] = useState(false);
  const lastFrameIndex = useRef(-1);
  const frameCount = 124; // We have 124 frames from ezgif

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
    
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [canvasRef]);

  // Preload image sequence
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 001, 002
      const num = i.toString().padStart(3, '0');
      img.src = `/video fram image/ezgif-frame-${num}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        // Start rendering as soon as we have a few frames or when done
        if (loadedCount > 5 && !imagesReady) {
          setImagesReady(true);
        }
      };
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  // Sync scroll to frame dynamically
  useFrame(() => {
    const progress = scroll.offset;
    const targetIdx = Math.max(0, Math.min(frameCount - 1, Math.round(progress * (frameCount - 1))));
    
    // Draw the image to canvas if it's loaded
    if (imagesReady && imagesRef.current[targetIdx] && imagesRef.current[targetIdx].complete && canvasRef.current) {
      if (targetIdx !== lastFrameIndex.current) {
        lastFrameIndex.current = targetIdx;
        const img = imagesRef.current[targetIdx];
        const ctx = canvasRef.current.getContext('2d');
        const cw = canvasRef.current.width;
        const ch = canvasRef.current.height;
        const s = Math.max(cw / img.width, ch / img.height);
        const dw = img.width * s;
        const dh = img.height * s;
        ctx.fillStyle = "#010101";
        ctx.fillRect(0, 0, cw, ch);
        ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
        
        // Ensure canvas is visible
        if (canvasRef.current.style.visibility !== 'visible') {
           canvasRef.current.style.visibility = 'visible';
        }
      }
    } 
  });

  return null;
};
