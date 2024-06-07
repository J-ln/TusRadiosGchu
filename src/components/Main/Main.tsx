"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vynil from "@/components/Main/Vynil";
import Radio from "../Radio";
import { radios } from "../../lib/data";
import Player from "@/components/Player/Player";
import useRadioStore from "@/store";

import MainBackground from "../MainBackground";
import MainHeader from "./MainHeader";

const Main = () => {
  const currentRadioColor = useRadioStore((state) => state.radio.color);
  const currentRadio = useRadioStore((state) => state.radio);
  const isPlaying = useRadioStore((state) => state.playState);

  return (
    <section className="relative flex  items-center justify-center w-full px-20 h-screen bg-black crt-screen">
      <MainBackground />
      <MainHeader bold="Nuestras" thin="Estaciones" />
      <Vynil color={currentRadioColor} isPlaying={isPlaying} />
      <div className="absolute flex flex-col   md:px-0 gap-5  md:gap-0 md:flex-row flex-wrap top-[20%] md:top-0 left-0 h-full w-1/2 md:w-full md:h-full ">
        {radios.map((radio) => (
          <Radio
            key={radio.id}
            id={radio.id}
            name={radio.name}
            url={radio.url}
            color={radio.color}
            image={radio.image}
            description=""
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
