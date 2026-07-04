import Resource from "@/models/Resources";
import connectDB from "@/utils/db";
import { ResourceBody } from "@/utils/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data: ResourceBody = await req.json();

    const dbResource = await Resource.find({
      title: data.title,
    });

    if (dbResource)
      return NextResponse.json(
        {
          message: "Resource already registered",
        },
        { status: 500 },
      );

    //TODO: add cloudinary with Admin dashboard
    const createdResource = await Resource.create({
      ...data,
    });

    if (!createdResource)
      return NextResponse.json(
        {
          message: "Resource couldn't be registered",
        },
        { status: 500 },
      );

    return NextResponse.json(
      {
        message: "Resource has been registered",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching Resources:", error);

    return NextResponse.json(
      {
        message: "Unable to upload Resources",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
