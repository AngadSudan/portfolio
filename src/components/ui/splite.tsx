"use client";

import { Suspense, lazy } from "react";
import Loader from "../Loader";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className="relative w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        {/* Spline Scene */}
        <Spline scene={scene} className={className} />
      </Suspense>
    </div>
  );
}
