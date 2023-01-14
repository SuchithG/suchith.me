import Image from "next/image";
import Link from "next/link";
import React from "react";

import NodeFarm from "../public/assets/projects/NodeFarm.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-red-500  text-xl tracking-widest ">
          Projects
        </p>
        <h2 className="py-2 text-gray-700">What I&aposve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Node Farm"
            backgroundImg={NodeFarm}
            projectUrl="/Nodefarm"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
