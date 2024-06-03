"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Radio } from "@/lib/data";
import useRadioStore from "./../store/index";
import Image from "next/image";

const Radio = (radio: Radio) => {
  const { setRadio } = useRadioStore();
  return (
    <div className=" flex justify-center items-center h-1/2 w-1/2 ">
      <motion.button
        className="rounded-full h-36 w-36  text-white border-4 "
        style={{ backgroundColor: radio.color, borderColor: radio.color }}
        onClick={() => setRadio(radio)}
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
