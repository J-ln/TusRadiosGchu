import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
import useRadioStore from "../store";
import BlurElement from "./Background/BlurElement";
import useBackgroundAnimation from "../app/hooks/useBackgroundAnimation";

interface MainBackgroundProps {
  color: string;
}
const MainBackground = ({ color }: MainBackgroundProps) => {
  const isPlaying = useRadioStore((state) => state.playState);
  const controls = useBackgroundAnimation(color);
  const backgroundGradient1 = useMotionTemplate`radial-gradient(
        160% 160% at 50% 100%,
        rgba(0, 0, 0, 0.3) 55%,
        ${color} 0%`;

  const backgroundGradient2 = useMotionTemplate`linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 35%,
            ${color} 50%,
            rgba(0, 0, 0, 0.3) 65%`;
  const backgroundGradient3 = useMotionTemplate`radial-gradient(
              125% 125% at 50% 10%,
              rgba(0, 0, 0, 0.3) 30%,
              ${color} 100%`;

  useEffect(() => {}, [color, isPlaying]);
  return (
    <div className="relative flex flex-col justify-between w-full h-screen">
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
        gradient={backgroundGradient3}
      />
    </div>
  );
};

export default MainBackground;
