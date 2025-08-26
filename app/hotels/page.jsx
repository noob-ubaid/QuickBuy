import dbConnect from "../lib/ConnectDb";
import Hotel from "./Hotel";

const page = async () => {
  const hotels = await dbConnect("products").find({}).toArray();
  return (
    <div className="max-w-[1500px] mx-auto">
      <p className="text-lg md:text-xl lg:text-2xl mt-10 md:mt-16 font-semibold">
        Hotel Rooms
      </p>
      <p className="font-medium text-lg text-gray-500 my-3">
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </p>
      <div>
        {hotels.map((hotel) => (
          <Hotel key={hotel._id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default page;
