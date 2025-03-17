import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import arrow from '../assets/icons/arrow_right_alt_24dp_8C1AF6_FILL0_wght400_GRAD0_opsz24.svg'
const InfoBox = ({ text, link, btnText }) => (
  <div
    className="transform scale-75  transition-transform duration-500 hover:scale-100 sm:text-xl sm:leading-snug flex flex-col items-center justify-center rounded-2xl text-white 
  bg-gradient-to-br from-purple-800  via-purple-250 to-purple-400 shadow-lg px-4 py-4 w-[500px]"
  >
    {text}
    <Link
      to={link}
      className="w-[300px] py-3 flex space-x-4 justify-center bg-white text-purple-800 font-bold py-2 px-10 rounded  text-sm  shadow-lg translate-y-[30px]"
    >
 <p>{btnText}</p>
     
 
 <div className="h-5 flex"><img src={arrow}/></div>
    </Link>
  </div>
);
const renderContent = {
  1: (
    <div
      className="sm:text-xl sm:leading-snug flex flex-col items-center justify-center rounded-2xl text-white 
               bg-gradient-to-br from-purple-800  via-purple-250 to-purple-400 shadow-lg px-4 py-4 "
    >
      <p>
        Hi, I am <span className="font-bold">Menna</span>
      </p>
      <p>A Software Engineer from Egypt 👋🏼</p>
    </div>
  ),
  2: <InfoBox text="🎓 Bachelor’s Degree in Computer Science
 Faculty of Science | Class of 2025
 Graduated with Distinction (Excellent Grade)" link="/about" btnText="learn more" />,
  3: <InfoBox text="Successfully led multiple projects to completion, driving impactful results and innovation. Curious to see the impact?" link="/projects" btnText="visit my portfolio" />,
  4: <InfoBox text="📩 Contact Me – Always open to new opportunities and collaborations. " link="/contact" btnText="Let's talk " />,
};

function HomeInfo({ current }) {
  return renderContent[current] || null;
}

export default HomeInfo;
