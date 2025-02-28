import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logodb-PhotoRoom 1.svg";
import ButtonBgImg from "../assets/button-bg.png";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-10 py-3 bg-[#000000E5] items-center ">
        <div>
          <img src={Logo} />
        </div>
        <div>
          <Link
            to="/signin"
            className="relative bg-cover bg-center bg-no-repeat inline-flex items-center justify-center px-6 py-3  text-[16px] text-center text-white font-proxon font-normal tracking-wider whitespace-nowrap w-[153px]"
            style={{
              backgroundImage: `url(${ButtonBgImg})`,
              backgroundSize: "100% 100%", // Ensures the full image covers the text
              backgroundRepeat: "no-repeat",
            }}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
