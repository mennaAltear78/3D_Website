import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Bird() {
const {scene ,animations}=useGLTF(birdScene)
const ref=useRef()
const {actions}= useAnimations(animations,ref)
useEffect(()=>{
    actions['Take 001'].play()
},[actions])

useFrame(({ camera,clock }) => {

  // ✅ التأكد من أن ref.current موجود وله position قبل استخدامه
  if (!ref.current || !ref.current.position) return;
// ref.current.position.y=Math.sin(clock.getElapsedTime()*0.2+2)
  if (ref.current.position.x > camera.position.x +10) {
    ref.current.position.y = Math.PI;
  } else if (ref.current.position.x < camera.position.x -10) {
    ref.current.rotation.y = 0;
  }

  if (ref.current.position.x < 10) {
    // ref.current.rotation.y =Math.PI;
    ref.current.position.x += 0.01;
    // ref.current.position.z +=0.01
  } else if(ref.current.position.x < 10) {
    // ref.current.rotation.x=0
    // ref.current.position.x -= 0.1;
    // ref.current.position.z -=0.01
  }
});
console.log(ref.current);

  return (
    <mesh ref={ref} position={[-7, 0, 0]} scale={[0.003, 0.003, 0.003]}>
   
    <primitive object={scene} />
  </mesh>
  )
}

export default Bird