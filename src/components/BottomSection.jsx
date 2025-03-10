import React from "react";
import bgImg from "../assets/blur-2.png";
import ThunderImg from "../assets/Untitled design (96) 1.svg";
import ScreenShotImg from "../assets/Leonardo_Anime_XL_A_man_making_nuclear_reactor_on_laptop_in_an_2 1.svg";
import CSharp from "../assets/Csharp.svg";
import beyondTheCode from "../assets/beyondTheCode.svg";
import SingularityLogo from "../assets/Singularity.svg";
import sharpEconomyLogo from "../assets/sharpEconomy.svg";
import stratis from "../assets/stratis.svg";
import rair from "../assets/rair.svg";
import InfiniteScroll from "./InfiniteScroll";
import Footer from "./Footer";

function BottomSection() {
  const SecondImgSet = [
    { id: 1, src: CSharp, alt: "CSharp Logo" },
    { id: 2, src: beyondTheCode, alt: "Beyond The Code Logo" },
    { id: 3, src: SingularityLogo, alt: "Singularity Logo" },
    { id: 4, src: sharpEconomyLogo, alt: "Sharp Economy Logo" },
    { id: 5, src: stratis, alt: "Stratis Logo" },
    { id: 6, src: rair, alt: "Rair Logo" },
  ];

  return (
    <section
      className="relative w-full h-[120vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-black/75"></div>

      {/* Content Above the Overlay */}
      <div className="relative z-10 flex flex-col lg:flex-row font-proxon gap-8 lg:gap-12  lg:py-[150px]  lg:px-0">
        {/* Left Section */}
        <div className="flex flex-col text-white gap-8 lg:gap-20">
          <div className="left-0">
            <img
              src={ThunderImg}
              alt="Thunder Image"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto"
            />
          </div>
          <div className="flex flex-col px-4 gap-8 lg:gap-12 lg:pl-20 tracking-widest">
            <div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl"
                style={{
                  textShadow: "0px 4px 4px #D9D9D9",
                }}
              >
                150+
              </h1>
              <p
                className="text-xl sm:text-2xl lg:text-3xl"
                style={{
                  textShadow: "0px 4px 4px #D9D9D9",
                }}
              >
                Universities participating
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">72+</h1>
                <p className="text-xl sm:text-2xl lg:text-3xl">Judges</p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">21</h1>
                <p className="text-xl sm:text-2xl lg:text-3xl">Hackathons</p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">36+</h1>
                <p className="text-xl sm:text-2xl lg:text-3xl">Great Speakers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src={ScreenShotImg}
            alt="Screenshot Image"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-auto"
          />
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div className="mt-8 lg:mt-0">
        <InfiniteScroll
          images={SecondImgSet}
          className="bg-[#D9D9D9]"
          spacing={60} // Add 60px spacing between images
        />
      </div>

      {/* Footer Section */}
      <div className="relative z-20 pt-8 lg:pt-16">
        <Footer />
      </div>
    </section>
  );
}

export default BottomSection;