import React from "react";

function Footer() {
  return (
    <footer className="max-w-[1100px] font-proxon text-white  flex flex-row justify-between my-0 mx-auto items-center px-6  tracking-wider">
      {/* Copyright Section */}
      <p className="text-sm">Copyright © 2024 DcodeBlock</p>

      {/* Links Section */}
      <div className="flex space-x-6 text-[16px] ">
        <a href="#" className="hover:underline">
          Help Center
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Terms and Conditions
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
