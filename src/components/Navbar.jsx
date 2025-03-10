import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import Logo from "../assets/logodb-PhotoRoom 1.svg";
import ButtonBgImg from "../assets/button-bg.png";
import ActiveButtonBgImg from "../assets/ActiveButtonBg.png"; // Add this image for active state

function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 bg-[#000000E5] items-center">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-auto" // Adjust logo size for smaller screens
          />
        </div>

        {/* Sign In Button */}
        <div>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `relative bg-cover bg-center bg-no-repeat inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] text-center text-white font-proxon font-normal tracking-wider whitespace-nowrap w-[120px] sm:w-[140px] md:w-[153px] transition-all duration-300 ${
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
            Sign In
          </NavLink>
        </div>
      </nav>

      {/* Add CSS for hover and active states */}
      <style>
        {`
          .hover-navlink:hover {
            text-shadow: 0 0 7px #53D3E0, 0 0 7px #53D3E0; /* Bluish-purple text shadow */
          }
          .active-navlink {
            text-shadow: 0 0 7px #53D3E0, 0 0 7px #53D3E0; /* Bluish-purple text shadow for active state */
          }
        `}
      </style>
    </>
  );
}

export default Navbar;