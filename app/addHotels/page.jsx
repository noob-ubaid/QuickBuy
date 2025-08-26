"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session, status } = useSession();
  const [hotel, setHotel] = useState({
    hotelName: "",
    bedType: "",
    location: "",
    reviews: "",
    image: "",
    pricePerNight: "",
    luxuryTitle: "",
    freeServices: "",
    mainFeatures: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please login to add a hotel.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...hotel,
      reviews: parseFloat(hotel.reviews),
      pricePerNight: parseFloat(hotel.pricePerNight),
      freeServices: hotel.freeServices.split(",").map((s) => s.trim()),
      mainFeatures: hotel.mainFeatures.split(";").map((f) => {
        const [title, description] = f.split(",");
        return { title: title?.trim(), description: description?.trim() };
      }),
    };

    const res = await fetch("/api/hotels/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedData),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Hotel added successfully!");
      setHotel({
        hotelName: "",
        bedType: "",
        location: "",
        reviews: "",
        image: "",
        pricePerNight: "",
        luxuryTitle: "",
        freeServices: "",
        mainFeatures: "",
        description: "",
      });
    } else {
      setMessage("Failed to add hotel: " + data.error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="hotelName"
          placeholder="Hotel Name"
          value={hotel.hotelName}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="bedType"
          placeholder="Bed Type"
          value={hotel.bedType}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={hotel.location}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="number"
          name="reviews"
          placeholder="Reviews (e.g., 4.5)"
          value={hotel.reviews}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={hotel.image}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="number"
          name="pricePerNight"
          placeholder="Price per Night"
          value={hotel.pricePerNight}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="luxuryTitle"
          placeholder="Luxury Title"
          value={hotel.luxuryTitle}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="freeServices"
          placeholder="Free Services (comma separated)"
          value={hotel.freeServices}
          onChange={handleChange}
          className="input w-full border p-2 rounded"
        />
        <input
          type="text"
          name="mainFeatures"
          placeholder="Main Features (title,description;title,description)"
          value={hotel.mainFeatures}
          onChange={handleChange}
          className="input w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={hotel.description}
          onChange={handleChange}
          required
          className="input w-full border p-2 rounded"
        />
        <button type="submit" className="bg-black text-white p-2 rounded mt-2">
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default page;
