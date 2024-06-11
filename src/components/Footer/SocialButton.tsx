import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type Props = {
  link: string;
  icon: StaticImageData;
  alt: string;
  color: string;
};

const SocialButton = ({ link, icon, alt, color }: Props) => {
  return (
    <a href={link} className="flex justify-center items-center h-20 w-20 p-0">
      <button
        className={clsx(" h-20 w-20  rounded-2xl  transition-all p-0 ", color)}
      >
        <Image src={icon} alt={alt} className="object-fill p-auto m-auto" />
      </button>
    </a>
  );
};

export default SocialButton;
