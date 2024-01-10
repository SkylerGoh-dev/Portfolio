import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import THREE, {
  DoubleSide,
  EdgesGeometry,
  LineBasicMaterial,
  Mesh,
} from "three";

interface Props {
  x: number;
  y: number;
  z: number;
  size: number;
}
function SpinningBox({ x, y, z, size }: Props) {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  //const meshGeometry = new THREE.PlaneGeometry();
  //const lineGeo = new THREE.EdgesGeometry(meshGeometry);

  return (
    <mesh position={[x, y, z]} ref={boxRef}>
      {/* <meshPhongMaterial
        color="0xff0000"
        polygonOffset={true}
        polygonOffsetFactor={1}
        polygonOffsetUnits={1}
      />
      <lineBasicMaterial color="0xffffff" />
  <lineSegments geometry={lineGeo} /> */}
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color={0xff6347} wireframe  />
    </mesh>
  );
}

export default SpinningBox;
