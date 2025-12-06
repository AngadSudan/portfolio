import { Project as ProjectType } from "@/utils/type";
import Project from "./Project";
import {PROJECT_DATA} from '@/data/project'
function AllProject() {
  return (
    <div className="min-h-screen w-full">
        {/* <Project project={dummyProject}/> */}
        {
          PROJECT_DATA.map((project,index:number)=>{
            //@ts-ignore
            return <Project project={project} alignment={index%2===0?"right":"left"} />
          })
        }
    </div>
  )
}

export default AllProject