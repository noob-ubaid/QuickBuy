"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Hotel = ({ hotel }) => {
  const router = useRouter();
  const handleNavigate = (id) => {
    router.push(`/details/${id}`);
  };
  return (
    <div className="flex items-center flex-col lg:flex-row my-14 justify-between gap-12 lg:gap-20">
      <div className="relative w-full h-[300px] flex-1">
        <Image
          fill
          className="rounded-md object-cover"
          src={hotel.image}
          alt={hotel.hotelName}
        />
      </div>
      <div className="flex-1">
        <p className="text-2xl md:text-3xl font-semibold mb-4">
          {hotel.hotelName}
        </p>
        <div className="flex items-center mt-4 gap-2">
          <FaStar size={20} className="text-yellow-500" />
          <p className="font-medium">{hotel.reviews} reviews</p>
        </div>
        <div className="flex items-center mt-4 text-[#6B7280E3] gap-2">
          <FaLocationDot size={20} />
          <span className="font-medium">{hotel.location} , Bangladesh</span>
        </div>
        <div className="my-6">
          <div className="flex items-center gap-4">
            {hotel.freeServices.map((free, index) => (
              <p
                key={index}
                className="bg-gray-200 font-medium rounded px-3 py-2"
              >
                {free}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl font-medium md:font-semibold md:text-2xl">
            ${hotel.pricePerNight}/day
          </p>
        </div>
        <button
          onClick={() => handleNavigate(hotel._id)}
          className="w-full bg-black py-2 rounded cursor-pointer mt-4 text-white font-medium"
        >
          View details
        </button>
      </div>
    </div>
  );
};
export default Hotel;
