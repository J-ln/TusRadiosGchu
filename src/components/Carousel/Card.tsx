import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import type { RadioCarousel } from "@/lib/data";

interface CardProps {
  radio: RadioCarousel;
  zIndex: number;
  index: number;
}

const Card: React.FC<CardProps> = ({ radio, zIndex, index }) => {
  const y = zIndex === 0 ? 0 : (zIndex / 10) * 20;
  const x = zIndex === 0 ? 0 : (zIndex / 10) * 25;

  return (
    <motion.div
      className=" absolute  right-1  w-11/12    h-[70%]  flex items-center justify-center   border rounded-2xl "
      style={{
        zIndex: zIndex,
        backgroundColor: radio.color,
        mixBlendMode: zIndex === 0 ? "normal" : "luminosity",
      }}
      initial={{
        scale: 0.9,
      }}
      animate={{ translateX: x, translateY: y }}
      transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
      key={radio.id}
    >
      <div className="w-48 h-48 flex items-center justify-center">
        <Image
          src={radio.image}
          alt={radio.name}
          fill={true}
          className="object-contain rounded-2xl"
        />
      </div>
    </motion.div>
  );
};

export default Card;
