import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Group } from "three";

export default function Hero3D() {
  const ref = useRef<Group>(null!);
  const positions = useMemo(
    () => new Float32Array(random.inSphere(new Float32Array(6000), { radius: 1.2 })),
    []
  );

  useFrame((_, delta) => {
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          size={0.003}
          sizeAttenuation
          color="#00f5d4"
          depthWrite={false}
        />
      </Points>
    </group>
  );
}