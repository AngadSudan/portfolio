"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc])
        ? i
        : acc;
    }, 0);
    setActiveCard(closest);
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-[80%] mx-auto h-screen overflow-y-auto flex gap-16 rounded-md p-10"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        //@ts-ignore
        WebkitScrollbar: { display: "none" },
      }}
    >
      {/* LEFT — TEXT */}
      <div className="relative flex-1 max-w-2xl px-4">
        {content.map((item, index) => (
          <div key={item.title} className="my-20">
            <motion.h2
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-5xl font-bold "
            >
              {item.title}
            </motion.h2>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-lg  max-w-sm mt-6"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>

      {/* RIGHT — HANGING PROJECT STAGE */}
      <div
        className={cn(
          "relative hidden lg:block flex-1 sticky top-0 h-full",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {content[activeCard].content}
        </motion.div>
      </div>
    </motion.div>
  );
};
