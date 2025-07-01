"use client";

import { motion, Variants } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  Minus,
  MoveDown,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 sm:py-16 bg-[url('/vector-bg-1.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 border-2 border-black rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                <MoveDown className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                className="bg-white cursor-pointer border border-black px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-colors duration-300"
              >
                Contact
              </motion.span>
            </div>

            <motion.div variants={fadeUp} custom={1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Interested in{" "}
                <span className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg inline-block transform -rotate-1">
                  work
                </span>{" "}
                together?
              </h1>

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                We start every new client interaction with an in-depth discovery
                call where we get to know each other.
              </p>
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={2}
              whileHover="hover"
              className="flex items-center cursor-pointer gap-2 sm:gap-3 bg-white border-2 border-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 p-2 border border-black rounded-full" />
              Schedule a Call
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={3}
            className="bg-black text-white p-6 sm:p-8 rounded-3xl w-full max-w-full sm:max-w-md lg:max-w-lg"
          >
            <div className="space-y-6">
              <motion.div variants={fadeUp} custom={4}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={5}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-sm sm:text-base resize-none"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={7}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6"
              >
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="flex items-center cursor-pointer gap-2 text-white border border-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Send className="w-6 h-6 sm:w-8 sm:h-8 p-1 sm:p-2 border rounded-full" />
                  Send
                </motion.button>

                <span className="text-gray-400 self-center hidden sm:block">
                  or
                </span>

                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="flex items-center cursor-pointer gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 p-1 sm:p-2 border border-gray-400 rounded-full" />
                  Contact me
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={8}
                className="flex items-center gap-3 sm:gap-4 pt-6 border-t border-gray-800"
              >
                <span className="text-gray-400 text-sm sm:text-base">
                  @williamrey
                </span>
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    href="#"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
