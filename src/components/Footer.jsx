import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="max-w-[1100px] font-proxon text-white  flex flex-col justify-between my-0 mx-auto items-center px-6  tracking-wider lg:flex lg:flex-row">
      {/* Copyright Section */}
      <div>
      <p className="text-sm">Copyright © 2024 DcodeBlock</p>
      </div>

      {/* Links Section */}
      <div className="flex space-x-6 text-[16px] ">
        <Link to="#" className="hover:underline">
          Help Center
        </Link>
        <span>|</span>
        <Link to="#" className="hover:underline">
          Terms and Conditions
        </Link>
        <span>|</span>
        <Link to="#" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
