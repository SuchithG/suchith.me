import React from "react";

import suchith from "../public/assets/suchith.jpeg";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-[1240px] m-auto md:grid grid-col-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <p>Who I AM</p>
          <p>// I am not your normal developer</p>
          <p>
            I have been a Software Developer for over a year and currently work
            for a Service based Software company. I am skilled in HTML/CSS,
            JavaScript, React.js, TypeScript, Next.js and Node.js. I have worked
            with both web-based, multi-threaded applications as well as
            front-end development using the latest web technologies. I'm
            experienced in developing customer service-oriented applications.
          </p>
          <p>
            In addition to my skills in coding, I am skilled in conducting
            operational analysis as well as assisting clients in project
            management.
          </p>
          <p>Check out some of my latest projects.</p>
        </div>
        <div>
          <img src={suchith} alt="/"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
