import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh } from "three";

interface Props {
    x: number;
    y: number;
    z: number;
    size: number
}
function SpinningBox({x, y, z, size} : Props) {
    const boxRef = useRef<Mesh>(null!);
  
    useFrame(() => {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh position= {[x,y,z]} ref={boxRef}>
        <boxGeometry args={[size, size, size]} />
        <meshNormalMaterial wireframe/>
      </mesh>
    );
  }

  
export default SpinningBox;