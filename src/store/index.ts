import { create } from "zustand";
import { type Radio } from "@/lib/data";
import { RefObject } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

type State = {
  stations: Radio[];
  radio: Radio;
  playState: boolean;


};

type Actions = {
  fetchStations: () => Promise<void>;
  setRadio: (id: string) => void;
  pauseAudio: (audioPlayer: RefObject<HTMLAudioElement>) => void;
  playAudio: (audioPlayer: RefObject<HTMLAudioElement>) => void;
  setPlayState: (newState: boolean) => void;
  setSource: (source: RefObject<HTMLAudioElement>) => void;

  setStations: (stations: Radio[]) => void;

};

const useRadioStore = create<State & Actions>((set, get) => ({
  radio: {
    id: "",
    name: "",
    url: "",
    color: "#333",
    image: null as any,
    description: "",
  },
  playState: false,

  stations: [],


  setStations: (stations) => set({ stations }),

  fetchStations: async () => {
    const querySnapshot = await getDocs(collection(db, "radios"));
    const stations = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Radio));
    set({ stations });
  },




  setPlayState: (newState) => set({ playState: newState }),
  setRadio: async (id) => {
    const SelectedRadio = get().stations.find((radio) => radio.id === id);
    console.log(SelectedRadio);
    if (SelectedRadio && SelectedRadio.id !== get().radio.id) {
      set({ playState: false });
      set({ radio: SelectedRadio });
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
