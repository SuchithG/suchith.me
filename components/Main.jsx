import React from "react";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s start building !🚀
          </p>
          <h1 className="py-4">
            Hey, I&apos;m <span className="text-red-500">Suchith.</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Developer and Tech enthusiast. I work as a Full Stack
            Developer at Codosphere. Currently, I&apos;m focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
