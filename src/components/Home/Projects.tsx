import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="relative h-screen w-full">
      <h1 className="text-7xl text-center font-bold text-transparent bg-clip-text bg-linear-to-r from-black via-gray-600 to-gray-300">
        PROJECTS
      </h1>
      <div className="w-[80%] mx-auto h-1 mt-4 bg-black"></div>
      <HangingProject
        href="/projects"
        top="top-28"
        left="left-[1%]"
        rotate="-rotate-2"
        threadHeight={100}
      >
        <h1 className="text-white">DAKSH</h1>
      </HangingProject>

      <HangingProject
        href="/projects"
        top="top-40"
        left="left-1/3"
        rotate="rotate-1"
        threadHeight={250}
      >
        <h1 className="text-white">CLERK</h1>
      </HangingProject>

      <HangingProject
        href="/projects"
        top="top-32"
        left="right-[1%]"
        rotate="-rotate-1"
        threadHeight={100}
      />
    </div>
  );
}

function HangingProject({
  href,
  top = "top-24",
  left = "left-1/4",
  rotate = "rotate-1",
  threadHeight = 120,
  children,
}: any) {
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
          block
          h-[450px] w-[500px]
          bg-black
          border-4 border-gray-700
          shadow-xl
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

export default Projects;
