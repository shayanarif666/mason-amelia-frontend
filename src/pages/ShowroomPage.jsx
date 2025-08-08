import React from "react";
// import Slider from "../components/Slider";
import Listing from "../components/Listing";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import banner from "/images/showroom/banner.jpg";

const ShowroomPage = () => {
  return (
    <>
      <Banner url={banner} />
      <Listing />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ShowroomPage;
