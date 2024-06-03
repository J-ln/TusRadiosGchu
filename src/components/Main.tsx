"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import vinyl from "../images/vinyl-nb.png";
import Radio from "./Radio";
import { radios } from "../lib/data";
import Player from "./Player/Player";
import useRadioStore from "@/store";

import MainBackground from "./MainBackground";
const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const currentRadio = useRadioStore((state) => state.radio);

  return (
    <section className="relative flex  items-center justify-center w-full px-20 h-screen bg-black">
      <MainBackground />
      <div
        className="  absolute left-20 
      top-1/2  m-0 z-10 w-fit h-fit  -translate-y-1/2 "
      >
        <h3
          className="text-center text-5xl-main font-black 
           "
        >
          Nuestras
          <span className="text-5xl font-thin ">
            <br />
            Estaciones
          </span>
        </h3>
      </div>
      <Image
        src={vinyl}
        alt={"vinyl"}
        width={500}
        height={500}
        style={{
          backgroundColor: "transparent",
          zIndex: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Image>
      <div className="absolute flex flex-row flex-wrap top-0 left-0 w-full h-full">
        {radios.map((radio) => (
          <Radio
            key={radio.id}
            id={radio.id}
            name={radio.name}
            url={radio.url}
            color={radio.color}
            image={radio.image}
          />
        ))}
      </div>
      {currentRadio.id !== 0 && <Player />}
    </section>
  );
};

export default Main;
