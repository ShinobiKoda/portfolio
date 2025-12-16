import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";
import { useState, useEffect } from "react";
import { FetchProjects } from "../services/FetchProjects";
import ProjectCard from "./ProjectCard";
import Footer from "./Layout/Footer";
import { type Projects } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState<Projects | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await FetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <Header title="projects" description="List of my projects" />
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[68px] space-y-12">
        <h2 className="font-medium text-2xl lg:text-[32px]">
          <span className="text-(--text-primary)">#</span>
          <span className="text-white">apps</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects?.personal_projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              code={project.code}
              live={project.live}
              description={project.description}
              name={project.name}
              stack={project.stack}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[68px] space-y-12">
        <h2 className="font-medium text-2xl lg:text-[32px]">
          <span className="text-(--text-primary)">#</span>
          <span className="text-white">contributions</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects?.contributed_to.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              live={project.live}
              contribution={project.contribution}
              name={project.name}
              stack={project.stack}
            />
          ))}
        </div>
      </div>

      <div className="mt-[187px]">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
