import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiAdobeacrobatreader, SiCloudinary, SiRazorpay, SiTurborepo } from "react-icons/si";
import { RiGeminiFill, RiNextjsFill } from "react-icons/ri";
import { SiStackblitz } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";

const TECH_MAP:{[key:string]:React.ReactNode} = {
  "react": <FaReact className="w-full h-full"  />,
  "nodejs":<FaNodeJs className="w-full h-full" />,
  "turborepo":<SiTurborepo className="w-full h-full"  />,
  "gemini":<RiGeminiFill className="w-full h-full" />,
  "stackblitz":<SiStackblitz className="w-full h-full" />,
  "kafka":<SiApachekafka className="w-full h-full" />,
  "docker":<FaDocker  className="w-full h-full" />,
  "prisma":<SiPrisma  className="w-full h-full" />,
  "mongodb":<SiMongodb  className="w-full h-full" />,
  "prometheus":<SiPrometheus className="w-full h-full" />,
  "razorpay":<SiRazorpay className="w-full h-full" />,
  "nextjs":<RiNextjsFill className="w-full h-full" />,
  "adobe pdf api":<SiAdobeacrobatreader className="w-full h-full" />,
  "cloudinary":<SiCloudinary className="w-full h-full" />
}

export default TECH_MAP;