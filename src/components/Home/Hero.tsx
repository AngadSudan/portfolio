"use client";

import { useState } from "react";
import About from "./About";

function Hero() {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {openAbout && <About setOpenAbout={setOpenAbout} />}

      <div
        onClick={() => setOpenAbout(true)}
        className=" absolute bottom-1/8  grid place-items-center -translate-y-1/2 -left-5 h-fit w-[200px] hover:w-[200px] rounded-r-full bg-white text-black border border-black text-3xl px-8 py-5 transition-all duration-300 ease-in-out cursor-pointer hover:scale-120
        "
      >
        About
      </div>
    </div>
  );
}

export default Hero;
