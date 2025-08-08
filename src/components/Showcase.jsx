import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
// import LocomotiveScroll from "locomotive-scroll";

const Showcase = () => {
  return (
    <header className="w-screen z-[10]">
      <div
        className="sm:absolute top-0 left-0 w-full h-full md:h-screen z-[-1]"
        style={{
          filter: "drop-shadow(20px 10px 15px rgba(255, 255, 255, 0.2))",
        }}
      >
        <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[75%] lg:h-full overflow-hidden">
          <div
            className={`overlay absolute top-0 left-0 w-full h-full z-10 md:block hidden`}
            style={{
              background:
                "linear-gradient(to top, #111218fd 30%, #11121868 80%)",
            }}
          ></div>
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/assets/file.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Navbar />

      <HeroSection />
    </header>
  );
};

export default Showcase;
