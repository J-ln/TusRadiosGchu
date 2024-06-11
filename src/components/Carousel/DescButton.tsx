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
      className="rounded-sm h-20 w-40 metal linear flex items-center justify-center   z-10 desc-btn-bg "
    >
      {" "}
      <Image src={icon} alt="Radio" width={64} height={64} />
    </button>
  );
};

export default DescButton;
