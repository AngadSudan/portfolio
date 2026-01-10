import React from "react";
import { TestimonialComponent } from "../testimonal-slider";

function Updates() {
  const DUMMY_UPDATES = [
    {
      date: "2026-01-02",
      title: "3D Carousel Finally Feels Right",
      mood: "productive",
      content:
        "Spent most of today fine-tuning the rotation math and focus behavior of the 3D carousel. The depth finally feels natural and readable from every angle. Small tweak, huge visual difference.",
    },
    {
      date: "2026-01-03",
      title: "Understanding Motion, Not Fighting It",
      mood: "learning",
      content:
        "Took a step back to really understand Framer Motion’s transform pipeline. Once I stopped stacking rotateY and transform manually, things started to click. Mental model upgrade.",
    },
    {
      date: "2026-01-04",
      title: "Hit a Wall with Layout Shifts",
      mood: "blocked",
      content:
        "Noticed subtle layout jumps when transitioning between focused states. Tried a few fixes, but nothing felt clean yet. Might need to rethink how height is managed entirely.",
    },
    {
      date: "2026-01-05",
      title: "Visual Hierarchy Pass on Cards",
      mood: "productive",
      content:
        "Refined card spacing, typography, and accents. Reduced noise and let the content breathe. The cards now feel intentional instead of decorative.",
    },
    {
      date: "2026-01-06",
      title: "Documenting the Why",
      mood: "learning",
      content:
        "Started writing down why certain UI decisions exist. It’s slowing me down slightly, but it’s making the system far more coherent. Future me will thank me.",
    },
    {
      date: "2026-01-07",
      title: "Minor Bug, Major Distraction",
      mood: "blocked",
      content:
        "A small drag issue kept stealing focus today. It’s not critical, but it breaks the illusion. Parking it for now and moving forward.",
    },
    {
      date: "2026-01-08",
      title: "Momentum Is Back",
      mood: "productive",
      content:
        "Cleaned up a few lingering bugs and shipped a polished version of the updates section. Everything feels calmer, more deliberate. Ending the day satisfied.",
    },
  ];
  return (
    <div>
      <TestimonialComponent testimonials={DUMMY_UPDATES as any} />
    </div>
  );
}

export default Updates;
