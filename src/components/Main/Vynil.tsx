import React, { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useRadioStore from "@/store/index";
import useBackgroundAnimation from "@/app/hooks/useBackgroundAnimation";
import Image from "next/image";

interface VynilProps {
  color: string;
  isPlaying: boolean;
}
const Vynil = ({ color, isPlaying }: VynilProps) => {
  const currentImage = useRadioStore((state) => state.radio.image);
  const controls = useBackgroundAnimation(color);

  const rotation = useMotionValue(0);
  useEffect(() => {
    let animationFrameId: number;

    const updateRotation = () => {
      const currentRotation = rotation.get();
      rotation.set(currentRotation + 1); // Ajusta la velocidad de rotación aquí
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    // Iniciar la animación si el estado de play es true
    if (isPlaying) {
      animationFrameId = requestAnimationFrame(updateRotation);
    }

    // Detener la animación si el estado de play es false
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, isPlaying, rotation]);
  return (
    <motion.div
      style={{ rotate: rotation }}
      animate={controls}
      className="absolute m-auto p-auto z-0 bg-black rounded-full h-[450px] w-[450px] vynil vynil-shadow"
    >
      <motion.div
        style={{ background: color }}
        transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-center  z-10 rounded-full h-[150px] w-[150px] backdrop-contrast-75 shadow-black "
      >{
          currentImage ? (
            <Image
              src={currentImage}
              alt="vynil"
              width={125}
              height={125}
              className="object-cover p-auto m-auto rounded-full  overflow-hidden"
            ></Image>
          ) : null
        }</motion.div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black z-20 rounded-full h-[20px] w-[20px] border-white border-[1px]"></div>
    </motion.div>
  );
};

export default Vynil;
