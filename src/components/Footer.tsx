import React from "react";
import SocialButton from "./SocialButton";
import facebookicon from "./../icons/i-face.png";
import instagramicon from "./../icons/i-ig.png";
import whatsappicon from "./../icons/i-whap.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center  w-full  h-fit metal  ">
      <div className="flex flex-col items-center  w-full h-full ">
        <h3 className="text-4xl font-bold text-white p-6">
          Nuestras <span className="font-light">redes</span>
        </h3>
        <div className="flex flex-row items-center justify-center gap-10 h-fit w-1/2   ">
          <SocialButton
            link="#"
            icon={facebookicon}
            alt="Facebook"
            color="face-btn-bg"
          />
          <SocialButton
            link="#"
            icon={instagramicon}
            alt="Instagram"
            color="ig-btn-bg"
          />
          <SocialButton
            link="#"
            icon={whatsappicon}
            alt="wh"
            color="whatsapp-btn-bg"
          />
        </div>
        <div className="flex flex-col gap-6 items-center w-full h-fit p-14">
          <h4 className="text-black/80 font-black text-2xl ">
            Telefono:
            <span className="font-semibold text-gray-300/90 ps-2.5">
              +54-3446-777777
            </span>
          </h4>
          <h4 className="text-black/80 font-black text-2xl">
            Email:
            <span className="font-semibold text-gray-300/90 ps-2.5">
              ejemplo@ejemplo.com
            </span>
          </h4>
        </div>
      </div>
      <div className=" flex pb-2 gap-1 items-center">
        <h5 className="text-black font-normal text-sm">
          Todos los derechos reservados &copy;{" "}
          <span className="font-bold text-amber-500/70">TusRadios.</span>
        </h5>
        <h5 className="text-black font-normal text-sm">
          Diseño y desarrollo por{" "}
          <a href="#" className="font-bold text-emerald-300/70">
            Julian R.
          </a>
        </h5>
        <h5 className="text-black font-normal text-sm">
          Iconos por{" "}
          <a href="#" className="font-bold text-cyan-300/70">
            8Icons
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
