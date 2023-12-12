import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import resume from '/resume.pdf'

const Hero = () => {
const cursor = document.querySelector("#cursor");
const cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function(e){
  cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY + "px;"; + "px;";
})
  return (
    <section className={`relative contant w-full h-screen mx-auto`}>
      <div id="cursor"></div>
      <div id="cursor2"></div>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rafi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop my protfolio, <br className="sm:block hidden" />
            web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex-col flex justify-center items-center">
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
            />
          </div>
        </a>
      </div>
      <div className="absolute z-20 ml-8 md::ml-8 text-center  md:-mt-20 ">
        <a href={resume}
        download="Rafi vaiyer Resume"
        >
          <button className="c-button c-button--gooey  text-sm  rounded-2xl">
            {" "}
            Download Resume
            <div className="c-button__blobs  rounded-xl">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
