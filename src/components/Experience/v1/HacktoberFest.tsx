"use client";
import { useState } from "react";
import { HOLOPIN_DATA } from "@/data/Experience";
import Image from "next/image";
function HacktoberFest() {
  const [badges, setBadges] = useState(HOLOPIN_DATA);
  return (
    <div>
      <h2 className="text-5xl my-12 text-center font-bold">
        Hacktoberfest Contributions
      </h2>

      <div className="grid grid-cols-2 w-full gap-12">
        {badges.map((badge, index) => {
          return (
            <div key={index} className="flex justify-between gap-6">
              <Image
                src={badge.image}
                height={200}
                width={200}
                alt="holopin badgeID"
              />
              <div className="w-full h-fit my-2 ">
                <h3 className="text-center text-lg font-semibold mt-5">
                  {badge.name}
                </h3>
                <p className="text-center text-md overflow-hidden text-wrap w-full mt-3">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HacktoberFest;
