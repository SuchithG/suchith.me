import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, datas, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
  const handleCloseAccordion = () => Index === Id && setIndex(null); // Close the accordion when HiX is clicked

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group w-full cursor-pointer  mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:bg-black hover:shadow-lg focus:bg-white"
      >
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold pl-10 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-black" />
          ) : (
            <HiX
              className="w-6 h-6 group-hover:text-white text-black cursor-pointer"
              onClick={handleCloseAccordion} // Close the accordion when HiX is clicked
            />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-red-600 pl-10 font-semibold text-white w-full h-auto rounded-md p-4 border-l-2 mb-2 ">
          {datas}
        </div>
      )}
    </>
  );
};

export default AccordionUI;