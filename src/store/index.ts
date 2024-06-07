import { create } from "zustand";
import { type Radio, radios } from "@/lib/data";
import { RefObject } from "react";

type State = {
  radio: Radio;
  playState: boolean;
};

type Actions = {
  setRadio: (radio: Radio) => void;
  pauseAudio: (audioPlayer: RefObject<HTMLAudioElement>) => void;
  playAudio: (audioPlayer: RefObject<HTMLAudioElement>) => void;
  setPlayState: (newState: boolean) => void;
};

const useRadioStore = create<State & Actions>((set, get) => ({
  radio: {
    id: 0,
    name: "",
    url: "",
    color: "#333",
    image: null as any,
    description: "",
  },
  playState: false,

  setPlayState: (newState) => set({ playState: newState }),
  setRadio: async (radio: Radio) => {
    if (radio.id !== get().radio.id) {
      set({ playState: false });

      set({ radio: radio });
    }
  },
  getRadio: async () => get().radio,
  pauseAudio: async (source) => {
    source.current?.pause();
    set({ playState: false });
  },
  playAudio: async (source) => {
    await source.current?.play().finally(() => {
      set({ playState: true });
    });
  },
}));

export default useRadioStore;
