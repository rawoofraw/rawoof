import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import EngineModel from './EngineModel';
import EducationOverlay from './EducationOverlay';

const EducationEngine3D = () => {
  return (
    <div className="w-full h-[150vh] md:h-[200vh] relative bg-[#010101]">
      {/* 
        The container height dictates the total scroll distance. 
        Canvas is sticky inside it via absolute inset-0 positioning (R3F Canvas defaults to 100% height/width of parent relative container, 
        but ScrollControls handles the internal pinning logic).
      */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
        <Canvas 
          camera={{ position: [5, 2, 8], fov: 45 }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: true, alpha: false }}
        >
          {/* Lighting */}
          <color attach="background" args={['#010101']} />
          <ambientLight intensity={0.4} />
          
          {/* Main Key Light */}
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          
          {/* Accent Rim Light matching the theme color */}
          <directionalLight position={[-10, 5, -10]} intensity={2.5} color="#2C5C88" />
          <pointLight position={[0, -5, 5]} intensity={1} color="#2C5C88" />

          {/* ScrollControls pins the view and provides the scroll offset to children */}
          <ScrollControls pages={2} damping={0.25} distance={1.2}>
            
            {/* The 3D Engine */}
            <EngineModel />

            {/* The HTML Overlay */}
            <EducationOverlay />

          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
};

export default EducationEngine3D;
