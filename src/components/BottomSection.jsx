import React from "react";
import bgImg from "../assets/blur-2.png";
import ThunderImg from "../assets/Untitled design (96) 1.svg";
import ScreenShotImg from "../assets/Leonardo_Anime_XL_A_man_making_nuclear_reactor_on_laptop_in_an_2 1.svg";
import CSharp from '../assets/Csharp.svg'
import beyondTheCode from '../assets/beyondTheCode.svg'
import SingularityLogo from '../assets/Singularity.svg'
import sharpEconomyLogo from '../assets/sharpEconomy.svg'
import stratis from '../assets/stratis.svg'
import rair from '../assets/rair.svg'
import InfiniteScroll from "./InfiniteScroll";
import Footer from "./Footer";

function BottomSection() {
    const SecondImgSet = [
      { id: 1, src: CSharp, alt: "Image 1" },
      { id: 2, src: beyondTheCode, alt: "Image 2" },
      { id: 3, src: SingularityLogo, alt: "Image 3" },
      { id: 4, src: sharpEconomyLogo, alt: "Image 4" },
      { id: 5, src: stratis, alt: "Image 5" },
      { id: 6, src: rair, alt: "Image 6" },
    ];
  return (
    
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 "></div>

      {/* Content Above the Overlay */}
      <div className=" relative z-10 flex flex-row font-proxon  gap-12  py-[150px]">
        <div className="  flex flex-col  text-white gap-20 ">
          <div className="left-0 ">
            <img src={ThunderImg} />
          </div>
          <div className="flex flex-col gap-12 pl-20 tracking-widest">
            <div className=" ">
              <h1 className="text-5xl">150+</h1>
              <p className="text-3xl">Universities participating</p>
            </div>
            <div className="flex flex-row gap-12">
              <div>
                <h1 className="text-5xl">72+</h1>
                <p className="text-3xl">Judges</p>
              </div>
              <div>
                <h1 className="text-5xl">21</h1>
                <p className="text-3xl">Hackathons</p>
              </div>
              <div>
                <h1 className="text-5xl">36+</h1>
                <p className="text-3xl">Great Speakers</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={ScreenShotImg} />
        </div>
      </div>
      <InfiniteScroll images={SecondImgSet} className="bg-[#D9D9D9] gap-7" />
      <Footer/>

    </section>
  );
}

export default BottomSection;
