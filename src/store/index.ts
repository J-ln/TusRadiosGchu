import { create } from "zustand";
import { type Radio } from "@/lib/data";
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
  setSource: (source: RefObject<HTMLAudioElement>) => void;


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
  loading: false,



  setPlayState: (newState) => set({ playState: newState }),
  setRadio: async (radio) => {
    if (radio.id !== get().radio.id) {
      set({ playState: false });

      set({ radio: radio })

    }
  },
  getRadio: async () => get().radio,
  pauseAudio: async (source) => {
    source.current?.pause();
    set({ playState: false });
  },
  setSource: async (source) => {
    if (source.current) {
      set({ playState: false });

      source.current.src = get().radio.url;
      source.current?.load();
      set({ playState: true });
    }
  },
  playAudio: async (source) => {
    await source.current?.play().finally(() => {
      source.current?.play().then(() => {
        set({ playState: true });
      });
    });
  },
}));

export default useRadioStore;
