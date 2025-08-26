import dbConnect from "@/app/lib/ConnectDb";

export async function GET(req) {
  try {
    const hotels = await dbConnect("products").find({}).toArray();
    return new Response(JSON.stringify(hotels), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch hotels" }), {
      status: 500,
    });
  }
}
