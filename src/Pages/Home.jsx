import React, { Suspense, use, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Island from "../models/Island";
import Sky from "../models/Sky";
import AuthContext from "../Hooks/Auth-context";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

function Home() {
  const ctx = useContext(AuthContext);
  const [current,setCurrentStage]=useState(1)
  const [isRotating ,setIsRotating]=useState(false)
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion
    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      // screenScale = [3, 3, 3];
      screenPostion=[-1,1,-5]
    } else {
      screenScale = [3, 3, 3];
      // screenScale = [0.5, 1.5, 1.5];
      screenPostion=[-2,-1,-5]
    }
    return [screenScale, screenPostion];
  };
  const adjustIlandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostion, rotation];
  };
  const [screenScale, screenPostion, rotation] = adjustIlandForScreenSize();
  const [PlaneScale, PlanePostion] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-20 right-0 left-0 z-10 flex justify-center ">
              {current && <HomeInfo current={current}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={"loading"}>
          <directionalLight
            position={ctx.mode ? [3, 2, 2] : [10, 2, 1]}
            intensity={2}
          />
          <ambientLight intensity={0.9} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
           position={PlanePostion}
           scale={PlaneScale}
           isRotating={isRotating}
           rotation={[0,20,0]}
           />
          
          <Island
            position={screenPostion}
            scale={screenScale}
            rotaion={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
