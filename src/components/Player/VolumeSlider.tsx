import React, { RefObject, useState } from "react";
import Image from "next/image";
import MuteIcon from "@/icons/i-mute.png";
import VolumeIcon from "@/icons/i-volume.png";

interface VolumeSliderProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  setVolume: (volume: number) => void;
}

const VolumeSlider = ({ audioRef, setVolume }: VolumeSliderProps) => {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    audioRef.current!.volume = newVolume / 100; // El volumen del audio debe estar entre 0 y 1
    setVolume(newVolume); // Actualiza el estado del volumen si es necesario
  };
  return (
    <div className="flex items-center px-1  gap-1justify-center metal linear shadow-black shadow-sm w-50 h-10 rounded-lg ">
      <Image src={MuteIcon} alt={"mute"} width={20} height={20} />
      <input
        type="range"
        className="volume-slider"
        defaultValue={100}
        min={0}
        max={100}
        onChange={handleVolumeChange}
      ></input>
      <Image src={VolumeIcon} alt={"max-volume"} width={20} height={20} />
    </div>
  );
};

export default VolumeSlider;
