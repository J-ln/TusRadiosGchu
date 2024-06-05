import React from "react";

const MainHeader = ({ bold, thin }: { bold: string; thin: string }) => {
  return (
    <div
      className="  absolute md:left-20 sm:left-10 left-{50%} 
      sm:top-1/2 top-[12vh]  m-0 z-10 w-fit h-fit  -translate-y-1/2 "
    >
      <h3
        className="text-center md:text-5xl-main  sm:text-4xl-main/none text-3xl font-black 
           "
      >
        {bold}
        <span className="md:text-5xl sm:text-4xl/none font-thin ">
          <br className="hidden sm:block" />
          {thin}
        </span>
      </h3>
    </div>
  );
};

export default MainHeader;
