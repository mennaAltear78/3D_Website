import React, { useContext } from 'react'
import skyScene from '../assets/3d/sky.glb'
import skyDarkScene from '../assets/3d/stars.glb'
import { useGLTF } from '@react-three/drei'
import AuthContext from '../Hooks/Auth-context'

function Sky() {
    const ctx =useContext(AuthContext)
    const sky =useGLTF(ctx.mode?skyScene:skyDarkScene)
  return (
   <mesh>
       <primitive object={sky.scene}/>
   </mesh>
  )
}

export default Sky
//we are adding primitie object when we need object gltf without edit it