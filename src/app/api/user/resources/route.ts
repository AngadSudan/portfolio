import Resource from "@/models/Resources";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const resources = await Resource.find({});
    // TODO: add filters option
    return NextResponse.json(
      {
        message: "Resources fetched successfully",
        data: resources,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      {
        message: "Unable to fetch projects",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
