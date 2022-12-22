import React from "react";
import {
  ImHeart,
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImLinkedin,
} from "react-icons/im";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <p className="flex flex-row">
              Built with
              <a
                href="#"
                className={
                  "transition-colors hover:text-yellow-500 pl-2 flex items-center"
                }
                target="_blank"
                rel="noreferrer"
              >
                <ImHeart />
              </a>
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
              <a
                href="#"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook />
              </a>
              <a
                href="#"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter />
              </a>
              <a
                href="#"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://github.com/SuchithG"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Footer;
