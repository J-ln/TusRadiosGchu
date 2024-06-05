import { StaticImageData } from "next/image";
import montieleroslogo from "../images/montlogo.jpg";
import flylogo from "../images/flylogo.png";
import z3logo from "../images/avatar-1.png";
import pimlogo from "../images/pimlogo.png";

export type Radio = {
  id: number;
  name: string;
  url: string;
  color: string;
  image: StaticImageData;
  description: string;
};

export interface RadioCarousel {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  color: string;
}

export interface RadioSelector {
  id: number;
  name: string;
  url: string;
  color: string;
  image: StaticImageData;
}

export type PlayState = boolean;

// Create a custom provider for your app that returns your data.

export const radios: Radio[] = [
  {
    id: 1,
    name: "Montieleros",
    url: "https://stream.zeno.fm/m2qudvnuh6nvv",
    color: "#2E7D32",
    image: montieleroslogo,
    description: "Radio Montieleros",
  },
  {
    id: 2,
    name: "Fly",
    url: "https://stream.zeno.fm/hq5212yqhk0vv",
    color: "#0303c6",
    image: flylogo,
    description: "Radio Fly",
  },
  {
    id: 3,
    name: "Z3",
    url: "https://stream.zeno.fm/cfxira0fedttv",
    color: "orange",
    image: z3logo,
    description: "Radio Z3",
  },
  {
    id: 4,
    name: "PIM",
    url: "https://stream.zeno.fm/3viof8io3astv",
    color: "#9C27B0",
    image: pimlogo,
    description: "Radio PIM",
  },
];
