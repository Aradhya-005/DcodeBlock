import React from "react";
import hackIndiaLogo from "../assets/HackIndia.svg";
import { Link } from "react-router-dom";
import ButtonBgImg from '../assets/button-bg.png';

const NavigationLinks = () => {
  const navLinks = [
    { name: "Overview", path: "/overview" },
    { name: "Create Team", path: "/create-team" },
    { name: "Prizes & Sponsors", path: "/prizes-sponsors" },
    { name: "FAQs", path: "/faqs" },
    { name: "Judging & Rules", path: "/judging-rules" },
    { name: "Resources", path: "/resources" },
  ];
  
  return (
    <header className="flex items-center  px-6 py-10 space-x-7" >
      {/* Logo & Title */}
      <div className="flex items-center gap-3 pl-10 ">
        <img src={hackIndiaLogo} alt="HackIndia Logo" className="w-10 h-10" />
        <h1 className="font-proxon text-2xl text-white uppercase">HackIndia</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 text-white bg-[#28083A] border-2 border-[#DFDFDF1A] rounded-[10px] py-3 px-8">
  {navLinks.map((link, index) => (
    <li key={index}>
      <Link
        to={link.path}
        className="relative bg-cover bg-center bg-no-repeat inline-flex items-center justify-center px-6 py-3  text-center text-white font-vtfjustinageo font-light tracking-wider whitespace-nowrap w-auto"
        style={{
          backgroundImage: `url(${ButtonBgImg})`,
          backgroundSize: "100% 100%", // Ensures the full image covers the text
          backgroundRepeat: "no-repeat",
        }}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

    </header>
  );
};

export default NavigationLinks;
