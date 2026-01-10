"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

export interface Testimonial {
  date: string;
  title: string;
  mood?: "productive" | "learning" | "blocked";
  content: string;
}

export const TestimonialComponent = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 19000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      {/* Background Halo */}
      <div className="relative h-40">
        <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[800px] w-[720px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-fuchsia-500/30 before:via-fuchsia-500/10 before:via-30% before:to-fuchsia-500/0 before:to-80%" />
      </div>

      {/* Testimonial Card Area */}
      <div className="relative flex justify-center">
        <div ref={testimonialsRef} className="relative w-full max-w-xl">
          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              className="absolute inset-0"
              enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
              enterFrom="opacity-0 -translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              beforeEnter={() => heightFix()}
            >
              <UpdateComponent testimonial={testimonial} show />
            </Transition>
          ))}
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="-m-1.5 mt-28 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-black ${
              active === index
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-fuchsia-100"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.title}</span>{" "}
            <span
              className={`${
                active === index ? "text-fuchsia-200" : "text-fuchsia-300"
              }`}
            >
              -
            </span>{" "}
            <span>{testimonial.mood}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const moodStyles: Record<string, string> = {
  productive: "text-emerald-400",
  learning: "text-indigo-400",
  blocked: "text-rose-400",
};

const moodBg: Record<string, string> = {
  productive: "from-emerald-500/10",
  learning: "from-indigo-500/10",
  blocked: "from-rose-500/10",
};

const UpdateComponent = ({
  testimonial,
  show,
}: {
  testimonial: Testimonial;
  show: boolean;
}) => {
  return (
    <Transition
      show={show}
      enter="transition ease-in-out duration-500 delay-150"
      enterFrom="opacity-0 translate-y-3"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-out duration-300 absolute"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative mx-auto overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/85 p-9 shadow-2xl backdrop-blur">
        {/* Gradient Accent */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${
            testimonial.mood ? moodBg[testimonial.mood] : "from-white/5"
          } to-transparent`}
        />

        {/* Meta */}
        <div className="relative mb-3 flex items-center justify-between text-xs text-neutral-400">
          <span>{testimonial.date}</span>
          {testimonial.mood && (
            <span
              className={`font-medium capitalize ${
                moodStyles[testimonial.mood]
              }`}
            >
              {testimonial.mood}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="relative mb-4 text-xl font-semibold text-white">
          {testimonial.title}
        </h3>

        {/* Content */}
        <p className="relative text-lg leading-relaxed font-medium text-neutral-300 before:content-['“'] after:content-['”']">
          {testimonial.content}
        </p>
      </div>
    </Transition>
  );
};
