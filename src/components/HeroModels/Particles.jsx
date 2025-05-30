import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const meshRef = useRef();

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = Math.random() * 10 + 5;     // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      speeds[i] = 0.01 + Math.random() * 0.01;
    }
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    const positionAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      positionAttr.array[i * 3 + 1] -= speeds[i]; // update Y
      if (positionAttr.array[i * 3 + 1] < -2) {
        positionAttr.array[i * 3 + 1] = Math.random() * 10 + 5; // reset to top
      }
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.08}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
