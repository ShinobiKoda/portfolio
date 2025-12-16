import { type Projects } from "../types";

export const FetchProjects = async (): Promise<Projects> => {
  try {
    const base = import.meta.env.BASE_URL ?? "/";
    const url = `${base}data/projects.json`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
    }
    const data: Projects = await res.json();
    return data;
  } catch (err) {
    console.error("FetchProjects error:", err);
    throw err instanceof Error
      ? err
      : new Error("Unknown error while fetching projects");
  }
};
