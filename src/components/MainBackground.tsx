"use client";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
import useRadioStore from "../store";
import BlurElement from "./Background/BlurElement";
import useBackgroundAnimation from "../app/hooks/useBackgroundAnimation";

const MainBackground = () => {
  const color = useRadioStore((state) => state.radio.color);
  const isPlaying = useRadioStore((state) => state.playState);
  const controls = useBackgroundAnimation(color);
  const backgroundGradient1 = useMotionTemplate`radial-gradient(
        125% 125% at 50% 100%,
        transparent 70%,
        ${color} 0%`;

  const backgroundGradient2 = useMotionTemplate`linear-gradient(
            180deg,
            transparent 25%,
            ${color} 50%,
            transparent 62.5%`;
  const backgroundGradient3 = useMotionTemplate`radial-gradient(
              125% 125% at 50% 10%,
              transparent 30%,
              ${color} 100%`;
  const backgroundGradient4 = useMotionTemplate`linear-gradient(
                180deg,
                transparent 42.5%,
                ${color} 50%,
                transparent 57.5%`;

  useEffect(() => { }, [color, isPlaying]);
  return (
    <div className="absolute top-0 left-0 z-[-5]  flex flex-col justify-between w-full h-full">
      <BlurElement
        key={1}
        isPlaying={isPlaying}
        controls={controls}
        gradient={backgroundGradient1}
      />
      <BlurElement
        key={2}
        isPlaying={isPlaying}
        controls={controls}
        gradient={backgroundGradient2}
      />
      <BlurElement
        key={3}
        isPlaying={isPlaying}
        controls={controls}
        gradient={backgroundGradient4}
      />
      <BlurElement
        key={4}
        isPlaying={isPlaying}
        controls={controls}
        gradient={backgroundGradient3}
      />
      <BlurElement
        key={5}
        isPlaying={isPlaying}
        controls={controls}
        gradient={backgroundGradient2}
      />
    </div>
  );
};

export default MainBackground;
