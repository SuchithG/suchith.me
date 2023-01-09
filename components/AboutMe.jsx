import Image from "next/image";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import profile from "../public/profile.jpeg";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-gray-600">
          <p className="uppercase text-red-500  text-xl tracking-widest ">
            About
          </p>
          <p className="py-4 text-gray-700">Who I AM</p>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <p>
              I have been a Software Developer for over a year and currently
              work for a Service based Software company. I am skilled in
              HTML/CSS, JavaScript, React.js, TypeScript, Next.js and Node.js. I
              have worked with both web-based, multi-threaded applications as
              well as front-end development using the latest web technologies.
              I&apos;m experienced in developing customer service-oriented
              applications.
            </p>
            <p className="py-2">
              In addition to my skills in coding, I am skilled in conducting
              operational analysis as well as assisting clients in project
              management.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </AnimationOnScroll>
        </div>
        <div className="h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <Image
              className="rounded-xl"
              src={profile}
              alt="/"
              width={300}
              height={300}
            ></Image>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default About;
