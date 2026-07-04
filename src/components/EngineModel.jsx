import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const materialConfig = {
  color: '#334155', // Base Slate
  metalness: 0.7,
  roughness: 0.3,
  envMapIntensity: 1.2,
};

const EngineModel = () => {
  const scroll = useScroll();
  const groupRef = useRef();

  // Refs for major assemblies
  const blockRef = useRef();
  const leftHeadRef = useRef();
  const rightHeadRef = useRef();
  const crankRef = useRef();
  const pistonsRef = useRef();
  const intakeRef = useRef();
  const exhaustLeftRef = useRef();
  const exhaustRightRef = useRef();

  useFrame((state, delta) => {
    // Continuous rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.08 * delta;
    }

    // Map scroll offset so explosion only happens in the last third of the page
    // scroll.offset is 0 at top, 1 at bottom.
    // If it starts exploding at 0.6 and finishes around 0.9:
    let explode = (scroll.offset - 0.6) * 3;
    explode = THREE.MathUtils.clamp(explode, 0, 1);
    
    // Easing for smoother mechanics
    const ease = explode < 0.5 ? 2 * explode * explode : 1 - Math.pow(-2 * explode + 2, 2) / 2;

    // Apply exploded positions and rotations
    
    // Cylinder Heads (move up and outward along the V angle)
    if (leftHeadRef.current) {
      leftHeadRef.current.position.x = THREE.MathUtils.lerp(-1.2, -3.5, ease);
      leftHeadRef.current.position.y = THREE.MathUtils.lerp(1.5, 4.0, ease);
      leftHeadRef.current.rotation.z = THREE.MathUtils.lerp(Math.PI / 6, Math.PI / 4, ease);
    }
    
    if (rightHeadRef.current) {
      rightHeadRef.current.position.x = THREE.MathUtils.lerp(1.2, 3.5, ease);
      rightHeadRef.current.position.y = THREE.MathUtils.lerp(1.5, 4.0, ease);
      rightHeadRef.current.rotation.z = THREE.MathUtils.lerp(-Math.PI / 6, -Math.PI / 4, ease);
    }

    // Intake Manifold (moves straight up)
    if (intakeRef.current) {
      intakeRef.current.position.y = THREE.MathUtils.lerp(2.5, 6.0, ease);
    }

    // Exhaust Manifolds (move outward laterally)
    if (exhaustLeftRef.current) {
      exhaustLeftRef.current.position.x = THREE.MathUtils.lerp(-2.5, -6.0, ease);
      exhaustLeftRef.current.position.y = THREE.MathUtils.lerp(1.0, 2.0, ease);
    }
    if (exhaustRightRef.current) {
      exhaustRightRef.current.position.x = THREE.MathUtils.lerp(2.5, 6.0, ease);
      exhaustRightRef.current.position.y = THREE.MathUtils.lerp(1.0, 2.0, ease);
    }

    // Crankshaft (drops down)
    if (crankRef.current) {
      crankRef.current.position.y = THREE.MathUtils.lerp(-1.5, -4.5, ease);
      crankRef.current.rotation.x = THREE.MathUtils.lerp(0, Math.PI, ease); // Spin the crank as it falls
    }

    // Pistons (extract upward along their respective cylinder banks)
    if (pistonsRef.current) {
      pistonsRef.current.children.forEach((pistonGroup, index) => {
        const isLeft = index % 2 === 0;
        const outFactor = isLeft ? -1 : 1;
        // Base positions
        const baseX = outFactor * 0.8;
        const baseY = 0.5;
        // Exploded positions
        const expX = outFactor * 2.5;
        const expY = 3.0;
        
        pistonGroup.position.x = THREE.MathUtils.lerp(baseX, expX, ease);
        pistonGroup.position.y = THREE.MathUtils.lerp(baseY, expY, ease);
      });
    }
  });

  return (
    <group ref={groupRef} scale={0.65} position={[3, -1, -2]}>
      
      {/* V6 Engine Block Main Body */}
      <mesh ref={blockRef} position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 3, 4.5]} />
        <meshStandardMaterial {...materialConfig} color="#1e293b" />
        {/* Ribbing details built with sub-meshes */}
        {[-1.5, 0, 1.5].map((z, i) => (
          <mesh key={`rib-${i}`} position={[0, 0, z]}>
            <boxGeometry args={[2.8, 3.2, 0.2]} />
            <meshStandardMaterial {...materialConfig} color="#0f172a" />
          </mesh>
        ))}
      </mesh>

      {/* Left Cylinder Head */}
      <group ref={leftHeadRef} position={[-1.2, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.2, 4.6]} />
          <meshStandardMaterial {...materialConfig} color="#475569" />
        </mesh>
        {/* Camshaft Covers */}
        <mesh position={[-0.4, 0.7, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.6, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#cbd5e1" metalness={0.9} />
        </mesh>
        <mesh position={[0.4, 0.7, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.6, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#cbd5e1" metalness={0.9} />
        </mesh>
      </group>

      {/* Right Cylinder Head */}
      <group ref={rightHeadRef} position={[1.2, 1.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.2, 4.6]} />
          <meshStandardMaterial {...materialConfig} color="#475569" />
        </mesh>
        {/* Camshaft Covers */}
        <mesh position={[-0.4, 0.7, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.6, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#cbd5e1" metalness={0.9} />
        </mesh>
        <mesh position={[0.4, 0.7, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.6, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#cbd5e1" metalness={0.9} />
        </mesh>
      </group>

      {/* Intake Manifold (Center top) */}
      <group ref={intakeRef} position={[0, 2.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 4.5, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#64748b" />
        </mesh>
        {/* Intake pipes */}
        {[-1.5, 0, 1.5].map((z, i) => (
          <group key={`intake-${i}`} position={[0, -0.5, z]}>
            <mesh position={[-0.8, -0.2, 0]} rotation={[0, 0, Math.PI/4]}>
              <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
              <meshStandardMaterial {...materialConfig} color="#94a3b8" />
            </mesh>
            <mesh position={[0.8, -0.2, 0]} rotation={[0, 0, -Math.PI/4]}>
              <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
              <meshStandardMaterial {...materialConfig} color="#94a3b8" />
            </mesh>
          </group>
        ))}
      </group>

      {/* Left Exhaust Manifold */}
      <group ref={exhaustLeftRef} position={[-2.5, 1.0, 0]}>
        <mesh position={[-0.5, -0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.2, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#b45309" metalness={0.5} roughness={0.8} /> {/* Rusted/heated metal look */}
        </mesh>
        {[-1.5, 0, 1.5].map((z, i) => (
          <mesh key={`exL-${i}`} position={[0, 0, z]} rotation={[0, 0, Math.PI/3]}>
            <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
            <meshStandardMaterial {...materialConfig} color="#b45309" metalness={0.5} roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* Right Exhaust Manifold */}
      <group ref={exhaustRightRef} position={[2.5, 1.0, 0]}>
        <mesh position={[0.5, -0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4.2, 16]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial {...materialConfig} color="#b45309" metalness={0.5} roughness={0.8} />
        </mesh>
        {[-1.5, 0, 1.5].map((z, i) => (
          <mesh key={`exR-${i}`} position={[0, 0, z]} rotation={[0, 0, -Math.PI/3]}>
            <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
            <meshStandardMaterial {...materialConfig} color="#b45309" metalness={0.5} roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* Crankshaft */}
      <group ref={crankRef} position={[0, -1.5, 0]}>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 5, 16]} />
          <meshStandardMaterial {...materialConfig} color="#e2e8f0" metalness={1.0} roughness={0.2} />
        </mesh>
        {/* Counterweights */}
        {[-1.8, -0.6, 0.6, 1.8].map((z, i) => (
          <mesh key={`counter-${i}`} position={[0, -0.3, z]}>
            <boxGeometry args={[1.2, 1.5, 0.4]} />
            <meshStandardMaterial {...materialConfig} color="#64748b" />
          </mesh>
        ))}
      </group>

      {/* V6 Pistons */}
      <group ref={pistonsRef}>
        {[
          { z: -1.5, side: 'left' }, { z: -1.0, side: 'right' },
          { z: -0.2, side: 'left' }, { z: 0.3, side: 'right' },
          { z: 1.0, side: 'left' }, { z: 1.5, side: 'right' },
        ].map((piston, i) => {
          const isLeft = piston.side === 'left';
          const rotZ = isLeft ? Math.PI / 6 : -Math.PI / 6;
          
          return (
            <group key={`piston-sys-${i}`} rotation={[0, 0, rotZ]}>
              {/* Piston Head */}
              <mesh position={[0, 1.2, piston.z]}>
                <cylinderGeometry args={[0.4, 0.4, 0.6, 24]} />
                <meshStandardMaterial {...materialConfig} color="#cbd5e1" metalness={0.9} />
              </mesh>
              {/* Connecting Rod */}
              <mesh position={[0, 0.2, piston.z]}>
                <boxGeometry args={[0.15, 1.5, 0.25]} />
                <meshStandardMaterial {...materialConfig} color="#94a3b8" />
              </mesh>
              {/* Wrist Pin */}
              <mesh position={[0, 0.9, piston.z]} rotation={[Math.PI/2, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
                <meshStandardMaterial {...materialConfig} color="#334155" />
              </mesh>
            </group>
          );
        })}
      </group>

    </group>
  );
};

export default EngineModel;
