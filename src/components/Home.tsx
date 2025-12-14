import Navbar from "../components/Layout/Navbar";
import { NavLink } from "react-router-dom";
import {
  motion,
  heroContainerVariants,
  heroItemVariants,
  buttonHover,
  tapPress,
  tapTransition,
  projectsContainerVariants,
  projectsListVariants,
  titleLineGrowVariants,
  skillsContainerVariants,
  skillsGridVariants,
  skillCategoryVariants,
  skillItemVariants,
  skillItemHover,
} from "./animations/motion";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { type Projects } from "../types";
import { FetchProjects } from "../api/FetchProjects";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const skills = {
  languages: ["Typescript", "Lua", "Python", "Javascript"],
  databases: ["Supabase", "Postgre SQL", "Mongo"],
  other: ["HTML", "CSS", "Tailwindcss", "REST"],
  tools: ["VSCode", "NeoVim", "Linux", "Figma", "Copilot"],
  frameworks: ["React", "Nextjs", "Vite", "Express.js", "Vue"],
};

const Home = () => {
  const [projects, setProjects] = useState<Projects | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await FetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className=" w-full px-4 lg:px-8 max-w-5xl mx-auto space-y-6 lg:flex lg:mt-[62px] lg:items-center">
        <motion.div
          className="w-full space-y-[25px] lg:space-y-8"
          variants={heroContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="font-semibold text-[32px] text-white"
            variants={heroItemVariants}
          >
            Praise is a
            <span className="text-(--text-primary)"> front-end developer</span>
          </motion.h1>
          <motion.p
            className="text-(--text-gray) text-base font-normal"
            variants={heroItemVariants}
          >
            He crafts responsive websites where technologies meet creativity
          </motion.p>

          <motion.button
            className="px-4 py-2 border border-(--text-primary) font-medium text-base cursor-pointer text-white"
            variants={heroItemVariants}
            whileHover={buttonHover}
            whileTap={{ ...tapPress, transition: tapTransition }}
            onClick={handleDownloadCV}
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          className="px-4 w-full max-w-[469px] mx-auto"
          variants={heroContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="w-full" variants={heroItemVariants}>
            <motion.img
              src="/images/hero-img.webp"
              alt="Hero Image"
              className="w-full"
              variants={heroItemVariants}
            />
          </motion.div>
          <motion.div
            className="p-2 border border-(--text-gray) flex items-center gap-[13px]"
            variants={heroItemVariants}
          >
            <div className="h-4 w-4 bg-(--text-primary)"></div>
            <p className="flex flex-col">
              <span className="font-medium text-base text-(--text-gray)">
                Currently working on
              </span>
              <span className="font-semibold text-base text-white">
                Portfolio
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] lg:mt-28"
        variants={heroContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full border border-(--text-gray) p-8 relative"
          variants={heroItemVariants}
        >
          <motion.p
            className="text-(--text-gray) text-[45px] font-bold absolute -top-[21px]"
            variants={heroItemVariants}
          >
            "
          </motion.p>
          <motion.p
            className="text-(--text-gray) text-[45px] font-bold absolute -bottom-12 right-8"
            variants={heroItemVariants}
          >
            "
          </motion.p>
          <motion.p
            className="font-medium text-base lg:text-2xl text-white text-center"
            variants={heroItemVariants}
          >
            With great power comes great responsibility.
          </motion.p>
        </motion.div>
        <motion.div
          className="border border-(--text-gray) p-4 w-full max-w-[200px] ml-auto font-normal text-base lg:text-2xl text-white text-nowrap"
          variants={heroItemVariants}
        >
          - Uncle Ben.
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] space-y-12"
        variants={projectsContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center flex-2 gap-4">
            <h2 className="font-medium text-[32px] text-white">
              <span className="text-(--text-primary)">#</span>
              <span>projects</span>
            </h2>
            <motion.div
              className="h-px bg-(--text-primary) hidden lg:block"
              variants={titleLineGrowVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.9 }}
            />
          </div>
          <motion.div
            whileHover={buttonHover}
            whileTap={{ ...tapPress, transition: tapTransition }}
            className="inline-flex"
          >
            <NavLink
              to="/projects"
              className="font-medium text-base text-white flex items-center"
            >
              <span>View all</span>
              <TbArrowWaveRightDown size={24} />
            </NavLink>
          </motion.div>
        </div>
        <div className="w-full">
          {projects && (
            <motion.div
              key="projects-loaded"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={projectsListVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.personal_projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  live={project.live}
                  code={project.code}
                  stack={project.stack}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[106px] space-y-3"
        variants={projectsContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-4 w-full max-w-[391px]">
          <h2 className="font-medium text-[32px] text-white">
            <span className="text-(--text-primary)">#</span>
            <span>skills</span>
          </h2>
          <motion.div
            className="h-px bg-(--text-primary) hidden lg:block"
            variants={titleLineGrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.9 }}
          />
        </div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[59px]"
          variants={skillsContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="w-[349px] h-[282px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/skills-illustration.webp')",
            }}
            variants={heroItemVariants}
          ></motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start"
            variants={skillsGridVariants}
          >
            <motion.div
              className="border border-(--text-gray) py-2 max-w-[178px] mx-auto"
              variants={skillCategoryVariants}
            >
              <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                Languages
              </h3>
              <div className="w-full p-2 flex items-center flex-wrap gap-2">
                {skills.languages.map((item) => (
                  <motion.span
                    key={item}
                    className="font-normal text-base text-(--text-gray)"
                    variants={skillItemVariants}
                    whileHover={skillItemHover}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-row-2 gap-4 max-w-[178px] mx-auto">
              <motion.div
                className="border border-(--text-gray) py-2"
                variants={skillCategoryVariants}
              >
                <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                  Databases
                </h3>
                <div className="w-full p-2 flex items-center flex-wrap gap-2">
                  {skills.databases.map((item) => (
                    <motion.span
                      key={item}
                      className="font-normal text-base text-(--text-gray)"
                      variants={skillItemVariants}
                      whileHover={skillItemHover}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="border border-(--text-gray) py-2"
                variants={skillCategoryVariants}
              >
                <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                  Other
                </h3>
                <div className="w-full p-2 flex items-center flex-wrap gap-2">
                  {skills.other.map((item) => (
                    <motion.span
                      key={item}
                      className="font-normal text-base text-(--text-gray)"
                      variants={skillItemVariants}
                      whileHover={skillItemHover}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-row-2 gap-4 max-w-[178px] mx-auto">
              <motion.div
                className="border border-(--text-gray) py-2"
                variants={skillCategoryVariants}
              >
                <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                  Tools
                </h3>
                <div className="w-full p-2 flex items-center flex-wrap gap-2">
                  {skills.tools.map((item) => (
                    <motion.span
                      key={item}
                      className="font-normal text-base text-(--text-gray)"
                      variants={skillItemVariants}
                      whileHover={skillItemHover}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="border border-(--text-gray) py-2"
                variants={skillCategoryVariants}
              >
                <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                  Frameworks
                </h3>
                <div className="w-full p-2 flex items-center flex-wrap gap-2">
                  {skills.frameworks.map((item) => (
                    <motion.span
                      key={item}
                      className="font-normal text-base text-(--text-gray)"
                      variants={skillItemVariants}
                      whileHover={skillItemHover}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
