"use client";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <section className="min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl text-center">
        <motion.div
          className="text-3xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span>Trusted</span>
          <span className="bg-black text-white px-4 py-2 rounded-xl">
            Partner
          </span>
          <span>for</span>
        </motion.div>

        <motion.div
          className="mt-4 text-3xl sm:text-6xl lg:text-7xl font-bold text-black flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span>Your Website</span>
          <span className="bg-black text-white px-4 py-2 rounded-xl">
            Develop.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
