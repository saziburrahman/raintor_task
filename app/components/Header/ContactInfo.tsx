"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="flex items-center mx-6">
      <div className="flex  items-center justify-between w-full px-4 md:px-12 gap-8">
        <motion.div
          className="relative flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-[-90deg] text-lg font-bold">
            @williamrey
          </span>

          <div className="flex flex-col items-center space-y-3 ps-6">
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <div className="w-px h-10 bg-black" />
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-medium mb-2">
            Building the world's best marketing websites for over a decade.
          </h1>
          <p className="text-lg mb-6">
            Your trusted partner for strategy, design, and dev.
          </p>
          <button className="inline-flex items-center border border-black pe-6 py-3 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <Phone className="w-12 h-12 mr-3 border rounded-full p-3" />
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
