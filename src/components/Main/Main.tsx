"use client";

import React, { useEffect, useState } from "react";

import Vynil from "@/components/Main/Vynil";
import Radio from "../Radio";
import useRadioStore from "@/store";
import MainHeader from "./MainHeader";


interface Props {
  radios: Radio[];
}





const Main = ({ radios }: Props) => {
  const currentRadioColor = useRadioStore((state) => state.radio.color);
  const isPlaying = useRadioStore((state) => state.playState);


  const { stations, setStations } = useRadioStore();

  useEffect(() => {
    setStations(radios);

  }, [radios, stations, setStations]);

  if (stations.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Cargando emisoras...</div>
        {/* Aquí puedes usar un componente de carga más sofisticado si lo deseas */}
      </div>
    );
  }





  return (
    <section className="relative flex  items-center justify-center w-full px-20 h-screen  ">
      <MainHeader bold="Nuestras" thin="Estaciones" />
      <Vynil color={currentRadioColor} isPlaying={isPlaying} />
      <div className="absolute flex flex-col   md:px-0 gap-5  md:gap-0 md:flex-row flex-wrap top-[20%] md:top-0 left-0 h-full w-1/2 md:w-full md:h-full ">
        {stations.map((radio: Radio) => (
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



