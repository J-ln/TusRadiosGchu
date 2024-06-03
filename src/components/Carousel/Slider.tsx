"use client";
import React, { useState, useEffect } from "react";
import { radios as completeRadios } from "@/lib/data";
import Card from "./Card";
import useRadioData from "@/lib/fetchRadioData";
import Image from "next/image";
import PrevIcon from "../../icons/i-prev.png";
import NextIcon from "../../icons/i-next.png";
import next from "next";

const Slider = () => {
  const [frontCardIndex, setFrontCardIndex] = useState(0);
  const radios = completeRadios;

  const calculateZIndex = (
    index: number,
    frontCardIndex: number,
    totalCards: number
  ): number => {
    if (index === frontCardIndex) return 0; // La Card al frente tiene un zIndex de 0
    let zIndex = -10 * ((index - frontCardIndex + totalCards) % totalCards);
    return zIndex;
  };

  const handleNext = () => {
    // Lógica para mover la siguiente Card al frente
    setFrontCardIndex((prevIndex) => (prevIndex + 1) % radios.length);
  };

  const handlePrev = () => {
    // Lógica para mover la Card anterior al frente
    setFrontCardIndex(
      (prevIndex) => (prevIndex - 1 + radios.length) % radios.length
    );
  };

  return (
    <div className="basis-full w-full h-[70vh]  relative flex flex-row items-center  mt-20 transition-transform ease-in-out duration-500 rounded-2xl  ">
      <div className="relative float-start basis-1/2 w-full h-full   ">
        {radios.map((radio, i) => (
          <Card
            key={radio.id}
            radio={radio}
            zIndex={calculateZIndex(i, frontCardIndex, radios.length)}
            index={i}
          />
        ))}
      </div>
      <div className="relative  flex flex-col justify-around w-1/2 h-full  p-4  rounded-2xl  metal  ">
        <div className=" flex flex-col items-center justify-center ">
          <div className="w-3/4 h-24  flex items-center justify-center bg-black  boder-2 ridge-border-slider">
            <h3
              className=" text-6xl font-bold  "
              style={{ color: radios[frontCardIndex].color }}
            >
              {radios[frontCardIndex].name}
            </h3>
          </div>
          <div className="w-3/4 h-48 bg-[#000000] bg-opacity-90  p-2 border-black border-4 ">
            <p className="text-xl text-white font-thin">
              {radios[frontCardIndex].description}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-8  ">
          <button
            onClick={handlePrev}
            className="rounded-2xl h-20 w-40 metal radial flex items-center justify-center border-[1px] border-black"
          >
            <Image src={PrevIcon} alt="Radio" width={64} height={64} />
          </button>
          <button
            onClick={handleNext}
            className="rounded-2xl h-20 w-40 metal radial flex items-center justify-center border-[1px] border-black"
          >
            <Image src={NextIcon} alt="Radio" width={64} height={64} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
