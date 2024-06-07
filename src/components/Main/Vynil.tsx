import React, { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useRadioStore from "@/store/index";
import useBackgroundAnimation from "@/app/hooks/useBackgroundAnimation";

interface VynilProps {
  color: string;
  isPlaying: boolean;
}
const Vynil = ({ color, isPlaying }: VynilProps) => {
  const currentRadioColor = useRadioStore((state) => state.radio.color);
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
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  z-10 rounded-full h-[150px] w-[150px] backdrop-contrast-75 shadow-black "
      ></motion.div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black z-20 rounded-full h-[20px] w-[20px]"></div>
    </motion.div>
  );
};

export default Vynil;
