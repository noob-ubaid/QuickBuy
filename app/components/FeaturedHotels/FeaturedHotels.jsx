// "use client";
import dbConnect from "@/app/lib/ConnectDb";
import SingleHotel from "./SingleHotel";

const FeaturedHotels = async() => {
    const data = await dbConnect('products').find({}).toArray()
 

  return (
    <div className="py-14 md:py-24 bg-[#E4EEF84F] px-4 2xl:px-0">
      <div>
        <h2 className="text-2xl text-center font-semibold md:text-3xl lg:text-4xl text-[#252525]">
          Featured Hotels
        </h2>
        <p className="text-[#6B7280E6] max-w-[800px] mt-4 mx-auto text-center">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 max-w-[1500px] mt-10 md:mt-14 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-12">
        {data.map((hotel) => (
          <SingleHotel key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 cursor-pointer bg-black text-white rounded-full"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div> */}
    </div>
  );
};

export default FeaturedHotels;
