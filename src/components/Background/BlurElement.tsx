import React from "react";
import { motion, MotionValue } from "framer-motion";
import clsx from "clsx";

interface BlurElementProps {
  isPlaying: boolean;
  gradient: MotionValue;
}

const BlurElement = ({ isPlaying, gradient }: BlurElementProps) => {
  return (
    <motion.div
      style={{ background: gradient }}
      className={clsx(
        "  w-full h-1/2 blur-3xl transition-all duration-500 ",
        isPlaying && "animate-pulse"
      )}
    ></motion.div>
  );
};

export default BlurElement;
