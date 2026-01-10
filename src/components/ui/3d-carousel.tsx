"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { EXPERIENCE_DATA, OTHER_DATA } from "@/data/Experience";

/* ================= TYPES ================= */

export type Experience = {
  title: string;
  description: string;
  company: string;
  company_icon: string;
  status: string;
  job_type: string;
  job_classification: string;
  start_date: string;
  end_date: string;
  job_contributions: string[];
  attachments: {
    url: string;
    attachment_name: string;
  }[];
};

/* ================= MEDIA QUERY ================= */

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(query: string, defaultValue = false): boolean {
  const getMatches = () =>
    IS_SERVER ? defaultValue : window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/* ================= EXPERIENCE CARD ================= */

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      className="
        pointer-events-none
        relative
        h-full w-full
        rounded-2xl
        bg-neutral-900/90
        backdrop-blur
        border border-white/10
        text-white
        p-4
        flex flex-col
        justify-between
        shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      "
      initial={{ filter: "blur(4px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.15 }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <img
            src={exp.company_icon}
            alt={exp.company}
            className="h-11 w-11 rounded-full object-cover border border-white/10"
          />
          <span
            className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-neutral-900 ${
              exp.status === "completed" ? "bg-emerald-500" : "bg-yellow-400"
            }`}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-sm leading-snug">{exp.title}</h3>
          <p className="text-xs text-neutral-400">{exp.company}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-neutral-300 leading-relaxed line-clamp-4">
        {exp.description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-neutral-200">
          {exp.job_type}
        </span>

        <span
          className={`text-[11px] font-medium capitalize ${
            exp.status === "completed" ? "text-emerald-400" : "text-yellow-400"
          }`}
        >
          {exp.status}
        </span>
      </div>
    </motion.div>
  );
}

/* ================= CAROUSEL (MATCHES BASE) ================= */

const Carousel = memo(
  ({
    cards,
    handleClick,
    controls,
    isCarouselActive,
  }: {
    cards: Experience[];
    handleClick: (exp: Experience) => void;
    controls: any;
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");

    // ✅ EXACT same math as base component
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);

    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((exp, i) => (
            <motion.div
              key={`${exp.title}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(exp)}
            >
              <div className="aspect-square w-full max-w-[260px]">
                <ExperienceCard exp={exp} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

/* ================= MAIN COMPONENT ================= */

export default function ThreeDExperienceCarousel() {
  const [activeExp, setActiveExp] = useState<Experience | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const cards = useMemo(() => [...EXPERIENCE_DATA, ...OTHER_DATA], []);

  const handleClick = (exp: Experience) => {
    setActiveExp(exp);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveExp(null);
    setIsCarouselActive(true);
  };

  return (
    <>
      {/* MODAL */}
      <AnimatePresence mode="sync">
        {activeExp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-neutral-900 text-white w-full max-w-xl rounded-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold">{activeExp.title}</h2>
              <p className="text-neutral-400 mb-4">{activeExp.company}</p>

              <ul className="space-y-2 text-sm">
                {activeExp.job_contributions.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CAROUSEL */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          cards={cards}
          handleClick={handleClick}
          controls={controls}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </>
  );
}
