import React from "react";
import { FaHandshake } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { IoIosGlobe } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { SiTrustpilot } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const SliderWrapper = () => {
  const cards = [
    {
      icon: <GiCommercialAirplane size={32} className="text-tertiary_color" />,
      title: "Aviation Expertise",
      description:
        "From takeoff to close, we simplify aircraft sales with sharp insights and end-to-end guidance.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
    {
      icon: <GrSecure size={32} className="text-tertiary_color" />,
      title: "Secure Transactions",
      description:
        "We reduce costly risks through full legal, financial, and compliance support every step of the way.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
    {
      icon: <SiTrustpilot size={32} className="text-tertiary_color" />,
      title: "Trusted Partners",
      description:
        "Rely on a team committed to trust, transparency, and long-term partnerships built to last.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
    {
      icon: <IoIosGlobe size={32} className="text-tertiary_color" />,
      title: "Global Reach",
      description:
        "We operate worldwide—offering seamless aircraft deals, logistics, and expert global support.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
  ];

  return (
    <>
      <section className="relative z-[0] w-screen py-40 overflow-x-hidden">
        <div className="absolute w-screen top-0 left-0 h-full">
          <div className="absolute w-screen h-full bg-black opacity-80 md:opacity-50 z-[10]"></div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper z-[-10]"
          >
            {[
              "https://static.wixstatic.com/media/04f737_9493f31851e9469f97c2ae6b820f5802~mv2.jpg/v1/fill/w_1719,h_341,al_c,q_85,enc_avif,quality_auto/04f737_9493f31851e9469f97c2ae6b820f5802~mv2.jpg",
              "https://static.wixstatic.com/media/04f737_2658b2d02ad6476d8b75651269c301e9~mv2.jpg/v1/fill/w_1200,h_238,al_c,q_80,enc_avif,quality_auto/04f737_2658b2d02ad6476d8b75651269c301e9~mv2.jpg",
              "https://static.wixstatic.com/media/04f737_aed1d2f6663144b1af3fcf6d875e1971~mv2.jpg/v1/fill/w_1905,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_aed1d2f6663144b1af3fcf6d875e1971~mv2.jpg",
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-screen "
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container px-5 h-full flex items-center z-[10]">
          {/* <Aurora
            colorStops={["#222", "#444", "#222"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          /> */}

          <svg style={{ display: "none" }}>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.008"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>

          <div className="relative inset-0 flex flex-col items-center gap-8 justify-center text-white z-[20]">
            <div className="flex flex-col justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-bold text-white text-center"
              >
                Precision Aviation{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Global Impact.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm md:text-lg max-w-5xl text-white font-light mx-auto text-center pt-4 pb-8"
              >
                At Mason Amelia, we curate bespoke aviation experiences with
                precision, trust, and performance at the core. From consultation
                to delivery, our expert team ensures seamless transactions and
                lasting partnerships worldwide.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  <div className="bg-[#15161cac] relative border-[1px] border-[#f1f1f192] rounded-[10px] flex flex-col items-center justify-center text-center p-4 h-full w-full">
                    <div className="mb-4 absolute top-[-30px] bg-[#15161cac] border-[1px] border-[#f1f1f192] rounded-[50%] p-3">
                      {card.icon}
                    </div>
                    <h4 className="text-lg lg:text-lg xl:text-xl text-white mb-4 mt-8">
                      {card.title}
                    </h4>
                    <p className="text-[#eee] text-sm font-light mb-4 max-w-4xl">
                      {card.description}
                    </p>
                    {/* <div className="z-[9999]">
                        <Button
                          buttonLabel="Let Us Help"
                          onClick={"/contact"}
                        />
                      </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderWrapper;
