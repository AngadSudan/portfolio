"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectCard({ experience }: any) {
  const [showContributions, setShowContributions] = useState(false);

  return (
    <div className="bg-white rounded-2xl my-12 border-2 border-gray-200 transition-shadow p-6">
      <div className="flex gap-6">
        {/* Company Logo */}
        <div className="shrink-0">
          <Image
            src={experience.company_icon}
            alt={`${experience.company}-logo`}
            width={96}
            height={96}
            className="rounded-full border shadow-sm"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Title */}
          <h2 className="text-xl font-semibold">{experience.title}</h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
            <span className="font-medium opacity-80">{experience.company}</span>

            <span
              className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${
                experience.status === "ongoing" ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {experience.status}
            </span>

            <span className="px-2 py-0.5 rounded-full bg-gray-200 text-xs">
              {experience.job_type}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-gray-700 leading-relaxed line-clamp-3">
            {experience.description}
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-200" />

          {/* Contributions */}
          <button
            onClick={() => setShowContributions(!showContributions)}
            className="flex items-center gap-2 text-sm font-medium text-black cursor-pointer hover:underline"
          >
            Key Contributions
            {showContributions ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {showContributions && (
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              {experience.job_contributions.map(
                (work: string, index: number) => (
                  <li key={index} className="leading-relaxed">
                    {work}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
