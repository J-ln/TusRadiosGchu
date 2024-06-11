import React from "react";
import DescButton from "@/components/Carousel/DescButton";
import PrevIcon from "@/icons/i-prev.png";
import NextIcon from "@/icons/i-next.png";

interface Props {
  name: string;
  description: string;
  color: string;
  handlePrev: () => void;
  handleNext: () => void;
}
const Description = ({
  name,
  description,
  color,
  handlePrev,
  handleNext,
}: Props) => {
  return (
    <div className="relative  flex flex-col justify-around w-full lg:w-1/2 h-fit   p-6 pb-0 rounded-2xl  desc-container-bg  ">
      <div className=" flex flex-col items-center justify-center z-10">
        <div className="w-full  h-24  flex items-center justify-center desc-bg  z-20 ">
          <h3
            className=" text-4xl md:text-5xl xl:text-6xl font-bold transition-all duration-400   "
            style={{ color: color }}
          >
            {name}
          </h3>
        </div>
        <div className="w-full  h-48 desc-bg  p-2 border-black   z-10">
          <p className="text-base md:text-lg xl:text-xl text-white font-thin">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center w-fit gap-2 h-fit px-2 pt-1 mt-2 rounded-sm bg-black  z-10  ">
          <DescButton handleEvent={handlePrev} icon={PrevIcon} />
          <DescButton handleEvent={handleNext} icon={NextIcon} />
        </div>
      </div>
    </div>
  );
};

export default Description;
