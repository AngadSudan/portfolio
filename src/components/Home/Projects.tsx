import Image from "next/image";
import Link from "next/link";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export default function Projects() {
  const content = [
    {
      title: "Daksh",
      description:
        " A powerful AI-driven productivity platform for teachers and students. It centralizes task management, intelligent notes,planning, document parsing, and AI assistance.",
      content: (
        <HangingProject
          href="/projects"
          top="-top-40"
          left="-left-[10px]"
          rotate="rotate-1"
          threadHeight={250}
        >
          <div className="bg-white h-fit ">
            <Image
              src="https://res.cloudinary.com/djy3ewpb8/image/upload/v1745761645/Screenshot_2025-04-27_191353_fihjpq.png"
              height={700}
              width={500}
              alt="Daksh project preview"
              className="w-full object-contain"
            />
          </div>
        </HangingProject>
      ),
    },
    {
      title: "Octodock",
      description:
        " Octodock is an AI-powered developer tool that automates backend code generation, and deployment readiness, with seamless GitHub integration for efficient, and production-ready development. Build with a scalable architechture in mind. Deployed to Microsoft Store.",
      content: (
        <HangingProject
          href="/projects"
          top="-top-40"
          left="-left-[10px]"
          rotate="rotate-1"
          threadHeight={250}
        >
          <div className="bg-white h-fit ">
            <Image
              src="https://res.cloudinary.com/djy3ewpb8/image/upload/v1763095938/Screenshot_from_2025-11-14_10-20-55_pvvfnd.png"
              height={200}
              width={500}
              alt="Octodock project preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </HangingProject>
      ),
    },
    {
      title: "Dr. Web",
      description:
        " Dr. Web is a real-time monitoring application based on top of prometheus. Just add the SDK into your backend code and it automatically generates a dashboard for you allowing you to view the anaytics dashboard in realtime via server sent events.",
      content: (
        <div className="relative">
          <HangingProject
            href="/projects"
            top="-top-40"
            left="-left-[10px]"
            rotate="rotate-1"
            threadHeight={250}
          >
            <div className="bg-white h-fit ">
              <Image
                src="https://res.cloudinary.com/djy3ewpb8/image/upload/v1751985439/Screenshot_2025-07-08_200132_rce3nc.png"
                height={200}
                width={500}
                alt="Dr. Web project preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </HangingProject>
        </div>
      ),
    },
    {
      title: "More Projects Yet to Come",
      description: "",
      content: (
        <div className="relative">
          <HangingProject
            href="/projects"
            top="-top-40"
            left="-left-1/5"
            rotate="rotate-1"
            threadHeight={250}
          >
            <div className="bg-white h-fit ">
              <Image
                src="https://res.cloudinary.com/djy3ewpb8/image/upload/v1751985439/Screenshot_2025-07-08_200132_rce3nc.png"
                height={200}
                width={500}
                alt="Dr. Web project preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </HangingProject>
        </div>
      ),
    },
  ];
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      <h1 className="text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-300">
        PROJECTS
      </h1>

      <div className="w-[80%] mx-auto h-1 mt-4 bg-black" />
      <div className="p-10 h-screen">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

type HangingProjectProps = {
  href: string;
  top?: string;
  left?: string;
  rotate?: string;
  threadHeight?: number;
  children?: React.ReactNode;
};

function HangingProject({
  href,
  top = "top-24",
  left = "left-1/4",
  rotate = "rotate-1",
  threadHeight = 120,
  children,
}: HangingProjectProps) {
  return (
    <div
      className={`absolute ${top} ${left} group`}
      style={{ transformOrigin: "top center" }}
    >
      {/* Thread */}
      <svg width="40" height={threadHeight} className="mx-auto block">
        <path
          d={`M20 0 C 10 ${threadHeight / 3}, 30 ${
            (threadHeight * 2) / 3
          }, 20 ${threadHeight}`}
          stroke="#555"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Frame */}
      <Link
        href={href}
        className={`
          relative
          block
          w-[500px]
          border border-gray-700
          shadow-xl
          bg-white
          ${rotate}
          transition-transform
          duration-300
          group-hover:animate-bounce-frame
        `}
      >
        {/* Nail */}
        <div className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-500" />

        {children}
      </Link>
    </div>
  );
}
