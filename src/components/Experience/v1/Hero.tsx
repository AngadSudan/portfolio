import { SplineScene } from "@/components/ui/splite";
import Terminal from "./Terminal";

function Hero() {
  return (
    <div className="w-full h-screen bg/[0.96] relative overflow-hidden">
      <div className="flex gap-16 h-full">
        <Terminal />

        {/* HELLO */}
        <div className="absolute text-[clamp(72px,12vw,196px)]">HELLO</div>

        {/* THERE */}
        <div className="absolute top-40 text-[clamp(64px,10vw,180px)]">
          THERE
        </div>

        {/* EXPLORE AROUND */}
        <div className="absolute right-0 bottom-10 text-[clamp(48px,7vw,116px)]">
          <div className="bg-linear-to-r from-black via-gray-400 to-white bg-clip-text">
            EXPLORE
          </div>
          <div className="bg-linear-to-r from-black via-gray-400 to-white bg-clip-text">
            AROUND
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-[200%] h-[200%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
