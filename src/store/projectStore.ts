import { create } from "zustand";
import { Project } from "@/utils/type";

type ProjectState = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
};

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  setProjects: (projects:Project[]) => set({ projects }),
  addProject: (project:Project) =>
    set((state) => ({ projects: [...state.projects, project] })),
}));
