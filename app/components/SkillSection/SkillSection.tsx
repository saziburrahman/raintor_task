"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveDown } from "lucide-react";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const icon = (
  <svg
    width="99"
    height="99"
    viewBox="0 0 99 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-4"
  >
    <ellipse
      cx="49.5"
      cy="49.5024"
      rx="48.5"
      ry="15"
      stroke="white"
      strokeWidth="2"
    />
    <ellipse
      cx="49.5"
      cy="49.5024"
      rx="48.5"
      ry="15"
      transform="rotate(-60 49.5 49.5)"
      stroke="white"
      strokeWidth="2"
    />
    <ellipse
      cx="49.5"
      cy="49.5024"
      rx="48.5"
      ry="15"
      transform="rotate(60 49.5 49.5)"
      stroke="white"
      strokeWidth="2"
    />
    <circle cx="50" cy="50" r="7" fill="#C5FF41" />
  </svg>
);

const slides = [
  "Building the world's best marketing websites.",
  "Trusted for strategy, design, and development.",
  "Delivering performance-driven web solutions.",
  "10+ years crafting digital experiences that convert.",
];

const slideVariants: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#ffffff",
    color: "#000000",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function SkillSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const skills = [
    { title: "HTML & CSS", tilt: "rotate-0", icon },
    { title: "JavaScript", tilt: "rotate-3", icon },
    { title: "Webflow", tilt: "-rotate-3", icon },
  ];

  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 rounded-3xl">
      <motion.div
        className="inline-flex items-center gap-2 sm:gap-3 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          className="w-10 cursor-pointer h-10 sm:w-12 sm:h-12 p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <MoveDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
        <motion.span
          variants={buttonVariants}
          whileHover="hover"
          className="px-4 cursor-pointer py-2 border border-white rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition"
        >
          Why Choose me
        </motion.span>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-10 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            My Extensive <br />
            List of Skills
          </h2>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                variants={slideVariants}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-300 text-sm sm:text-base md:text-lg absolute w-full"
              >
                {slides[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <hr className="border-gray-600 my-4 w-20 mt-12 sm:mt-14" />

          <div className="flex gap-3 sm:gap-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={handlePrev}
              className="p-2 sm:p-3 cursor-pointer border border-gray-500 rounded-full hover:bg-white hover:text-black transition"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleNext}
              className="p-2 sm:p-3 cursor-pointer border border-gray-500 rounded-full hover:bg-white hover:text-black transition"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <SkillCard skill={skill} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
