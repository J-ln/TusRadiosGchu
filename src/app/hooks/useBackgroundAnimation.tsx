import { useState, useEffect } from "react";
import { AnimationControls, useAnimation } from "framer-motion";
import useRadioStore from "@/store/index";

const useBackgroundAnimation = (colorState: string) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
      color: colorState,
    });
  }, [colorState, controls]);

  return controls as AnimationControls;
};

export default useBackgroundAnimation;
