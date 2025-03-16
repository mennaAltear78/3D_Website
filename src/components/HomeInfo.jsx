import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const InfoBox = ({ text, link, btnText }) => (
  <div
    className="sm:text-xl sm:leading-snug flex flex-col items-center justify-center rounded-2xl text-white 
  bg-gradient-to-br from-purple-300 via-purple-250 to-purple-800 shadow-lg px-4 py-4 w-1/2  "
  >
    {text}
    <Link
      to={link}
      className="bg-white text-purple-800 font-bold py-2 px-10 rounded  text-sm  shadow-lg translate-y-[25px]"
    >
      {btnText}
    </Link>
  </div>
);
const renderContent = {
  1: (
    <div
      className="sm:text-xl sm:leading-snug flex flex-col items-center justify-center rounded-2xl text-white 
               bg-gradient-to-br from-purple-300 via-purple-250 to-purple-800 shadow-lg px-4 py-4 "
    >
      <p>
        Hi, I am <span className="font-bold">Menna</span>
      </p>
      <p>A Software Engineer from Egypt 👋🏼</p>
    </div>
  ),
  2: <InfoBox text=" Computer Science graduate from the Faculty of Science, Class of 2025, with an Excellent grade." link="" btnText="learn more" />,
  3: <InfoBox text="" link="" btnText="" />,
  4: <InfoBox text="" link="" btnText="" />,
};

function HomeInfo({ current }) {
  return renderContent[current] || null;
}

export default HomeInfo;
