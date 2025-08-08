import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skynet from "../components/Skynet";
import SkynetAdvantage from "../components/SkynetAdvantage";
import ScrollToTop from "../components/ScrollToTop";
import SkynetTimeline from "../components/SkynetTimeline";
import CTABanner from "../components/CTABanner";
import banner from "/images/skynet/banner.jpg";

const SkynetPage = () => {
  // useGsapScroll();

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center z-[10]"
        style={{
          backgroundImage: `linear-gradient(to right, #15161c 40%, rgba(21, 22, 28,0.3)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>
        <Navbar />
        {/* <div className="inset-0 absolute w-[50%] h-full bg-black opacity-85 z-[-1]"></div> */}
        <Skynet />
      </section>
      <SkynetAdvantage />
      <SkynetTimeline />
      <div className="container px-5">
        <CTABanner />
      </div>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default SkynetPage;
