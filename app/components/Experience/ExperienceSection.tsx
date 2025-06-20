"use client";

import { motion, Variants } from "framer-motion";
import { MoveDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-6xl flex flex-col mx-auto px-4 py-8 space-y-12"
    >
      <motion.div
        variants={fadeUp}
        className="w-full flex justify-end items-center gap-4 p-5"
      >
        <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
          <MoveDown className="w-5 h-5" />
        </div>
        <button className="px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-pointer">
          About
        </button>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 flex flex-wrap justify-center gap-2">
          I've been
          <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
            Developing
          </span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 flex flex-wrap justify-center gap-2">
          Websites since
          <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
            2013
          </span>
        </h2>

        <p className="text-base md:text-lg text-black max-w-2xl mx-auto mb-16 px-2">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="w-full px-4 py-8 flex max-lg:flex-col"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
          <h3 className="text-lg font-bold text-black mr-4 whitespace-nowrap tracking-wide mb-2 md:mb-0">
            PREVIOUSLY
            <br />
            WORKED ON
          </h3>
          <div className="h-px bg-black flex-1 ml-0 md:ml-8 w-full md:w-auto"></div>
        </div>

        <div className="relative h-40 lg:h-32 w-full max-lg:mt-5">
          <motion.div
            variants={fadeUp}
            className="absolute top-4 left-30 md:left-20 bg-black text-white p-4 rounded-full text-sm font-medium transform rotate-10 hover:rotate-0 transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            awwwards.
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute bottom-1 left-4 bg-white border border-black p-4 rounded-full text-sm font-medium transform transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            CSS WINNER
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute bottom-4 left-44 bg-white border border-black p-4 rounded-full text-sm font-medium transform -rotate-10 hover:rotate-0 transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            /thoughtworks
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute -bottom-6 md:bottom-0 left-60 md:left-80 bg-white border border-black p-4 rounded-full text-sm font-medium transform hover:rotate-0 transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            AUTODESK
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute top-0 md:left-72 bg-white border border-black p-4 rounded-full text-sm font-medium transform hover:rotate-0 transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            facebook
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute top-8 left-60 md:left-[28rem] bg-white border border-black p-4 rounded-full text-xs font-medium transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer whitespace-nowrap"
          >
            CSSDesignAwards
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
