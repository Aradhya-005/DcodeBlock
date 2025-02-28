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
import ButtonBgImg from "../assets/button-bg.png";

function HeroSection() {
  // Image data for InfiniteScroll (commented out for now)
  const images = [
    { id: 1, src: InfinteScroll_1, alt: "Image 1" },
    { id: 2, src: InfinteScroll_2, alt: "Image 2" },
    { id: 3, src: InfinteScroll_3, alt: "Image 3" },
    { id: 4, src: InfinteScroll_4, alt: "Image 4" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[110vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BlurBg})` }}
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 top-0 left-0 w-full h-[110vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg})` }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 top-0 left-0 w-full h-[110vh] bg-black opacity-65"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
          <img src={NavLine} alt="Navigation Line" className="w-full" />
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 py-6">
          <NavigationLinks />
        </div>

        {/* Main Content */}
        <section className="pt-5 pb-7 flex flex-col relative z-10 items-center h-[110vh]">
          {/* Logo */}
          <div>
            <img
              src={SingularityLogo}
              alt="Singularity Logo"
              className="h-20"
            />
          </div>

          {/* Heading and Subheading */}
          <div className="flex flex-col relative z-10 items-center gap-[35px]">
            <div className="flex flex-col items-center justify-center text-white font-proxon text-center space-y-5">
              <h1
                className="text-[90px] tracking-wider m-0"
                style={{
                  WebkitTextStroke: "1px #D0CFCE",
                  textShadow: "0px 2px 4px #D9D9D9",
                }}
              >
                <span className="border-[#FFFFFF80] rounded-[3px] border-[1px] py-2 pl-2 pr-0 bg-[#F86720] mr-1">
                  Ha
                </span>
                ckIndia2025
              </h1>
              <p className="text-[28px] font-vtfjustinageo tracking-wider">
                India’s Biggest Web3 & AI Hackathon
              </p>
              <button className="text-[22px] font-vtfjustinageo tracking-wider py-[10px] px-[30px] border-[1px] border-[#D9D9D94D] rounded-[10px] bg-gradient-to-r from-[#6A1799] to-[#230833]">
                February 28 - September 28
              </button>
            </div>

            {/* Stats Section */}
            <div className="font-vtfjustinageo font-bold  text-[25px] flex flex-row space-x-10 text-white tracking-wider">
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

            {/* Register Button */}
            <button
              className="relative bg-cover font-VTFJustinaGeoRegular font-light tracking-wider bg-center bg-no-repeat w-[178px] h-[60px] flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${ButtonBgImg})`,
                backgroundSize: "100% 100%", // Ensures full coverage of the button
              }}
            >
              Register now!
            </button>
          </div>
        </section>
      </section>

      <InfiniteScroll images={images} className="bg-[#D9D9D9]" />
    </>
  );
}

export default HeroSection;