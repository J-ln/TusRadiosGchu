import React from "react";
import { AnimationControls, motion, MotionValue } from "framer-motion";
import clsx from "clsx";

interface BlurElementProps {
  isPlaying: boolean;
  gradient: MotionValue;
  controls: AnimationControls;
}

const BlurElement = ({ isPlaying, gradient, controls }: BlurElementProps) => {
  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.4, type: "tween", ease: "linear" }}
      style={{ background: gradient }}
      className={clsx(
        "  w-full h-1/2 blur-3xl  transition-all duration-500 ",
        isPlaying && "animate-pulse"
      )}
    ></motion.div>
  );
};

export default BlurElement;
