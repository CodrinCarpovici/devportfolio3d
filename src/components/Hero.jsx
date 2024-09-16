import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div className="display-title" style={{ "--stacks": 3 }}>
            <span style={{ "--index": 0 }}>
              Hi, I'm <span className="text-[#915EFF]">Codrin</span>
            </span>
            <span style={{ "--index": 1 }}>
              Hi, I'm <span className="text-[#915EFF]">Codrin</span>
            </span>
            <span style={{ "--index": 2 }}>
              Hi, I'm <span className="text-[#915EFF]">Codrin</span>
            </span>
          </div>

          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in and move to its original position
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
          >
            I develop user interfaces, web <br className="sm:block hidden" />
            applications and web designs
          </motion.p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
