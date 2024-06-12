import React from "react";
import Slider from "../Carousel/Slider";
import MainBackground from "../MainBackground";
import useRadioStore from "@/store";
import HeaderAbout from "./HeaderAbout";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap   items-center justify-center w-full min-h-max p-5 md:p-20    z-0  ">
      <HeaderAbout />
      <Slider />
    </section>
  );
};

export default About;
