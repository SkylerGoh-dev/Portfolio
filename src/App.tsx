import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import SpinningBox from "./SpinningBox";
import Title from "./Title";

function CameraHelper() {
  const camera = new PerspectiveCamera(75, 1, 3, 100);
  return (
    <group position={[0, 0, 5]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}

function App() {
  return (
    //{position: [0,0,10], fov: 90, near: 0.1, far: 1000 }
    // camera={{position: [0, 0, 0], fov: 75, near: 3, far: 100 }} >
    <>
      <Canvas
        id="bg"
        camera={{ position: [0, 0, 1], fov: 75, near: 3, far: 100 }}
      >
        <ambientLight />
        <Controls />
        <SpinningBox x={6} y={4.5} z={-6.6} size={1} />
        <SpinningBox x={-9} y={-1.5} z={-7} size={2} />
        <SpinningBox x={2} y={-4} z={-6.6} size={1} />
        <CameraHelper />
      </Canvas>
      <Title />
    </>
  );
}

export default App;
