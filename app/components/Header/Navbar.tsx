"use client";

import { motion, Variants } from "framer-motion";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

const linkVariants: Variants = {
  hover: {
    scale: 1.1,
    color: "#4b5563", // gray-600
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#000000",
    color: "#ffffff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonClass =
    "flex items-center cursor-pointer gap-2 border border-black px-4 py-2 rounded-full transition-all duration-300";

  return (
    <nav className="h-[72px] sm:h-[96px] mx-2 sm:mx-4 md:mx-6 rounded-b-xl bg-white shadow-sm relative transition-all duration-300">
      <div className="h-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        <h1 className="text-xl sm:text-2xl font-extrabold uppercase text-black">
          Develop.me
        </h1>

        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          <ul className="flex space-x-6 xl:space-x-10 text-base sm:text-lg font-medium">
            {["Home", "About", "Portfolio", "Blog"].map((item, index) => (
              <motion.li key={item} variants={linkVariants} whileHover="hover">
                <a href="#" className="text-black hover:text-gray-600">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className={buttonClass}
          >
            <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 border rounded-full p-1" />
            <span>Start Project</span>
          </motion.button>
        </div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {menuOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 z-40 p-4 sm:p-6"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="flex flex-col space-y-4 text-base sm:text-lg font-medium">
            {["Home", "About", "Portfolio", "Blog"].map((item, index) => (
              <motion.li key={item} variants={linkVariants} whileHover="hover">
                <a href="#" className="text-black hover:text-gray-600">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className={`${buttonClass} mt-4 w-full justify-center`}
          >
            <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 border rounded-full p-1" />
            <span>Start Project</span>
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}
