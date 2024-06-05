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
      className=" absolute  left-8 md:left-16 lg:left-12 xl:left-16 -top-[30vh]  md:top-[5vh] lg:top-[20vh] xl:top-[23vh]  w-11/12 md:w-5/6   h-{60vh} md:h-[40vh] flex items-center justify-center   border rounded-2xl "
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
