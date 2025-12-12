import Project from "@/models/Projects";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const projects = await Project.find({});

    return NextResponse.json(
      {
        message: "Projects fetched successfully",
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      {
        message: "Unable to fetch projects",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}