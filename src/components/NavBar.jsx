import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import AuthContext from "../Hooks/Auth-context";
function NavBar() {
  const ctx =useContext(AuthContext)
  const [mode,setMode]=useState(false)
  const handlingSlider =()=>{
    setMode(!mode)
 
  
    ctx.setMode((prevMode) => !prevMode); 
    console.log(ctx.mode);
}
useEffect(() => {
  console.log("Mode updated:", ctx.mode);
}, [ctx.mode]); // يتم تشغيل الـ console.log عند تغيير mode

  return (
    <header className="header">
      <NavLink
        to="./"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 text-transparent bg-clip-text">
          MA
        </p>
      </NavLink>
      <nav className="gap-10 p-3 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">About</p>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">Projects</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">Contact</p>
        </NavLink>
        <div className={style.addCost}>
          <div
            className={mode ? style.sliderL : style.sliderR}
            onClick={handlingSlider}
          >
            <div className={mode ? style.CircleL : style.CircleR} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
