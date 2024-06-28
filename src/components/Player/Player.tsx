"use client";
import React, {
  createRef,
  RefObject,
  useState,
} from "react";
import useRadioStore from "@/store/index";
import Image from "next/image";
import playIcon from "@/icons/i-play.png";
import pauseIcon from "@/icons/i-pause.png";
import loadIcon from "@/icons/i-load.png";
import VolumeSlider from "./VolumeSlider";
import LiveButton from "./LiveButton";
import clsx from "clsx";
import PlayButton from "./PlayButton";

const handleVolume = (source: RefObject<HTMLAudioElement>, volume: number) => {
  if (source.current) {
    source.current.volume = volume / 100;
  }
};

const Player = () => {
  const currentRadio = useRadioStore((state) => state.radio);
  const playState = useRadioStore((state) => state.playState);
  const { pauseAudio, playAudio, setPlayState, setSource } = useRadioStore();
  const audioPLayer = createRef<HTMLAudioElement>();

  function handleVolumeChange(event: any) {

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

  function handlePlaying() {
    setPlayState(true);
  }

  function handleLoad(source: RefObject<HTMLAudioElement>) {
    {
      source.current?.play().then(() => {
        setPlayState(true);
      })
    }

  }





  return (
    <div
      className={clsx(
        "fixed z-[1000] bottom-0 left-0 w-full h-20 player-bg overflow-hidden",
        currentRadio.id !== "" ? "visible" : "hidden"
      )}
    >
      <div className="flex justify-around sm:justify-between items-center h-full w-full px-5 sm:px-20 ">
        <LiveButton audioRef={audioPLayer} />
        <PlayButton
          audioPLayer={audioPLayer}
          playState={playState}
          handlePlay={handlePlay}
        />
        <VolumeSlider audioRef={audioPLayer} />
      </div>
      <audio ref={audioPLayer} onLoadedMetadata={() => handleLoad(audioPLayer)} onPlaying={handlePlaying} src={currentRadio.url}></audio>
    </div>
  );
};

export default Player;
