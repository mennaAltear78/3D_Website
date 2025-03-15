import React from 'react'
import PlaneScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'
function Plane({rotaional,...props}) {
const {scene ,animations}=useGLTF(PlaneScene)
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane