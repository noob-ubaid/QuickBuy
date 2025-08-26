import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/ConnectDb";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const users = dbConnect("users");

    try {
      await users.createIndex({ email: 1 }, { unique: true });
    } catch (idxErr) {
      console.warn("createIndex warning:", idxErr?.message || idxErr);
    }

    const existing = await users.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const result = await users.insertOne({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "User created", userId: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error:", err);
    if (err?.code === 11000) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
