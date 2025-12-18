import { OTHER_DATA } from "@/data/Experience";
import ProjectCard from "./ProjectCard";
function Others() {
  return (
    <div>
      {OTHER_DATA.map((data: any, index: number) => {
        return <ProjectCard experience={data} />;
      })}
    </div>
  );
}

export default Others;
