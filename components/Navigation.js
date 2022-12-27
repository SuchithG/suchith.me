import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ThemeSwitch from "../components/ThemeSwitch";
import Mylogo from "../public/assets/Mylogo.png";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black-[100]">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link legacyBehavior href="/">
          <a
            className={
              "font-bold tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white"
            }
          >
            <motion.h1 whileHover={{ scale: 1.2 }}>
              <Image src={Mylogo} alt="/" width="100" height="50"></Image>
            </motion.h1>
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
