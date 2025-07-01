"use client";

import { motion, Variants } from "framer-motion";

const linkVariants: Variants = {
  hover: {
    scale: 1.1,
    color: "#a3e635", // lime-400
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Footer() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 rounded-3xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 relative">
      <div className="relative p-4 sm:p-6 md:p-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex justify-between items-start mb-8 sm:mb-12 md:mb-16"
          >
            <div className="text-lime-400 text-lg sm:text-xl font-bold tracking-wider">
              DEVELOP.ME
            </div>
          </motion.div>
          <div className="w-full">
            <motion.div
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-24"
            >
              As you can
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-4">
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200 text-sm sm:text-base">
                      HELLO@DEVELOP.ME.COM
                    </p>
                    <p className="text-gray-200 text-sm sm:text-base">
                      MAHBUBUL@ME.COM
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-4">
                    Call
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200 text-sm sm:text-base">
                      +784849 4951 00
                    </p>
                    <p className="text-gray-200 text-sm sm:text-base">
                      +8849 0100 911
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-4">
                  Menu
                </h3>
                <div className="space-y-3">
                  {["HOME", "ABOUT", "PORTFOLIO", "BLOG"].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      variants={linkVariants}
                      whileHover="hover"
                      className="block text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-4">
                  Social
                </h3>
                <div className="space-y-3">
                  {[
                    "TWITTER",
                    "INSTAGRAM",
                    "FACEBOOK",
                    "BEHANCE",
                    "DRIBBBLE",
                  ].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      variants={linkVariants}
                      whileHover="hover"
                      className="block text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col md:flex-row justify-between items-start md:items-end pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="text-2xl sm:text-3xl font-bold mb-4 md:mb-0">
            BESNIK
          </div>

          <span className="text-gray-400 text-sm sm:text-base">
            &copy; develop.me 2022
          </span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 text-sm sm:text-base">
            <div className="flex gap-4">
              <motion.a
                href="#"
                variants={linkVariants}
                whileHover="hover"
                className="hover:text-white transition-colors"
              >
                PRIVACY
              </motion.a>
              <span>-</span>
              <motion.a
                href="#"
                variants={linkVariants}
                whileHover="hover"
                className="hover:text-white transition-colors"
              >
                TERMS
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
