import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "Associate Software Engineer",
      answer: "Codosphere Inc",
    },
    {
      id: 2,
      question: "Team Leader, Operations",
      answer: "Workex Solutions & Services Pvt. Ltd",
    },
    {
      id: 3,
      question: "Client servicing associate",
      answer: "Workex Solutions & Services Pvt. Ltd",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      <p className="font-semibold mb-8 text-black">Work experience</p>
      {data.map((data) => {
        return (
          <AccordionUI
            key={data}
            title={data.question}
            Id={data.id}
            datas={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
