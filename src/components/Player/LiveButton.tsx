import clsx from "clsx";
import React, { useState, useEffect } from "react";

interface LiveButtonProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}
const LiveButton = ({ audioRef }: LiveButtonProps) => {
  const [isLive, setIsLive] = useState(true);
  const audio = audioRef.current;

  const syncLive = () => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsLive(true);
    }
  };

  useEffect(() => {
    const checkLiveStatus = () => {
      setIsLive(!audio?.paused && audio?.readyState === 4);
    };

    const interval = setInterval(checkLiveStatus, 10000);
    return () => clearInterval(interval);
  }, [audioRef, isLive, audio]);

  return (
    <button
      onClick={syncLive}
      className=" px-4 sm:px-[3.15rem] py-2.5 flex flex-row items-center justify-center gap-1 bg-transparent rounded-2xl hover:bg-white/10"
    >
      <div
        className={clsx(
          isLive ? "on-red-gradient-bg" : "off-red-gradient-bg",
          "w-8 h-8   rounded-full"
        )}
      ></div>
      <p className=" font-semibold text-xl text-slate-900 ">LIVE</p>
    </button>
  );
};

export default LiveButton;
