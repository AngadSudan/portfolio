import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Footer } from "../modem-animated-footer";
import Image from "next/image";

function FooterComponent() {
  const SOCIALS = [
    {
      label: "leetcode",
      icon: <SiLeetcode className=" text-3xl" />,
      href: "https://leetcode.com/u/angad_sudan",
    },
    {
      label: "linkedin",
      icon: <FaLinkedin className=" text-3xl" />,
      href: "https://www.linkedin.com/in/angadsudan/",
    },
    {
      label: "Github",
      icon: <FaGithub className=" text-3xl" />,
      href: "https://github.com/AngadSudan",
    },
    {
      label: "Medium",
      icon: <FaMedium className=" text-3xl" />,
      href: "https://medium.com/@angadsudan453",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/expeirence" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <Footer
      brandName="Angad"
      brandDescription="Full-stack developer with over 2+ years  of Experience in MERN Stack Development and a devops Enthusiast."
      socialLinks={SOCIALS}
      navLinks={navLinks}
      creatorName="Angad Sudan"
      creatorUrl="https://angadsudan.me"
      brandIcon={
        <Image
          src={"https://avatars.githubusercontent.com/u/163244136?v=4"}
          alt="image"
          width={200}
          height={200}
          className=""
        />
      }
    />
  );
}

export default FooterComponent;
