import Image from "next/image";
import Link from "next/link";
import React from "react";

import Node_Farm from "../public/assets/projects/Node_Farm";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-red-500  text-xl tracking-widest ">
          Projects
        </p>
        <h2 className="py-2 text-gray-700">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Node Farm"
            backgroundImg={Node_Farm}
            projectUrl="/property"
          />
          {/* <ProjectItem
            title="Node Farm"
            backgroundImg={suchith}
            projectUrl="/property"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
