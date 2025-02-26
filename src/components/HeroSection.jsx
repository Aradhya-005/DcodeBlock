import React from 'react'
import NavigationLinks from './NavigationLinks'
import NavLine from '../assets/Nav-reectangle.svg'
import Navbar from './Navbar'
import InfiniteScroll from './InfiniteScroll'
import InfinteScroll_1 from "../assets/infinte-scroll-1.svg";
import InfinteScroll_2 from "../assets/infinte-scroll-2.svg";
import InfinteScroll_3 from "../assets/infinte-scroll-3.svg";
import InfinteScroll_4 from "../assets/infinte-scroll-4.svg";
import BgImg from '../assets/BackgroundVideo.svg';

function HeroSection() {
  const images = [
    { id: 1, src: InfinteScroll_1, alt: "Image 1" },
    { id: 2, src: InfinteScroll_2, alt: "Image 2" },
    { id: 3, src: InfinteScroll_3, alt: "Image 3" },
    { id: 4, src: InfinteScroll_4, alt: "Image 4" },
  ];
  return (
   <>
  
  <section  className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}>
  {/* Background Video
  <video className="absolute top-0 left-0 w-full h-full object-cover -z-10 " autoPlay loop muted>
    <source src="/src/assets/bg-video.mp4" type="video/mp4" />
  </video> */}
   <Navbar/>
  <img src={NavLine} className='w-[100%] z-10'/>
  {/* Content (Ensure it's above the video) */}
  <div className="relative z-10">
    <NavigationLinks />
  </div>
</section>
<InfiniteScroll images={images} className="bg-[#D9D9D9]" />

   </>
  )
}

export default HeroSection