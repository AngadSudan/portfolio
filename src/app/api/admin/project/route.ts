import Project from "@/models/Projects";
import connectDB from "@/utils/db";
import { ProjectBody } from "@/utils/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
      await connectDB();
      const data:ProjectBody = await req.json();
      
      const dbProject = await Project.find({
        where:{
          github_link: data.github_link
        }
      });

      if(!dbProject) return NextResponse.json({
        "message":"Project already registered"
      },{status:500})

      const createdProject = await Project.create({
        ...data
      });

      if(!createdProject) return NextResponse.json({
        "message":"Project couldn't be registered"
      },{status:500})

      return NextResponse.json({
        "message":"Project has been registered"
      },{status:200})
    } catch (error) {
        console.error("Error fetching projects:", error);

        return NextResponse.json(
          {
            message: "Unable to upload projects",
            error: error instanceof Error ? error.message : String(error),
          },
          { status: 500 }
        );
    }
}
