import React from "react";

function Footer() {
  return (
    <footer className="w-full font-proxon text-white py-4 flex flex-col md:flex-row justify-between items-center px-6 ">
      {/* Copyright Section */}
      <p className="text-sm">Copyright © 2024 DcodeBlock</p>

      {/* Links Section */}
      <div className="flex space-x-6 text-sm">
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
