"use client";

import { motion, Variants } from "framer-motion";
import { MoveDown } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      Ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function MyWorkProcess() {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 rounded-3xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 relative overflow-hidden">
      <div className="relative z-10">
        <motion.div
          className="grid lg:grid-cols-3 items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex max-lg:flex-col items-center gap-2 sm:gap-3">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 p-2 border border-gray-400 rounded-full flex items-center justify-center text-sm hover:bg-gray-700 transition-colors duration-300"
            >
              <MoveDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <motion.span
              variants={buttonVariants}
              whileHover="hover"
              className="border cursor-pointer border-white text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Work Process
            </motion.span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            My Work Process
          </h2>
          <div />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Discovery",
              bg: "bg-gray-800",
              badgeBg: "bg-teal-300 text-black",
              text: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
              color: "text-gray-300",
              linkColor: "text-gray-400 hover:text-white",
              rotate: "",
            },
            {
              title: "Strategy",
              bg: "bg-lime-300 text-black",
              badgeBg: "bg-black text-white",
              text: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand IDs, consultation to in-depth code reviews we're here to set the stage for success.",
              color: "text-gray-800",
              linkColor: "text-gray-700 hover:text-black",
              rotate: "rotate-2",
            },
            {
              title: "Design",
              bg: "bg-gray-800",
              badgeBg: "bg-teal-300 text-black",
              text: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
              color: "text-gray-300",
              linkColor: "text-gray-400 hover:text-white",
              rotate: "",
            },
            {
              title: "Build",
              bg: "bg-gray-800",
              badgeBg: "bg-teal-300 text-black",
              text: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
              color: "text-gray-300",
              linkColor: "text-gray-400 hover:text-white",
              rotate: "",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bg} ${item.rotate} p-4 sm:p-6 rounded-2xl w-full cursor-pointer`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`${item.badgeBg} px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium`}
                >
                  {item.title}
                </span>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  className={`flex items-center gap-2 text-xs sm:text-sm cursor-pointer ${item.linkColor}`}
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
              <p
                className={`${item.color} text-sm sm:text-base leading-relaxed`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
