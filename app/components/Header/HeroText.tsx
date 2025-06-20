"use client";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <section className="min-h-[400px] md:min-h-[500px] flex items-center m-6 md:ms-12">
      <div>
        <motion.div
          className="text-2xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight flex flex-wrap gap-3"
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
          className="mt-3 text-2xl sm:text-5xl lg:text-7xl font-bold text-black flex flex-wrap gap-3"
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
