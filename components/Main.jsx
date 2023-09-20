import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { motion } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s start building! 🚀
          </p>
          <h1 className="py-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                  },
                },
              }}
            >
              Hey, I&apos;m <span className="text-red-500">Suchith.</span>
            </motion.div>
          </h1>
          <h1 className="py-4 text-gray-700">Code Lover and Tech-Savvy</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a devoted Developer and a Tech Enthusiast presently channeling my energy into crafting responsive front-end web applications, all while expanding my knowledge and skills in back-end technologies.
          </p>
          <AnimationOnScroll animateIn="animate__slideInUp">
            <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://www.linkedin.com/in/suchith-g-04ba54183/">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://github.com/SuchithG">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <ImTwitter />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Main;
