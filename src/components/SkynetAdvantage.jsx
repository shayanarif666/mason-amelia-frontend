import React from "react";
import { FaFileAlt, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SkynetAdvantage = () => {
  return (
    <>
      <section id="skynet_advantage" className="py-10 xl:py-20 relative xl:h-screen">
        <div className="container px-5 flex items-center h-full">
          <div className="py-16 px-4 md:px-20 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-bold text-center mb-2"
            >
              Unlock{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                SkyNet’s Data Advantage
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, dealy: 0.3 }}
              className="text-center text-gray-400 mb-10 md:text-lg mt-4"
            >
              Discover how SkyNet delivers accurate aircraft valuations through
              private market data, intelligent analysis, and proven methodology.
              We turn complex data into confident decisions—empowering both
              buyers and sellers. Built for aviation professionals who demand
              precision.
            </motion.p>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              {/* Card 1 */}
              <motion.div
                className="bg-[#13151c] group transition-all duration-200 relative z-[0] overflow-hidden rounded-3xl px-6 py-8 text-center flex flex-col items-center transform"
              >
                <FaFileAlt className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h4 className="text-2xl mb-2">
                  Precision Data Access
                </h4>
                <p className="text-white text-[.9rem] font-light mt-3">
                  Gain access to exclusive off-market aircraft transaction data,
                  unavailable on public platforms. Our proprietary database
                  empowers buyers and sellers with real-time, confidential
                  insights. Eliminate guesswork with data that reflects true
                  market behavior. SkyNet makes precision a default, not a
                  bonus.
                </p>
                <div className="lg:block hidden absolute group-hover:translate-y-[-60%] top-[50%] left-[10%] group-hover:left-[0%] transition-all duration-200 rotate-[45deg] w-[600px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </motion.div>

              {/* Card 2 (Center) */}
              <motion.div
                className="bg-[#13151c] group transition-all duration-200 relative z-[0] overflow-hidden rounded-3xl px-6 py-10 text-center flex flex-col items-center transform"
              >
                <FaLightbulb className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h4 className="font-semibold text-2xl mb-2">
                  Intelligent Market Analysis
                </h4>
                <p className="text-white text-[.9rem] font-light mt-3">
                  Our analytics engine processes vast datasets with zero MLS
                  dependency. SkyNet uses pattern recognition, historical
                  trends, and predictive logic to power decisions. You get
                  clarity in a market often filled with ambiguity. It’s not just
                  data—it’s guided intelligence.
                </p>
                <div className="lg:block hidden absolute group-hover:translate-y-[-60%] top-[50%] left-[10%] group-hover:left-[0%] transition-all duration-200 rotate-[45deg] w-[600px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="bg-[#13151c] group transition-all duration-200 relative z-[0] overflow-hidden rounded-3xl px-6 py-8 text-center flex flex-col items-center transform"
              >
                <FaShieldAlt className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h4 className="font-semibold text-2xl mb-2">
                  Verified Valuation Confidence
                </h4>
                <p className="text-white text-[.9rem] font-light mt-3">
                  Back every valuation with Mason Amelia’s tested and trusted
                  methodology. From corporate jets to private aircraft, our
                  accuracy is unmatched. Confidence isn’t optional when millions
                  are at stake—it’s required. With SkyNet, peace of mind comes
                  built-in.
                </p>
                <div className="lg:block hidden absolute group-hover:translate-y-[-60%] top-[50%] left-[10%] group-hover:left-[0%] transition-all duration-200 rotate-[45deg] w-[600px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkynetAdvantage;
