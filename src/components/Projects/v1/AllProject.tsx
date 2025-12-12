"use client";
import { Project as ProjectType } from "@/utils/type";
import Project from "./Project";
// import { PROJECT_DATA } from "@/data/project";
import useGetProject from "@/hooks/useGetProject";
import Loader from "@/components/Loader";
function AllProject() {
 const { loading, data, error } = useGetProject();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="min-h-screen w-full">
        {/* <Project project={dummyProject}/> */}
        <div className="grid place-items-center mb-16 text-center">
          <h1 className="text-6xl mt-12 font-extrabold">Explore The Projects</h1>
          <p className="text-wrap w-1/3 mt-3 text-lg font-semibold">Built by me as my personal project and some shared projects along with capable minds</p>
        </div>
        {
          data.map((project:ProjectType,index:number)=>{
            //@ts-ignore
            return <Project key={index} project={project} alignment={index%2===0?"right":"left"} />
          })
        }
    </div>
  )
}

export default AllProject