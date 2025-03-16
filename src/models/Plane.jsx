import React, { useEffect, useRef } from "react";
import PlaneScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

function Plane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF(PlaneScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  const timeoutRef = useRef(null);
  useEffect(() => {
    if (isRotating) {
      clearTimeout(timeoutRef.current);
      actions["Take 001"].play();
    } else {
      timeoutRef.current = setTimeout(() => {
        actions["Take 001"].stop();
      }, 500);
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
