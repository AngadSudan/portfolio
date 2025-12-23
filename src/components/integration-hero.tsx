"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  "https://cdn-icons-png.flaticon.com/128/15466/15466163.png",
  "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
  "https://cdn-icons-png.flaticon.com/128/15380/15380914.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  "https://cdn-icons-png.flaticon.com/128/919/919856.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968342.png",
  "https://cdn-icons-png.flaticon.com/128/919/919836.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
  "https://cdn-icons-png.flaticon.com/128/919/919853.png",
];

const ICONS_ROW2 = [
  "https://imgs.search.brave.com/I-jd6urhzxDeJweFcLQQS8i4DAGcL2uijL91tjcjF3k/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZWNkZmVlYmUy/NmE0MzkxMmVhNDBh/OGQzN2UwNWRmNWQw/YWQ5NmQyNDU0ZDI4/OTRiOWEwZjY0NjBh/YWUyNGIzMi93d3cu/cHJpc21hLmlvLw",
  "https://imgs.search.brave.com/TsqrtlDA4NO1jpqvgAHLupPWWIo47Oq94kHCiq2M0MU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGY1MjYxZjhm/ZDJmMzEyMTllNDMz/MmZhZjhiNmRiMzI5/OTU4YzMzM2NmZTI3/NGM2NWIxYmRkMGYx/ODc5YTAzOC93d3cu/bW9uZ29kYi5jb20v",
  "https://imgs.search.brave.com/hOXHjsHEaEm2Bw5HYTfKBpYlTscAZEz0Djit6KAoGhU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2ExYWM3ZjNi/YmYyMjJmZGJhZGE5/Y2JjYjgxZmY1YmM1/Y2M0YzRiNTFhMWQ4/N2ZiMzM4NGZmNThi/OWIwY2IzYS9uZXh0/anMub3JnLw",
  "https://imgs.search.brave.com/nFkdgfpB6vZ2rFsuCwX7B0y_FUGiMjm1gWRG1lsxJ6w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTJjNGQxZDQ1/Mjc1NDBlNjcxODZm/MjRhN2I2OTZmZTYx/NzFhYjBhMGY5MGI2/ZGZiNGU0Yjg2NDgy/YzZhNTJjYi9yZWR1/eC5qcy5vcmcv",
  "https://imgs.search.brave.com/3bJ20DFLQzudvk6FOp9m-IkLU3nY2KkThM6jD1uXHeE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjZhOTVkMWZm/YzZjYThjZjk1YTAz/ODBiMzlmMTY1MDUy/OTAyMWQxOTlmNWY2/YWEwZTQ4ODNkYzUw/NWRjZWFmZi9wcm9t/ZXRoZXVzLmlvLw",
  "https://imgs.search.brave.com/OlPBlXDbY5wF54XG41FhndZbIn6YQFIuKkutHLpjuEc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDQyZGNjNWI5/OGMxZWMwMWYzZDYz/ZDZhYzc5NDA3Y2Mz/OGRmYjQwMzgzZTkw/YjY3Yjc3ZmQ3MTRh/MWY3ZWRlMS9rdWJl/cm5ldGVzLmlvLw",
  "https://imgs.search.brave.com/4faLjwBnHrOY24ELi0qdmoDCRjUko8oKr_dfgTtbPA4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTI0Mjg3MThk/OWUxNWIwNTBhZDY0/YmZlNjQ3ZjI5MmNj/NDliNjFkM2ZlZWMx/NWIwNDVmMTAwYjVl/YjQyMjY3Mi9jbG91/ZC5nb29nbGUuY29t/Lw",
  "https://imgs.search.brave.com/w1pARvp0PsgKW9VIQkl3hv9-fqD3BFvfwsgJeUDHdUQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8",
  "https://imgs.search.brave.com/d8PbgSUuiE3W7hkcPIC4B0wor9_-KBSKrgnNxHUWBfk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk2L1Nv/Y2tldC1pby5zdmcv/NTEycHgtU29ja2V0/LWlvLnN2Zy5wbmc",
  "https://imgs.search.brave.com/sFAukgJD-nbgqVp-6HA0hWnCXZ9QoE2guQ5ygS-ZowU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2Y4YmU0NGQ3/ODQyMGE1YzhiZjZi/NTI1MzAzNDkzY2Rk/NmI2YzcyNGU1M2Fl/NjZmZDhlMWIyY2Y1/M2Q2ODExMS9leHBy/ZXNzanMuY29tLw",
  "https://imgs.search.brave.com/z1sxidJZgWs7qaBrGnj1_uNAy8IejDTiC4mCrEVMsmc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzAxL0Fw/YWNoZV9LYWZrYV9s/b2dvLnN2Zy8yNTBw/eC1BcGFjaGVfS2Fm/a2FfbG9nby5zdmcu/cG5n",
  "https://imgs.search.brave.com/4pEnn7XqmnpoPbZiYumfd3vMBxFhRAgidQpoyXzirfs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I4L0Nh/ZGR5c2VydmVyX2xv/Z29fbGlnaHQuc3Zn/LzI1MHB4LUNhZGR5/c2VydmVyX2xvZ29f/bGlnaHQuc3ZnLnBu/Zw",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-black via-gray-600 to-gray-300">
          TECHNOLOGIES
        </h1>
        <p className="text-xl text-center">Wanting to Know my Tech Stack ?</p>
        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img
                  src={src}
                  alt="icon"
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img
                  src={src}
                  alt="icon"
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
