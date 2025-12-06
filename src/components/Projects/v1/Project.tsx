import  TECH_MAP  from "@/utils/tech-icons";
import { Project as ProjectType } from "@/utils/type"
import { SquareArrowOutUpRight } from "lucide-react";
import { CldImage } from "next-cloudinary"
import Link from "next/link";
import {motion, Variants} from 'framer-motion';

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 10,
    },
  },
};


function Project({project,alignment="right"}:{project:ProjectType,alignment:"left"| "right"}) {
  return (
    <motion.div 
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`h-[80svh] flex ${alignment==="left"?"flex-row":"flex-row-reverse"} my-2 w-full`}
    >
        {/* image part  */}
        <div className="w-1/2 px-8 h-full">
            <CldImage
            width={800}
            height={300}
            src={project.thumbnail}
            alt={project.name}
            className="w-fit h-fit shadow-md shadow-amber-50 object-contain"
            />
        </div>
        {/* project-showcasing  */}
        <div className="h-[50svh] flex flex-col gap-4 w-1/3 mb-auto">
            <motion.h2  variants={itemVariants} className={`text-5xl font-bold text-whte ${alignment==="left"?"text-left":"text-right"}`}>{project.name}</motion.h2>
            <motion.p  variants={itemVariants} className={`text-md word-wrap ${alignment==="left"?"text-left":"text-right"} my-1`}>{project.description}</motion.p>
            <motion.div  variants={itemVariants} className={`flex w-full ${alignment==="left"?"flex-row":"flex-row-reverse"} h-fit`}>
                <div className="w-[10%] my-auto h-0.5 bg-gray-400"></div>
                <p className="text-center my-auto">Technologies</p>
                <div className="w-full my-auto h-0.5 bg-gray-400"></div>
            </motion.div> 
            <motion.div  variants={itemVariants} className={`flex  ${alignment==="left"?"flex-row":"flex-row-reverse"} gap-3`}>
                {project.technology.map((tech,index)=>{
                    return <div key={index} className="h-8 w-8 rounded-full">{TECH_MAP[tech.toLowerCase()]}</div>
                })}
            </motion.div>
            <motion.div  variants={itemVariants} className={`flex flex-wrap  ${alignment==="left"?"flex-row":"flex-row-reverse"} gap-2`}>
                {project.tags.map((tag, index) => (
                    <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700 border border-red-300"
                    >
                    {tag}
                    </span>
                ))}
            </motion.div>
            <motion.div  variants={itemVariants} className={`flex w-full  ${alignment==="left"?"flex-row":"flex-row-reverse"} gap-2`}>
                <Link className="flex gap-2 bg-black text-white p-2 rounded-2xl px-4" href={project.github_link}>
                    <p className="text-center">View Code</p>
                    <SquareArrowOutUpRight size={14} className="my-auto" />
                </Link>
                {project.live_link && <Link className="flex gap-2 bg-white text-black p-2 border-2 border-black rounded-2xl px-4" href={project.live_link} >
                    <p>Visit Project</p>
                    <SquareArrowOutUpRight size={14} className="my-auto" />
                </Link>}
            </motion.div>

        </div>
    </motion.div>
  )
}

export default Project