import Header from "../components/Layout/Header";
import { useEffect, useState } from "react";
import { projects } from "../services/FetchProjects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Layout/Footer";
import {
  motion,
  sectionReveal,
  staggerContainer,
} from "../components/animations/motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = projects.personal_projects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentProjects = projects.personal_projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <Header title="projects" description="List of my projects" />
      <motion.section
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-17 space-y-12"
      >
        <h2 className="font-medium text-2xl lg:text-[32px]">
          <span className="text-(--text-primary)">#</span>
          <span className="text-white">apps</span>
        </h2>
        <motion.div
          key={currentPage}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.name || index}
              image={project.image}
              code={project.code}
              live={project.live}
              description={project.description}
              name={project.name}
              stack={project.stack}
            />
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-16 pt-8 border-t border-gray-800/50">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <FiChevronLeft size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`w-10 h-10 flex items-center justify-center font-medium transition-all ${
                    currentPage === idx + 1
                      ? "text-(--text-primary) border-b-2 border-(--text-primary)"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </motion.section>

      <div className="mt-auto pt-36.25">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
