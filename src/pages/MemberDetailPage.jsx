import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgPlane from "/images/team/banner.avif"; // Replace with your path
import TeamDetail from "../components/TeamDetail";
import ScrollToTop from "../components/ScrollToTop";

const MemberDetailPage = () => {
  // useGsapScroll();

  return (
    <>
      <Navbar />
      <section
        className="relative w-full bg-cover bg-center flex justify-center z-[10] -mt-[10vh] h-full"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full bg-black h-full opacity-90 z-[-1]"></div>
        <div className="container px-5 2xl:px-0 pt-[6vh]">
          <TeamDetail />
        </div>
      </section>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default MemberDetailPage;
