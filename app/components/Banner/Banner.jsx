import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[650px]">
      <Image
        src="/heroImage.png"
        alt="banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute w-full px-4 md:px-0 h-full flex items-center gap-6 md:gap-8 flex-col justify-center text-white">
        <p className="text-2xl md:text-3xl text-center lg:text-4xl xl:text-5xl font-semibold">
          Discover Your Perfect Getaway Destination
        </p>
        <p className="max-w-[750px] mx-auto text-center text-sm font-medium">
          Experience the pinnacle of luxury and comfort at the world’s most
          exclusive hotels and resorts. From breathtaking views to world-class
          amenities. Begin your extraordinary journey today.
        </p>
      </div>
    </div>
  );
};

export default Banner;
