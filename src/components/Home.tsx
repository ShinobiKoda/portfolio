import Navbar from "../components/Layout/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Layout/Footer";
import {
  motion,
  heroContainerVariants,
  heroItemVariants,
  buttonHover,
  tapPress,
  tapTransition,
  sectionContainerVariants,
  listStaggerVariants,
  titleLineGrowVariants,
  skillsContainerVariants,
  skillsGridVariants,
  skillCategoryVariants,
  skillItemVariants,
  skillItemHover,
} from "./animations/motion";
import { TbArrowWaveRightDown } from "react-icons/tb";

import { IoMdMail } from "react-icons/io";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { type Projects } from "../types";
import { FetchProjects } from "../services/FetchProjects";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const skills = {
  languages: ["Typescript", "Javascript"],
  databases: ["REST", "axios", "nodejs"],
  other: ["HTML", "CSS", "Supabase"],
  tools: ["VSCode", "Linux", "Figma", "Vercel"],
  frameworks: ["React", "Nextjs", "Vite", "Express.js", "Tailwindcss"],
};

const Home = () => {
  const [projects, setProjects] = useState<Projects | null>(null);
  const [copied, setCopied] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });

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

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ message: `${label} copied`, visible: true });
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, visible: false }));
      }, 2000);
    } catch (e) {
      setCopied({ message: `Failed to copy ${label}`, visible: true });
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, visible: false }));
      }, 2000);
    }
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className=" w-full px-4 lg:px-8 max-w-5xl mx-auto space-y-6 lg:flex lg:mt-[62px] lg:items-center">
        <motion.div
          className="w-full space-y-[25px] lg:space-y-8"
          variants={heroContainerVariants}
          initial="initial"
          animate="animate"
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
          animate="animate"
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
        variants={sectionContainerVariants}
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
              variants={listStaggerVariants}
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
        variants={sectionContainerVariants}
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
                  APIs
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

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-28"
        variants={sectionContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2"
          variants={listStaggerVariants}
        >
          <motion.div className="space-y-[23px]" variants={heroItemVariants}>
            <div className="w-full">
              <div className="flex items-center flex-2 gap-4 w-full max-w-[391px]">
                <motion.h2
                  className="font-medium text-[32px] text-white"
                  variants={heroItemVariants}
                >
                  <span className="text-(--text-primary)">#</span>
                  <span>about-me</span>
                </motion.h2>
                <motion.div
                  className="h-px bg-(--text-primary) hidden lg:block"
                  variants={titleLineGrowVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.9 }}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-[27px]">
                <motion.p
                  className="flex flex-col gap-4 text-(--text-gray) text-base font-normal"
                  variants={heroItemVariants}
                >
                  <span>Hello, I&apos;m Praise!</span>
                  <span>
                    I&apos;m a front-end developer based in Nigeria. I can
                    develop responsive websites from scratch and raise them into
                    modern user-friendly web experiences.
                  </span>
                  <span>
                    Transforming my creativity and knowledge into a websites has
                    been my passion for over a year. I have been helping various
                    clients to establish their presence online. I always strive
                    to learn about the newest technologies and frameworks.
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-[343px] mx-auto"
            variants={heroItemVariants}
          >
            <img
              src="/images/about-me-illustration.webp"
              alt="About me Illustration"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] space-y-12"
        variants={sectionContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex items-center flex-2 gap-4 w-full max-w-[391px]"
          variants={heroContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-medium text-[32px] text-white"
            variants={heroItemVariants}
          >
            <span className="text-(--text-primary)">#</span>
            <span>contacts</span>
          </motion.h2>
          <motion.div
            className="h-px bg-(--text-primary) hidden lg:block"
            variants={titleLineGrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.9 }}
          />
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-8"
          variants={listStaggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="border border-(--text-gray) p-4 space-y-4"
            variants={heroItemVariants}
          >
            <motion.h4
              className="font-semibold text-base text-white"
              variants={heroItemVariants}
            >
              Message me here
            </motion.h4>
            <motion.ul
              className="flex flex-col gap-4"
              variants={listStaggerVariants}
            >
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={heroItemVariants}
                whileHover={buttonHover}
                onClick={() => handleCopy("sirp_57021", "Discord handle")}
                title="Click to copy"
              >
                <FaDiscord size={24} />
                <span>sirp_57021</span>
              </motion.li>
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={heroItemVariants}
                whileHover={buttonHover}
                onClick={() => handleCopy("@sirp_dev", "Telegram handle")}
                title="Click to copy"
              >
                <FaTelegram size={24} />
                <span>@sirp_dev</span>
              </motion.li>
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={heroItemVariants}
                whileHover={buttonHover}
                onClick={() => handleCopy("sirp2804@gmail.com", "Email")}
                title="Click to copy"
              >
                <IoMdMail size={24} />
                <span>sirp2804@gmail.com</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div variants={heroItemVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.div>

      {copied.visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 border border-(--text-primary) bg-(--bg-primary,#0a0a0a) text-white shadow-md"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-(--text-primary)"></span>
            <span className="text-sm font-medium">{copied.message}</span>
          </div>
        </motion.div>
      )}
      <div className="mt-[145px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
