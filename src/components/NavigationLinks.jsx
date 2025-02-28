import React from "react";
import hackIndiaLogo from "../assets/HackIndia.svg";
import { Link } from "react-router-dom";
import ButtonBgImg from "../assets/button-bg.png";

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
    <header className="flex items-center space-x-7 pt-2">
      {/* Logo & Title */}
      <div className="flex items-center gap-3 pl-10 ">
        <img src={hackIndiaLogo} alt="HackIndia Logo" className="w-[38px] h-[38px]" />
        <h1 className="font-proxon text-[22px] text-white uppercase tracking-widest">HackIndia</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-2.5 text-white bg-[#28083A] border-2 border-[#DFDFDF1A] rounded-[10px] py-3 px-[30px]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="relative bg-cover bg-center bg-no-repeat inline-flex items-center justify-center px-6 py-3  text-[13px] text-center text-white font-proxon  tracking-wider whitespace-nowrap w-auto"
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
