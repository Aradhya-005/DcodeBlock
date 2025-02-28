import React from "react";
import NavigationLinks from "./NavigationLinks";
import NavLine from "../assets/Nav-reectangle.svg";
import Navbar from "./Navbar";
import InfiniteScroll from "./InfiniteScroll";
import InfinteScroll_1 from "../assets/infinte-scroll-1.svg";
import InfinteScroll_2 from "../assets/infinte-scroll-2.svg";
import InfinteScroll_3 from "../assets/infinte-scroll-3.svg";
import InfinteScroll_4 from "../assets/infinte-scroll-4.svg";
import BgImg from "../assets/BackgroundVideo.svg";
import BlurBg from "../assets/blur-2.png";
import SingularityLogo from "../assets/Singularity-White-logo.svg";
import ButtonBgImg from "../assets/button-bg.svg";

function HeroSection() {
  const images = [
    { id: 1, src: InfinteScroll_1, alt: "Image 1" },
    { id: 2, src: InfinteScroll_2, alt: "Image 2" },
    { id: 3, src: InfinteScroll_3, alt: "Image 3" },
    { id: 4, src: InfinteScroll_4, alt: "Image 4" },
  ];

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${BlurBg})` }}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0 top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${BgImg})` }}
        ></div>
        <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black opacity-65"></div>

        {/* Navbar (Above Overlay) */}
        <div className="relative z-10">
          <Navbar />
          <img src={NavLine} className="w-[100%] z-10" />
        </div>

        {/* Content (Above Overlay) */}
        <div className="relative z-10">
          <NavigationLinks />
        </div>
        <div className="flex flex-col relative z-10 items-center gap-9">
          <img src={SingularityLogo} className="h-20" />
          <div className="flex flex-col items-center justify-center text-white font-proxon text-center gap-9">
            <h1 className="text-[90px] tracking-wider m-0">
              <span className=" bg-[#F86720] ">Ha</span>ckIndia2025
            </h1>
            <p className="text-[28px] font-vtfjustinageo tracking-wider">
              India’s Biggest Web3 & AI Hackathon
            </p>
            <button className="text-[22px] font-vtfjustinageo tracking-wider py-[10px] px-[30px] border-[1px] border-[#D9D9D94D] rounded-[10px] bg-gradient-to-r from-[#6A1799] to-[#230833] ">
              February 28 - September 28
            </button>
          </div>

          <div className="font-vtfjustinageo text-[25px] flex flex-row space-x-10 text-white tracking-wider">
            <div className="border-r-4 border-white pr-10">
              <h1>
                <span className="text-[#F86720]">$150+ </span>Price Pool
              </h1>
            </div>
            <div className="border-r-4 border-white pr-10">
              <h1>
                <span className="text-[#F86720]">150+ </span>Universities
              </h1>
            </div>
            <div>
              <h1>
                <span className="text-[#F86720]">25,000+ </span>Students
              </h1>
            </div>
          </div>
          <button
            style={{ backgroundImage: `url(${BgImg})` }}
            className="z-10 relative w-48 h-16 bg-cover bg-center bg-no-repeat text-white text-lg font-bold flex items-center justify-center"
          >
            Click Me
          </button>
        </div>
      </section>

      <InfiniteScroll images={images} className="bg-[#D9D9D9]" />
    </>
  );
}

export default HeroSection;
