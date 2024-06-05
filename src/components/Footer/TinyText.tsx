import Link from "next/link";
import React from "react";

interface Props {
  color: string;
  url: string;
  linkText: string;
  normalText: string;
}
const TinyText = ({ color, url, linkText, normalText }: Props) => {
  return (
    <h5 className=" w-fit text-center p-0 sm:text-left text-black font-normal text-sm ">
      {normalText}
      <Link href={url} style={{ color: color }} className="font-bold ">
        {linkText}
      </Link>
    </h5>
  );
};

export default TinyText;
