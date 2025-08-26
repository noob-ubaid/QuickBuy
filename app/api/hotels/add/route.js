import dbConnect from "@/app/lib/ConnectDb";

export async function POST(req) {
  try {
    const hotelData = await req.json(); 
    const collection = await dbConnect("products");

    const result = await collection.insertOne(hotelData);

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
