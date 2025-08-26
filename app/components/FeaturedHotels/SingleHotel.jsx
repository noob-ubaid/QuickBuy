import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const SingleHotel = ({ hotel }) => {
  return (
    <div className="shadow-md rounded-t-2xl">
      <div className="w-full relative h-[250px]">
        <Image
          alt={hotel.hotelName}
          fill
          className="object-cover rounded-t-2xl"
          src={hotel.image}
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-lg">{hotel.hotelName}</h4>
          <div className="flex items-center gap-2">
            <FaStar size={20} className="text-yellow-500" />
            <p className="font-medium">{hotel.reviews}</p>
          </div>
        </div>
       
          <div className="flex items-center  text-[#6B7280E3] mt-2 gap-2">
            <FaLocationDot size={20} />
            <span className="font-medium">{hotel.location} , Bangladesh</span>
          </div>
        <div className="flex items-center mt-3 justify-between">
          <p className="font-medium text-lg">
            ${hotel.pricePerNight}/
            <span className="text-[#6B7280E6] font-normal">day</span>
          </p>
          <Link
            href={`/details/${hotel.id}`}
            className="px-3 py-2 rounded bg-black text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
