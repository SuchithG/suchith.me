import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import profile from "../public/profile.jpeg";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
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
                  delay: 2.0,
                },
              },
            }}
          >
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
              Hey, I&apos;m <span className="text-red-500">Suchith.</span>
            </h1>
          </motion.div>
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
                  delay: 2.5,
                },
              },
            }}
          >
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                I&apos;m a Developer and Tech enthusiast. I work as a Full Stack
                Developer at{" "}
                <Link legacyBehavior href="https://www.codosphere.com/">
                  <a
                    className={
                      "transition-colors hover:text-yellow-500 font-bold"
                    }
                  >
                    Codosphere.
                  </a>
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
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
                delay: 1.5,
              },
            },
          }}
        >
          <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 w-250 h-250 border-none">
            <Image
              src={profile}
              alt="Profile"
              priority={true}
              className="squared-full"
              placeholder="blur"
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
