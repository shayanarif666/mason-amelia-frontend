import React from "react";
import Showcase from "../components/Showcase";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SliderWrapper from "../components/SliderWrapper";
import MeetTheTeam from "../components/MeetTheTeam";
import Gallary from "../components/Gallary";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import LatestJets from "../components/LatestJets";
import Navbar from "../components/Navbar";
import bgPlane from "/images/brokerage/banner.avif"; 
import Reviews from "../components/Reviews";

const HomePage = () => {
  // useGsapScroll();

  return (
    <>
      {/* <div className="container">
        <Navbar />
      </div> */}

      <Showcase />
      <main id="main">
        <Brands />
        {/* <Intro /> */}
        <MeetTheTeam />
        <SliderWrapper />
        {/* <LatestJets /> */}
        <section
          className="relative xl:h-screen bg-[#111218] w-full bg-cover bg-center z-[10]"
          // style={{ backgroundImage: `url(${bgPlane})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#111218] z-[-1]"></div>
          {/* <Navbar /> */}
          <div className="container">
            <Reviews />
          </div>
        </section>
        <Gallary />
        <Contact />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default HomePage;
