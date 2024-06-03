import React from "react";
import Slider from "./Carousel/Slider";

const About = () => {
  return (
    <section className="flex flex-row flex-wrap  w-full h-fit p-20 ">
      <div className="flex justify-center items-center  basis-1/2 h-72 rounded-2xl shadow-slate-700 shadow-inner  ">
        <h1 className="text-6xl font-bold  text-center ">
          ¿Quienes
          <br />
          <span className="font-extralight pt-8 "> somos?</span>
        </h1>
      </div>
      <div className="flex basis-1/2 h-72 justify-center items-center ">
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-light text-base text-center tracking-wide px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque sapien nec eros tristique, vitae posuere eros fringilla.
            Donec ac nisl vitae lorem tempor interdum et sed massa. Cras non est
            iaculis, sagittis nunc sed, euismod tellus. Morbi dictum libero vel
            dapibus sodales. In purus nibh, consectetur sed condimentum non,
            faucibus sed enim. Curabitur non gravida sem, ut tristique metus.
            Nullam non risus tortor. Praesent mollis faucibus magna, vitae
            tempus lorem consectetur sit amet
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default About;
