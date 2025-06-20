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
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16 bg-[url('/vector-bg-1.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-md:mx-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center">
                <MoveDown className="w-8 h-8 border-2 p-2 border-black rounded-full flex items-center justify-center text-sm font-bold" />
                <span className="bg-white border border-black px-4 py-2 rounded-full text-sm font-medium">
                  Contact
                </span>
              </div>
            </div>

            <motion.div variants={fadeUp} custom={1}>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Interested in{" "}
                <span className="bg-black text-white px-4 py-2 rounded-lg inline-block transform -rotate-1">
                  work
                </span>{" "}
                together?
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                We start every new client interaction with an in-depth discovery
                call where we get to know each other
              </p>
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={2}
              className="flex items-center gap-3 bg-white border-2 border-black pe-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-10 h-10 p-2 border border-black rounded-full flex items-center justify-center" />
              Schedule a Call
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={3}
            className="bg-black text-white p-8 rounded-3xl md:max-w-lg"
          >
            <div className="space-y-6">
              <motion.div variants={fadeUp} custom={4}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={5}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg resize-none"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={7}
                className="flex gap-4 pt-6"
              >
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white border border-white pe-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <Send className="w-8 h-8 p-2 border rounded-full flex items-center justify-center" />
                  Send
                </button>

                <span className="text-gray-400 self-center">or</span>

                <button
                  type="button"
                  className="flex items-center gap-2 border border-white pe-6 py-3 rounded-full font-medium hover:border-black hover:bg-white hover:text-black transition-colors"
                >
                  <Mail className="w-8 h-8 p-2 border border-gray-400 rounded-full flex items-center justify-center" />
                  Contact me
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={8}
                className="flex items-center gap-4 pt-6 border-t border-gray-800"
              >
                <span className="text-gray-400">@williamrey</span>
                <Minus />
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
