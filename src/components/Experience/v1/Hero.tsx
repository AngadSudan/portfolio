import { SplineScene } from "@/components/ui/splite";
import Terminal from "./Terminal";
function Hero() {
  return (
    <div className="w-full h-screen bg/[0.96] relative overflow-hidden">
      <div className="flex gap-16 h-full">
        <Terminal />
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
