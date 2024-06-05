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
  setRadio: async (radio: Radio) => {
    if (radio.id !== get().radio.id) {
      set({ playState: false, radio });
    }
  },
  getRadio: async () => get().radio,
  pauseAudio: () => {
    set({ playState: false });
  },
  playAudio: () => {
    set({ playState: true });
  },
}));

export default useRadioStore;
