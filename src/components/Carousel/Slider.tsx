"use client";
import React, { useState, useEffect } from "react";

import Card from "./Card";
import Image from "next/image";
import Description from "./Description";
import useRadioStore from "@/store";

const Slider = () => {
  const [frontCardIndex, setFrontCardIndex] = useState(0);
  const stations = useRadioStore((state) => state.stations);

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
    setFrontCardIndex((prevIndex) => (prevIndex + 1) % stations.length);
  };

  const handlePrev = () => {
    // Lógica para mover la Card anterior al frente
    setFrontCardIndex(
      (prevIndex) => (prevIndex - 1 + stations.length) % stations.length
    );
  };

  if (stations.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Cargando emisoras...</div>
        {/* Aquí puedes usar un componente de carga más sofisticado si lo deseas */}
      </div>
    );
  }

  return (
    <div className=" w-full h-screen my-5 sm:my-10 md:h-[85vh]  relative flex flex-col lg:flex-row items-center    mt-10      ">
      <div className="relative  flex  items-center justify-center  w-full lg:w-1/2 h-full  ">
        {stations.map((radio, i) => (
          <Card
            key={radio.id}
            radio={radio as any}
            zIndex={calculateZIndex(i, frontCardIndex, stations.length)}
            index={i}
          />
        ))}
      </div>

      <Description
        name={stations[frontCardIndex].name}
        description={stations[frontCardIndex].description}
        color={stations[frontCardIndex].color}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Slider;
