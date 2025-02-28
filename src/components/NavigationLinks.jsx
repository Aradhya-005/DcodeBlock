import React from "react";
import { NavLink } from "react-router-dom"; 
import hackIndiaLogo from "../assets/HackIndia.svg";
import ButtonBgImg from "../assets/button-bg.png";
import ActiveButtonBgImg from "../assets/ActiveButtonBg.png"; 

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
    <header className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-7 pt-2 sm:pt-0">
      {/* Logo & Title */}
      <div className="flex items-center gap-3 pl-4 sm:pl-10">
        <img
          src={hackIndiaLogo}
          alt="HackIndia Logo"
          className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px]"
        />
        <h1 className="font-proxon text-[18px] sm:text-[22px] text-white uppercase tracking-widest">
          HackIndia
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-2.5 text-white bg-[#28083A] border-2 border-[#DFDFDF1A] rounded-[10px] py-2 sm:py-3 px-4 sm:px-[30px]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative bg-cover bg-center bg-no-repeat inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-[12px] sm:text-[13px] text-center text-white font-proxon tracking-wider whitespace-nowrap w-auto transition-all duration-300 ${
                  isActive ? "active-navlink" : "hover-navlink"
                }`
              }
              style={({ isActive }) => ({
                backgroundImage: `url(${
                  isActive ? ActiveButtonBgImg : ButtonBgImg
                })`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Add CSS for hover and active states */}
      <style>
        {`
          .hover-navlink {
            transition: background-image 0.3s ease, text-shadow 0.3s ease;
          }
          .hover-navlink:hover {
            background-image: url(${ActiveButtonBgImg}) !important;
            text-shadow: 0 0 10px #8A2BE2, 0 0 20px #8A2BE2; /* Bluish-purple text shadow */
          }
          .active-navlink {
            text-shadow: 0 0 10px #8A2BE2, 0 0 20px #8A2BE2; /* Bluish-purple text shadow for active state */
          }
        `}
      </style>
    </header>
  );
};

export default NavigationLinks;