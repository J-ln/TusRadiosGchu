import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  handleEvent: () => void;
  icon: StaticImageData;
}
const DescButton = ({ handleEvent, icon }: Props) => {
  return (
    <button
      onClick={handleEvent}
      className="rounded-sm h-20 w-40 metal linear flex items-center justify-center border-[1px] border-black z-10 "
    >
      {" "}
      <Image src={icon} alt="Radio" width={64} height={64} />
    </button>
  );
};

export default DescButton;
