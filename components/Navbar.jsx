import Image from "next/image";
import Mylogo from "../public/assets/Mylogo.png";
import ThemeSwitch from "../components/ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image src={Mylogo} alt="/" width="125" height="50" />
          <ul>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
