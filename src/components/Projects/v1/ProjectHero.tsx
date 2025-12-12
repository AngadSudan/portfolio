"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1763095938/Screenshot_from_2025-11-14_10-20-55_pvvfnd.png",
  },
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1751985439/Screenshot_2025-07-08_200132_rce3nc.png",
  },
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1745761645/Screenshot_2025-04-27_191353_fihjpq.png",
  },
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1735637945/pemu90stp7myka9pc71q.png",
  },
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1747402834/Screenshot_2025-05-16_190619_tu9c5s.png",
  },
  {
    url: "https://res.cloudinary.com/djy3ewpb8/image/upload/v1735638125/owqol6jkkwjp0efasrrs.png",
  },
];

export default function ProjectHero() {
  const rows = [
    { projects: [...PROJECTS, ...PROJECTS], direction: 1, delay: 0 },
    { projects: [...PROJECTS, ...PROJECTS], direction: -1, delay: 20 },
    { projects: [...PROJECTS, ...PROJECTS], direction: 1, delay: 10 },
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-black">
      {/* Animated background rows */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-30">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-6 shrink-0"
            animate={{
              x: row.direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
            }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
              delay: row.delay,
            }}
          >
            {row.projects.map((item, index) => (
              <motion.div
                key={`${rowIndex}-${index}`}
                className="h-[200px] w-[350px] rounded-lg overflow-hidden shadow-2xl shrink-0"
                animate={{
                  y: index % 2 === 0 ? [0, -15, 0, 15, 0] : [15, 0, -15, 0, 15],
                }}
                transition={{
                  duration: 6 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={item.url}
                  alt="project showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-900/30 to-gray-900/80 z-10"></div>

      {/* Center content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome To Projects
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            You Might stay here for a long time, play some music !
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#project1"
              className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Happy Scrolling
            </a>
            <button
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
              onClick={() =>
                (window.location.href = "mailto:angadsudan453@gmail.com")
              }
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
