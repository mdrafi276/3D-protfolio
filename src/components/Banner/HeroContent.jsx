import React from "react";
import { motion } from "framer-motion";
import resume from "/resume.pdf";
import { styles } from "../../styles";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "./Motion";
import { useTypewriter } from "react-simple-typewriter";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";

const HeroContent = () => {

  const [text] = useTypewriter({
    words: [
      " I develop my protfolio,  web applications",
      "i'm Full Stack            web developer",
    ],
    loop: 0,
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse  lg:flex-row items-center justify-center px-6  lg:px-20  gap-10 lg:gap-52 mt-10 lg:mt-40 w-full "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div className="flex justify-center lg:justify-start items-center">
          {" "}
          <motion.div
            variants={slideInFromTop}
            className=" Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
            <h1 className=" Welcome-text   text-[13px]">
              Web Developer Portfolio
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6  lg:text-start text-center text-3xl lg:text-6xl font-bold text-white w-full lg:max-w-[600px]  h-auto"
        >
          <span>
            Hello i'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Rafi{" "}
            </span>
          </span>
        </motion.div>
        <motion.div>
          <motion.div className="md:w-[340px]">
            {" "}
            <p className={`${styles.heroSubText}   mt-2 font-semibold  h-one`}>
              {text} <br className="sm:block hidden" />
              {/* web applications */}
            </p>
          </motion.div>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className=" md:text-xl text-sm lg:text-xl text-gray-400 my-1 w-full lg:max-w-[600px]"
        >
          I'm a Full Stack Web Developer with experience in responsive and user
          friendly Website development. Check out my projects and skills.
        </motion.p>
        <motion.div className="flex justify-center lg:justify-start items-center">
          {" "}
          <motion.a
            variants={slideInFromLeft(1)}
            className=" welcome-box left-0 py-2  button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <a href={resume} download="Resume of Rafi">
              <button className="c-button left-0 c-button--gooey  text-sm  rounded-2xl">
                {" "}
                Resume
                <div className="c-button__blobs  rounded-xl">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </a>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <figure className="w-[180px] lg:h-[420px]  rounded-full bg-cover  border-[#14ADD7] border-2 h-[180px] lg:w-[420px]">
          {" "}
          <img
            className="lg:w-[400px] rounded-full w-[300px] h-[150px]  lg:h-[400px] object-cover"
            src="https://i.ibb.co/w6st9c0/1703963452939-01-removebg-preview.png"
            alt=""
          />
        </figure>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
