import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { ImSearch } from "react-icons/im";

import Mylogo from "../public/assets/Mylogo.png";
import ThemeSwitch from "../components/ThemeSwitch";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handelShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handelShadow);
  }, []);

  return (
    <>
      <div
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-black"
            : "fixed w-full h-20 z-[100] bg-white dark:bg-black"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
          <Link href="/">
            <Image src={Mylogo} alt="/" width="50" height="50" />
          </Link>
          <div className="flex items-center">
            <div className="relative flex justify-between items-center max-w-[400px] w-full m-auto pt-4 text-white z-10">
              <form className="mb-5 flex justify-between items-center w-full m-auto p-3 bg-transparent border border-black-300 text-white rounded-2xl">
                <div>
                  <input
                    className={`border-none focus:outline-none text-1xl placeholder-black dark:placeholder-white text-black dark:text-white ${
                      theme === "dark" ? "bg-black" : "bg-transparent"
                    }`}
                    style={{ caretColor: theme === "dark" ? "white" : "black" }}
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {/* <button className="bg-white">
                  <ImSearch size={20} />
                </button> */}
              </form>
            </div>
            <ul className="hidden md:flex items-center justify-between">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
              <li className="ml-10 text-sm">
                <ThemeSwitch />
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 bg-white dark:bg-black"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src={Mylogo} width="87" height="35" alt="/" />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 ">
                  Let&apos;s start building !🚀
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <div>
                  <ThemeSwitch />
                </div>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
