import React from "react";
import SocialButton from "@/components/Footer/SocialButton";
import facebookicon from "@/icons/i-face.png";
import instagramicon from "@/icons/i-ig.png";
import whatsappicon from "@/icons/i-whap.png";
import TinyText from "@/components/Footer/TinyText";
import ContactInfo from "@/components/Footer/ContactInfo";

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
        <div className="flex flex-col gap-6 items-center w-full h-fit p-10 sm:p-14">
          <ContactInfo textField="+54-3446-777777" dataField="Telefono:" />

          <ContactInfo textField="ejemplo@ejemplo.com" dataField="Email:" />
        </div>
      </div>
      <div className=" flex pb-1 sm:pb-2  gap-0 sm:gap-2 items-center  ">
        <TinyText
          color="rgb(110 231 183)"
          url="#"
          linkText="Julian R."
          normalText="Diseño y desarrollo por"
        />

        <TinyText
          color="rgb(103 232 249)"
          url="#"
          linkText="8Icons"
          normalText="Iconos por"
        />
        <TinyText
          color="rgb(245 158 11)"
          url="#"
          linkText="TusRadios."
          normalText="Todos los derechos reservados &copy;"
        />
      </div>
    </footer>
  );
};

export default Footer;
