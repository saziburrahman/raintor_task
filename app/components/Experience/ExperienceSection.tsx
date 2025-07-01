"use client";

import { motion, Variants } from "framer-motion";
import { MoveDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverScale: Variants = {
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function ExperienceSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      <motion.div
        variants={fadeUp}
        className="w-full flex justify-end items-center gap-3 sm:gap-4 p-4 sm:p-5"
      >
        <motion.div
          variants={hoverScale}
          whileHover="hover"
          className="w-10 h-10 border border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer shadow-sm"
        >
          <MoveDown className="w-5 h-5" />
        </motion.div>
        <motion.button
          variants={hoverScale}
          whileHover="hover"
          className="px-4 sm:px-6 py-2 border border-black rounded-full text-sm font-medium bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer shadow-sm"
        >
          About
        </motion.button>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 flex flex-wrap justify-center gap-2">
          I've been
          <span className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg inline-block">
            Developing
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 flex flex-wrap justify-center gap-2">
          Websites since
          <span className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg inline-block">
            2013
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10 px-2">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="w-full px-4 py-8 flex flex-col lg:flex-row gap-6 lg:gap-8"
      >
        <div className="flex flex-col items-start lg:items-center mb-6 lg:mb-0">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black tracking-wide mb-4 lg:mb-0">
            PREVIOUSLY WORKED ON
          </h3>
          <div className="h-px bg-black w-full lg:w-32 lg:ml-8"></div>
        </div>

        <div className="relative flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            awwwards.
          </motion.div>

          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-white border border-black px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            CSS WINNER
          </motion.div>

          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-white border border-black px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            /thoughtworks
          </motion.div>

          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-white border border-black px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            AUTODESK
          </motion.div>

          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-white border border-black px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform rotate-10 hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            facebook
          </motion.div>

          <motion.div
            variants={{ ...fadeUp, ...hoverScale }}
            whileHover="hover"
            className="bg-white border border-black px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
          >
            CSSDesignAwards
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
