"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GradientButton } from "../ui/gradient-button";

function About({ setOpenAbout }: any) {
  const SOCIALS = [
    {
      name: "leetcode",
      icon: <SiLeetcode className="text-white text-5xl" />,
      url: "https://leetcode.com/u/angad_sudan",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin className="text-white text-5xl" />,
      url: "https://leetcode.com/u/angad_sudan",
    },
    {
      name: "Github",
      icon: <FaGithub className="text-white text-5xl" />,
      url: "https://leetcode.com/u/angad_sudan",
    },
    {
      name: "Medium",
      icon: <SiLeetcode className="text-white text-5xl" />,
      url: "https://leetcode.com/u/angad_sudan",
    },
  ];
  return (
    <div className="absolute inset-0 z-40 bg-black p-7">
      <button
        className="
        absolute top-28 right-10 hover:bg-white hover:text-black z-50 border border-white rounded-full h-[50px] w-[50px] flex justify-center items-center px-6 text-xl text-white"
        onClick={() => {
          console.log("closed");
          setOpenAbout(false);
        }}
      >
        ✕
      </button>

      <h1 className="text-left text-5xl md:text-7xl mt-16 text-white font-bold relative z-10">
        ABOUT ME
      </h1>

      <div>
        <p className="text-white mt-16 my-5 w-2/3 text-wrap text-left font-semibold">
          Hello there, Myself Angad Sudan and i a second year computer science
          student, currently the Technical Head at Open Source Chandigarh and a
          skilled{" "}
          <strong className="text-green-400"> MERN Stack Developer</strong> with
          over{" "}
          <strong className="text-green-400">2+ years of Experience.</strong> I
          am also an
          <strong className="text-green-400"> Devops Enthusiast</strong> who
          loves to take code from local development to production ready
          applciations.
          <br />
          As someone who is eager into technology i am much enthusiastic into
          building a product and not just a regular side project.
          <div className="my-4 w-full h-1 border-2 border-gray-400 opacity-30" />
          <div>
            <h3 className="text-6xl text-white">Want to Contact ?</h3>
            <p className="text-xl mt-2">
              Have a project Idea or want to reach out for a project, Why Not !!
            </p>
            <button className="my-5 p-4 w-fit px-5 rounded-full cursor-pointer z-5  bg-white text-black">
              Reach Out Via Mail
            </button>
          </div>
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((social, index) => {
            return (
              <Link
                href={social.url}
                key={index}
                className="w-20 h-20 cursor-pointer z-5  rounded-full border border-white p-4"
              >
                <div className="grid place-items-center">{social.icon}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <svg className="absolute inset-0 w-full h-full z-0">
        <defs>
          <pattern
            id="line-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="80"
              x2="80"
              y2="0"
              stroke="white"
              strokeWidth="1"
              opacity={0.15}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#line-pattern)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full z-0 hidden lg:block"
        viewBox="0 0 140 80"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 Q 80 0 160 40"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />

        <path d="M 120 0 L 120 80" stroke="white" strokeWidth="1" fill="none" />

        <path
          d="M -20 20 L 160 23"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default About;
