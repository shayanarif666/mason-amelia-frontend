import React from "react";
import Navbar from "./Navbar";
import BlurText from "./ui/BlurText";
import ShinyText from "./ui/ShinyText";

const Banner = ({ url }) => {
  return (
    <>
      <div
        className="bg-img w-full h-full md:h-screen relative z-[1]"
        style={{
          backgroundImage: `linear-gradient(to right, #15161c 20%, rgba(0, 0, 0, 0.05)), url(${url})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay bg-black opacity-60 absolute top-0 left-0 w-full h-full z-[-1]"></div>
        <Navbar />
        <div className="container flex flex-col justify-center h-full md:items-start items-center px-5">
          <div className="banner-content -mt-[10vh]">
            {/* <h1 className="text-white text-6xl font-bold">Discover the Future of Flight</h1> */}
            <BlurText
              text="Discover the Future of Flight"
              delay={150}
              animateBy="words"
              direction="top"
              className="max-w-xl text-[36px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            />
            <ShinyText
              text="Experience the unmatched thrill of aviation like never before. Feel the power, precision, and freedom as you conquer the skies."
              disabled={false}
              speed={5}
              className="custom-class text-[16px] md:text-xl mt-4 max-w-2xl text-start"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
