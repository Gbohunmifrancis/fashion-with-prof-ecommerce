import Image from "next/image";
import React from 'react';

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[300px] md:h-auto rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover object-center md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
      <div className="absolute left-[30px] md:left-[70px] top-[50%] transform -translate-y-1/2 space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{mainTitle}</h2>
        <p className="text-[16px] md:text-[20px] lg:text-[24px]">
          starting at <strong>{price}</strong>
        </p>
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>
    </div>
  );
};

export default Slide;
