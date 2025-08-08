import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GlassmorphismCircularCard({
  title,
  tagline,
  icon,
  customClasses = "",
  link,
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: .5, delay: 1 }}
      className={`${customClasses}`}
    >
      <div
        className="
      relative
      flex flex-col items-center justify-center
      text-center lg:py-3 py-4
      w-full
      glassmorphism_card cursor-pointer group
    "
      >
        <div className="glassmorphism_effect_hover"></div>
        <Link to={link}>
          {/* Flip icon wrapper */}
          <div className="flip-container">
            <div className="inline-block flip-icon group-hover:flipped transition-transform duration-500">
              {icon}
            </div>
          </div>

          <h1 className="text-[.9rem] lg:text-base xl:text-lg font-semibold text-white px-4 rounded-md z-[12]">
            {title}
          </h1>
          <p className="px-3 text-xs lg:text-base font-light text-gray-300 z-[12]">
            {tagline}
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
