import React from "react";
import Image from "next/image";
import vinyl from "../images/vinyl-nb.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className=" fixed top-0 w-full h-16 bg z-50 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-sm  shadow-slate-500 ">
      <div className=" w-screen h-full flex flex-row  items-center justify-between  px-20 p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={vinyl} alt="TuRadio" width={50} height={50} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tus<span className="text-amber-500">Radios</span>
          </span>
        </a>
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
