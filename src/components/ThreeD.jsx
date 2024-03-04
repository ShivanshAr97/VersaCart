import React from 'react'
import { Suspense } from "react";
import Model from "../assets/Scene";
import { Environment, OrbitControls } from "@react-three/drei";

const ThreeD = () => {
    return (
    <div className="">
      <Canvas camera={{ fov: 18 }}>
        <ambientLight intensity={1.25} />
        <Suspense fallback={null}>
        <Model />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeD