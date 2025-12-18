import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Others from "./Others";
import OpenSource from "./OpenSource";
import Internship from "./Internship";
import owl from "@/../public/owl.webp";
import Image from "next/image";
function ProofOfWork() {
  return (
    <div className="relative w-full min-h-screen p-4 my-8 ">
      <div className="mb-16">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Proof of Work</h1>
          <p className="max-w-2xl mx-auto text-gray-600  text-lg leading-relaxed">
            A comprehensive record of my professional journey and experiences
            gained through working on diverse projects
          </p>
        </div>
      </div>
      <Tabs
        defaultValue="internship"
        className="w-[70%] mx-auto mt-8 h-fit py-3 px-auto"
      >
        <TabsList className="flex w-full">
          <TabsTrigger
            activeImage={
              <Image src={owl} alt="owl-png" className="h-20 w-20" />
            }
            value="internship"
            className="relative"
          >
            <span>Internship</span>
          </TabsTrigger>
          <TabsTrigger
            activeImage={
              <Image src={owl} alt="owl-png" className="h-20 w-20" />
            }
            value="open-source"
          >
            Open Source Contribution
          </TabsTrigger>
          <TabsTrigger
            activeImage={
              <Image src={owl} alt="owl-png" className="h-20 w-20" />
            }
            value="others"
          >
            Others
          </TabsTrigger>
        </TabsList>
        <TabsContent value="internship">
          <Internship />
        </TabsContent>
        <TabsContent value="open-source">
          <OpenSource />
        </TabsContent>
        <TabsContent value="others">
          <Others />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProofOfWork;
