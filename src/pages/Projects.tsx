import Header from "../components/Layout/Header";
import { useEffect } from "react";
import { projects } from "../services/FetchProjects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Layout/Footer";
import { motion } from "../components/animations/motion";
import {
  sectionContainerVariants,
  listStaggerVariants,
} from "../components/animations/motion";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="w-full">
      <Header title="projects" description="List of my projects" />
      <motion.section
        variants={sectionContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[68px] space-y-12"
      >
        <h2 className="font-medium text-2xl lg:text-[32px]">
          <span className="text-(--text-primary)">#</span>
          <span className="text-white">apps</span>
        </h2>
        <motion.div
          variants={listStaggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.personal_projects.map((project, index) => (
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
        </motion.div>
      </motion.section>

      <div className="mt-[187px]">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
