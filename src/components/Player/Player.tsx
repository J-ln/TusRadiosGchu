"use client";
import React, { createRef, RefObject, useEffect, useState } from "react";
import useRadioStore from "../../store/index";
import Image from "next/image";
import playIcon from "../../icons/i-play.png";
import pauseIcon from "../../icons/i-pause.png";
import VolumeSlider from "./VolumeSlider";
import LiveButton from "./LiveButton";
import clsx from "clsx";

const handleVolume = (source: RefObject<HTMLAudioElement>, volume: number) => {
  if (source.current) {
    source.current.volume = volume / 100;
  }
};

const Player = () => {
  const currentRadio = useRadioStore((state) => state.radio);
  const playState = useRadioStore((state) => state.playState);
  const { pauseAudio, playAudio, setPlayState } = useRadioStore();
  const audioPLayer = createRef<HTMLAudioElement>();
  const [volume, setVolume] = useState(100);

  function handleVolumeChange(event: any) {
    setVolume(event.target.value);
    handleVolume(audioPLayer, event.target.value);
  }

  function handlePlay(source: RefObject<HTMLAudioElement>) {
    setPlayState(!playState);
    if (playState === true) {
      pauseAudio(source);
    } else {
      playAudio(source);
    }
  }

  useEffect(() => {
    if (audioPLayer.current && currentRadio.url !== audioPLayer.current.src) {
      audioPLayer.current.src = currentRadio.url;
    }
  }, [currentRadio, audioPLayer, playState, playAudio]);

  return (
    <div
      className={clsx(
        "fixed z-[1000] bottom-0 left-0 w-full h-20 player-bg  backdrop-blur-xl overflow-hidden",
        currentRadio.id !== 0 ? "visible" : "hidden"
      )}
    >
      <div className="flex justify-around sm:justify-between items-center h-full w-full px-5 sm:px-20 ">
        <LiveButton audioRef={audioPLayer} />
        <button
          onClick={() => handlePlay(audioPLayer)}
          className="flex items-center  justify-center text-white metal radial  w-[4.5rem] h-[4.5rem] rounded-full transition-all duration-300  "
        >
          {playState ? (
            <Image src={pauseIcon} alt={"pause"} width={40} height={40} />
          ) : (
            <Image src={playIcon} alt={"play"} width={40} height={40} />
          )}
        </button>
        <VolumeSlider audioRef={audioPLayer} setVolume={setVolume} />
      </div>
      <audio ref={audioPLayer} src={currentRadio.url}></audio>
    </div>
  );
};

export default Player;
