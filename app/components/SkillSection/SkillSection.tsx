"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveDown } from "lucide-react";
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
      cx="49.5001"
      cy="49.5024"
      rx="48.5"
      ry="15"
      transform="rotate(-60 49.5001 49.5024)"
      stroke="white"
      strokeWidth="2"
    />
    <ellipse
      cx="49.4999"
      cy="49.5022"
      rx="48.5"
      ry="15"
      transform="rotate(60 49.4999 49.5022)"
      stroke="white"
      strokeWidth="2"
    />
    <circle cx="50" cy="50" r="7" fill="#C5FF41" />
  </svg>
);

export default function SkillSection() {
  return (
    <section className="w-full bg-black text-white px-6 py-16 md:px-16 rounded-3xl">
      <motion.div
        className="inline-flex items-center gap-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MoveDown className="w-10 h-10 p-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition cursor-pointer" />
        <span className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition cursor-pointer">
          Why Choose me
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            My Extensive
            <br />
            List of Skills
          </h2>
        </motion.div>

        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            Building the world's best marketing
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>
          <hr className="border-gray-600 my-4 w-20" />
          <div className="flex gap-4">
            <button className="p-3 cursor-pointer border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-3 cursor-pointer border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {[
          { title: "HTML & CSS", tilt: "rotate-0", icon: icon },
          { title: "Javascript", tilt: "rotate-5", icon: icon },
          { title: "Webflow", tilt: "rotate-0", icon: icon },
        ].map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <SkillCard skill={skill} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
