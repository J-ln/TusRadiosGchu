"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Radio } from "@/lib/data";
import useRadioStore from "./../store/index";
import Image from "next/image";

const Radio = (radio: Radio) => {
  const { setRadio } = useRadioStore();
  return (
    <div className=" flex flex-col justify-start  flex-wrap md:justify-center md:items-center h-fit w-32 md:h-1/2 md:w-1/2  ">
      <motion.button
        className=" rounded-s-none rounded-full md:rounded-full h-28 w-28 sm:h-36  sm:w-36  text-white border-4 "
        style={{ backgroundColor: radio.color, borderColor: radio.color }}
        onClick={() => setRadio(radio.id)}
        whileHover={{ backgroundColor: radio.color, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={radio.image}
          alt={radio.name}
          width={300}
          height={300}
          className="object-cover p-auto m-auto overflow-hidden"
          style={{ borderRadius: "50%" }}
        ></Image>
      </motion.button>
    </div>
  );
};

export default Radio;
