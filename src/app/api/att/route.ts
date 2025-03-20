import { connectDB } from "@/lib/mongodb";
import { AttModel } from "@/models/att.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB(); 
//   const users = await User.find();
//   return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    await connectDB();
    
    const data = await req.json();
    // await newAtt.save();

    // return NextResponse.json(newAtt, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 });
  }
}
