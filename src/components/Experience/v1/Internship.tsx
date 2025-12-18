import { EXPERIENCE_DATA } from "@/data/Experience";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
function Internship() {
  return (
    <div>
      {EXPERIENCE_DATA.map((experience, index) => {
        return <ProjectCard key={index} experience={experience} />;
      })}
    </div>
  );
}

export default Internship;
