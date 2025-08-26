import { ObjectId } from "mongodb";
import dbConnect from "@/app/lib/ConnectDb";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
const page = async ({ params }) => {
  const id = params.id;
  const hotel = await dbConnect("products").findOne({ _id: new ObjectId(id) });
  return (
    <div className="py-14 md:py-20 max-w-[1500px] mx-auto px-4 2xl:px-0">
      <div className="flex items-end gap-2 md:gap-4">
        <p className="text-lg md:text-3xl lg:text-4xl font-medium md:font-semibold">
          {hotel.hotelName}
        </p>
        <p className="md:text-lg  md:font-medium text-gray-600">
          ({hotel.bedType} bed)
        </p>
      </div>
      <div className="flex items-center my-4 gap-2">
        <FaStar className="text-yellow-500" size={20} />
        <p className="font-semibold text-2xl"> {hotel.reviews}</p>
      </div>
      <div className="flex items-center gap-3">
        <FaLocationDot size={20} />
        <p className="md:text-lg font-medium text-gray-500">
          {hotel.location} , Bangladesh
        </p>
      </div>
      <div className="flex items-center my-8 justify-between gap-12 flex-col lg:flex-row">
        <div className="flex-1">
          <div className="w-full relative h-[350px]">
            <Image
              src={hotel.image}
              fill
        
              alt={hotel.hotelName}
              className="object-cover  rounded-md"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Main Features
          </h4>
          <div className="flex  flex-col gap-6">
            {hotel.mainFeatures.map((feature) => (
              <div key={feature.title}>
                <p className="text-2xl font-semibold font-sans text-gray-700">
                  {feature.title}
                </p>
                <p className="text-lg font-medium font-sans text-gray-500 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row gap-8">
        <div className="flex items-center gap-4">
          {hotel.freeServices.map((free, index) => (
            <p
              key={index}
              className="bg-gray-200 font-sans font-medium rounded px-3 py-2"
            >
              {free}
            </p>
          ))}
        </div>
        <div>
          <p className="text-xl font-medium md:font-semibold md:text-2xl">
            ${hotel.pricePerNight}/day
          </p>
        </div>
      </div>
      <p className="text-gray-600 font-sans border-t text-justify border-b border-gray-400 mt-6 py-2">
        {hotel.description}
      </p>
    </div>
  );
};

export default page;
