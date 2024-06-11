"use client";
import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
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

    audioPLayer.current?.addEventListener("loadedmetadata", async () => {

      await audioPLayer.current?.play();

    })
    audioPLayer.current?.addEventListener("playing", () => {

      setPlayState(true);
    })

  }, [playState, audioPLayer, setPlayState]);

  return (
    <div
      className={clsx(
        "fixed z-[1000] bottom-0 left-0 w-full h-20 player-bg overflow-hidden",
        currentRadio.id !== 0 ? "visible" : "hidden"
      )}
    >
      <div className="flex justify-around sm:justify-between items-center h-full w-full px-5 sm:px-20 ">
        <LiveButton audioRef={audioPLayer} />
        <PlayButton
          audioPLayer={audioPLayer}
          playState={playState}
          handlePlay={handlePlay}
        />
        <VolumeSlider audioRef={audioPLayer} setVolume={setVolume} />
      </div>
      <audio ref={audioPLayer} src={currentRadio.url}></audio>
    </div>
  );
};

export default Player;
