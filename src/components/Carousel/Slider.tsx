"use client";
import React, { useState, useEffect } from "react";
import { radios as completeRadios } from "@/lib/data";
import Card from "./Card";
import Image from "next/image";
import Description from "./Description";

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
    <div className=" w-screen h-screen my-5 sm:my-10 md:h-[85vh]  relative flex flex-col lg:flex-row items-center    mt-10      ">
      <div className="relative  flex  items-center justify-center  w-full lg:w-1/2 h-full  ">
        {radios.map((radio, i) => (
          <Card
            key={radio.id}
            radio={radio}
            zIndex={calculateZIndex(i, frontCardIndex, radios.length)}
            index={i}
          />
        ))}
      </div>

      <Description
        name={radios[frontCardIndex].name}
        description={radios[frontCardIndex].description}
        color={radios[frontCardIndex].color}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Slider;
