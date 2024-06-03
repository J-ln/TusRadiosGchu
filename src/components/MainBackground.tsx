import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import useRadioStore from "../store";
import BlurElement from "./Background/BlurElement";
import {
  backgroundGradient1,
  backgroundGradient2,
  backgroundGradient3,
  currentColor as cColor,
} from "../lib/motionData";

const MainBackground = () => {
  const isPlaying = useRadioStore((state) => state.playState);
  const currentRadioColor = useRadioStore((state) => state.radio.color);
  const currentColor = useMotionValue(cColor);
  const gradient1 = useMotionValue(backgroundGradient1);
  const gradient2 = useMotionValue(backgroundGradient2);
  const gradient3 = useMotionValue(backgroundGradient3);

  useEffect(() => {
    animate(currentColor, currentRadioColor, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    }).then(() => {
      currentColor.set(currentRadioColor);
    });
  }, [currentRadioColor, currentColor, isPlaying]);
  return (
    <div className="relative flex flex-col justify-between w-full h-screen">
      <BlurElement isPlaying={isPlaying} gradient={gradient1} />
      <BlurElement isPlaying={isPlaying} gradient={gradient2} />
      <BlurElement isPlaying={isPlaying} gradient={gradient3} />
    </div>
  );
};

export default MainBackground;
