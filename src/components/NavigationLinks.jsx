import React from "react";
import hackIndiaLogo from "../assets/HackIndia.svg";

function NavigationLinks() {
  return (
    <>
      <header>
        <div className="flex items-center gap-2">
          <img src={hackIndiaLogo} className="w-[38px]" />
          <h1 className="font-proxon text-2xl text-white uppercase">
            HackIndia
          </h1>
        </div>
      </header>
    </>
  );
}

export default NavigationLinks;
