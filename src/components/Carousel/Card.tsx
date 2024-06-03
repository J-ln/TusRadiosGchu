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
  const y = zIndex === 0 ? 0 : (zIndex / 10) * 15;
  const x = zIndex === 0 ? 0 : (zIndex / 10) * 10;

  return (
    <motion.div
      className=" absolute left-0 bottom-0 w-full  max-w[300px] h-full flex items-center justify-center object-cover  border rounded-2xl "
      style={{
        zIndex: zIndex,
        backgroundColor: radio.color,
        opacity: zIndex === 0 ? 1 : 0.8,
      }}
      initial={{
        scale: 0.9,
      }}
      animate={{ translateX: x, translateY: y }}
      transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
      key={radio.id}
    >
      <Image
        src={radio.image}
        alt={radio.name}
        width={350}
        height={350}
        className="object-contain  rounded-2xl"
      />
    </motion.div>
  );
};

export default Card;
