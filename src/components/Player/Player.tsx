"use client";
import React, { createRef, RefObject, useEffect, useState } from "react";
import useRadioStore from "../../store/index";
import Image from "next/image";
import playIcon from "../../icons/i-play.png";
import pauseIcon from "../../icons/i-pause.png";
import VolumeSlider from "./VolumeSlider";
import LiveButton from "./LiveButton";

const handleVolume = (source: RefObject<HTMLAudioElement>, volume: number) => {
  if (source.current) {
    source.current.volume = volume / 100;
  }
};

const Player = () => {
  const [isVisisble, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentRadio = useRadioStore((state) => state.radio);
  const playState = useRadioStore((state) => state.playState);
  const { pauseAudio, playAudio } = useRadioStore();
  const audioPLayer = createRef<HTMLAudioElement>();
  const [volume, setVolume] = useState(100);

  function handleVolumeChange(event: any) {
    setVolume(event.target.value);
    handleVolume(audioPLayer, event.target.value);
  }

  function handlePlay(source: RefObject<HTMLAudioElement>) {
    if (isPlaying) {
      pauseAudio(source);
      audioPLayer.current?.pause();
    } else {
      playAudio(source);
      audioPLayer.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (playState !== isPlaying) {
      setIsPlaying(playState);
    }
    if (audioPLayer.current && currentRadio.url !== audioPLayer.current.src) {
      audioPLayer.current.src = currentRadio.url;
      console.log(currentRadio.url, audioPLayer.current.src);
    }
  }, [currentRadio, isPlaying, audioPLayer, playState]);

  return (
    <div className="fixed z-50 bottom-0 left-0 w-full h-20 metal  backdrop-blur-xl overflow-hidden ">
      <div className="flex justify-between items-center h-full w-full px-20 ">
        <LiveButton audioRef={audioPLayer} />
        <button
          onClick={() => handlePlay(audioPLayer)}
          className="flex items-center justify-center text-white metal radial  w-[4.5rem] h-[4.5rem] rounded-full transition-all duration-300  "
        >
          {isPlaying ? (
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
