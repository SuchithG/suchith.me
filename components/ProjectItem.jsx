import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0z">
        <h3 className="text-2xl text-white tracking-wider text-center mb-2">
          {title}
        </h3>
        <p className="text-white text-center mb-2">JavaScript</p>
        <Link href={projectUrl}>
          <p className="text-center py-1 px-3 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
