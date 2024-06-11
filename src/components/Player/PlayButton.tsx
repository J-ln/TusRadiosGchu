"use client";
import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";

import playIcon from "@/icons/i-play.png";
import pauseIcon from "@/icons/i-pause.png";
import loadIcon from "@/icons/i-load.png";
import clsx from "clsx";

interface Props {
  audioPLayer: RefObject<HTMLAudioElement>;
  playState: boolean;
  handlePlay: (source: RefObject<HTMLAudioElement>) => void;
}
const PlayButton = ({ audioPLayer, playState, handlePlay }: Props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    audioPLayer.current?.addEventListener("loadstart", () => {
      setReady(false);

    })
    audioPLayer.current?.addEventListener("loadedmetadata", () => {
      setReady(true);
    })
  }, [audioPLayer, ready]);
  return (
    <button
      onClick={() => handlePlay(audioPLayer)}
      className="flex items-center  justify-center text-white metal radial  w-[4.5rem] h-[4.5rem] rounded-full transition-all duration-300  "
    >
      <Image src={!ready ? loadIcon : playState ? pauseIcon : playIcon} alt="pause" className={clsx("w-10 h-10 transition-all duration-300", !ready ? "animate-spin disabled" : "")} />
    </button>
  );
};

export default PlayButton;
