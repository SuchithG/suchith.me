import React from "react";
import Image from "next/image";
import logo from "../public/logo.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey, I&apos;m Suchith.
          </h1>
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
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 w-250 h-250 border-none">
          <Image
            src={logo}
            alt="Profile"
            priority={true}
            className="squared-full"
            placeholder="blur"
            objectFit="cover"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
