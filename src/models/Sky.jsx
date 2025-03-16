import React, { useContext, useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import skyDarkScene from "../assets/3d/stars.glb";
import { useGLTF } from "@react-three/drei";
import AuthContext from "../Hooks/Auth-context";
import { useFrame } from "@react-three/fiber";

function Sky({ isRotating }) {
  const ctx = useContext(AuthContext);
  const sky = useGLTF(ctx.mode ? skyScene : skyDarkScene);
  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.27 * delta;
    } else {
      skyRef.current.rotation.y += 0.06 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
//we are adding primitie object when we need object gltf without edit it
