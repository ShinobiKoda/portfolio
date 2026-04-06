import { NavLink } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import {
  motion,
  sectionReveal,
  staggerContainer,
  fadeUp,
  lineGrow,
  hoverScale,
  tapPress,
  tapTransition,
  skillItemHover,
} from "../components/animations/motion";
import { TbArrowWaveRightDown } from "react-icons/tb";

import { IoMdMail } from "react-icons/io";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { projects } from "../services/FetchProjects";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import PlayfulMessage from "../components/PlayfulMessage";
import AnimatedShapes from "../components/AnimatedShapes";

const skills = {
  frontend: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "ShadCN",
  ],
  backend_data: ["Supabase (Auth/DB/Realtime)", "Stripe API", "Resend"],
  optimization: [
    "SEO (Metadata/SSR/SSG)",
    "Web Vitals",
    "Responsive Design",
    "Accessibility (WCAG)",
  ],
  tools_workflow: [
    "Git",
    "GitHub",
    "Figma",
    "Monorepo (Turborepo/Nx)",
    "Vercel",
    "Vite",
  ],
};

const Home = () => {
  const [copied, setCopied] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });


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
      <div className=" w-full px-4 lg:px-8 max-w-5xl mx-auto space-y-6 lg:flex lg:mt-[62px] lg:items-center">
        <motion.div
          className="w-full space-y-[25px] lg:space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="font-semibold text-[32px] text-white"
            variants={fadeUp}
          >
            I'm Adebiyi Praise, <br />
            <span className="text-(--text-primary)">a front-end developer</span>
          </motion.h1>
          <motion.p
            className="text-(--text-gray) text-base font-normal"
            variants={fadeUp}
          >
            Frontend engineer specializing in Next.js & TypeScript. Crafting
            fast, accessible, and production-ready web products.
          </motion.p>

          <motion.a
            href="/my-cv.pdf"
            download="my-cv.pdf"
            className="px-4 py-2 border border-(--text-primary) font-medium text-base cursor-pointer text-white inline-block"
            variants={fadeUp}
            whileHover={hoverScale}
            whileTap={{ ...tapPress, transition: tapTransition }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <div className="px-4 w-full max-w-[469px] mx-auto">
          <div className="w-full flex justify-center">
            <AnimatedShapes variant="hero" />
          </div>
          <motion.div
            className="p-2 border border-(--text-gray) flex items-center gap-[13px]"
            variants={fadeUp}
            initial="initial"
            animate="animate"
          >
            <div className="h-4 w-4 bg-(--text-primary)"></div>
            <p className="flex flex-col">
              <span className="font-medium text-base text-(--text-gray)">
                Currently working on
              </span>
              <span className="font-semibold text-base text-white">
                Mobile App Development
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] lg:mt-28"
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full border border-(--text-gray) p-8 relative"
          variants={fadeUp}
        >
          <p className="text-(--text-gray) text-[45px] font-bold absolute -top-[21px]">
            "
          </p>
          <p className="text-(--text-gray) text-[45px] font-bold absolute -bottom-12 right-8">
            "
          </p>
          <motion.p
            className="font-medium text-base lg:text-2xl text-white text-center"
            variants={fadeUp}
          >
            The Price of freedom is steep
          </motion.p>
        </motion.div>
        <motion.div
          className="border border-(--text-gray) p-4 w-full max-w-[200px] ml-auto font-normal text-base lg:text-2xl text-white text-nowrap"
          variants={fadeUp}
        >
          - Zack Fair.
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] space-y-12"
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center flex-2 gap-4">
            <h2 className="font-medium text-[32px] text-white">
              <span className="text-(--text-primary)">#</span>
              <span>projects</span>
            </h2>
            <motion.div
              className="h-px bg-(--text-primary) hidden lg:block"
              variants={lineGrow}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.9 }}
            />
          </div>
          <motion.div
            whileHover={hoverScale}
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.personal_projects.slice(0, 3).map((project, index) => (
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
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[106px] space-y-3"
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="flex items-center gap-4 w-full max-w-[391px]">
          <h2 className="font-medium text-[32px] text-white">
            <span className="text-(--text-primary)">#</span>
            <span>skills</span>
          </h2>
          <motion.div
            className="h-px bg-(--text-primary) hidden lg:block"
            variants={lineGrow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.9 }}
          />
        </div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[59px]"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={fadeUp}
          >
            <AnimatedShapes variant="skills" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
            <motion.div
              className="border border-(--text-gray) py-2"
              variants={fadeUp}
            >
              <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                Frontend
              </h3>
              <div className="w-full p-3 flex flex-wrap gap-2">
                {skills.frontend.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 text-sm font-normal text-(--text-gray) border border-(--text-gray)/30 hover:border-(--text-primary)/60 hover:text-(--text-primary) transition-colors duration-200 cursor-default"
                    whileHover={skillItemHover}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="border border-(--text-gray) py-2"
              variants={fadeUp}
            >
              <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                Backend & Data
              </h3>
              <div className="w-full p-3 flex flex-wrap gap-2">
                {skills.backend_data.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 text-sm font-normal text-(--text-gray) border border-(--text-gray)/30 hover:border-(--text-primary)/60 hover:text-(--text-primary) transition-colors duration-200 cursor-default"
                    whileHover={skillItemHover}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="border border-(--text-gray) py-2"
              variants={fadeUp}
            >
              <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                Optimization
              </h3>
              <div className="w-full p-3 flex flex-wrap gap-2">
                {skills.optimization.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 text-sm font-normal text-(--text-gray) border border-(--text-gray)/30 hover:border-(--text-primary)/60 hover:text-(--text-primary) transition-colors duration-200 cursor-default"
                    whileHover={skillItemHover}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="border border-(--text-gray) py-2"
              variants={fadeUp}
            >
              <h3 className="p-2 font-semibold text-base text-white border-b border-(--text-gray)">
                Tools & Workflow
              </h3>
              <div className="w-full p-3 flex flex-wrap gap-2">
                {skills.tools_workflow.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 text-sm font-normal text-(--text-gray) border border-(--text-gray)/30 hover:border-(--text-primary)/60 hover:text-(--text-primary) transition-colors duration-200 cursor-default"
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

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-28"
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <motion.div className="space-y-[23px]" variants={fadeUp}>
            <div className="w-full">
              <div className="flex items-center flex-2 gap-4 w-full max-w-[391px]">
                <h2 className="font-medium text-[32px] text-white">
                  <span className="text-(--text-primary)">#</span>
                  <span>about-me</span>
                </h2>
                <motion.div
                  className="h-px bg-(--text-primary) hidden lg:block"
                  variants={lineGrow}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.9 }}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-[27px]">
                <p className="flex flex-col gap-4 text-(--text-gray) text-base font-normal">
                  <span>Hello, I'm Praise!</span>
                  <span>
                    I'm a frontend engineer with 2+ years building
                    production-grade applications for fintech, e-commerce, and
                    enterprise clients. I've shipped features to live products
                    used by real users — including Noblocks, an open-source
                    crypto-to-fiat dApp, and Nook, a full rental platform with
                    real-time messaging and Stripe-powered payments.
                  </span>
                  <span>
                    I'm currently studying Computer Science at FUTA (graduating
                    2027) and actively taking on remote contracts and freelance
                    projects. I care about performance, clean architecture, and
                    UX that actually works.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-[343px] mx-auto flex justify-center"
            variants={fadeUp}
          >
            <AnimatedShapes variant="about" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[75px] space-y-12"
        variants={sectionReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="flex items-center flex-2 gap-4 w-full max-w-[391px]">
          <h2 className="font-medium text-[32px] text-white">
            <span className="text-(--text-primary)">#</span>
            <span>contacts</span>
          </h2>
          <motion.div
            className="h-px bg-(--text-primary) hidden lg:block"
            variants={lineGrow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.9 }}
          />
        </div>

        <PlayfulMessage />
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div
            className="border border-(--text-gray) p-4 space-y-4"
            variants={fadeUp}
          >
            <h3 className="font-semibold text-base text-white">
              Message me here
            </h3>
            <ul className="flex flex-col gap-4">
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={fadeUp}
                whileHover={hoverScale}
                onClick={() => handleCopy("sirp_57021", "Discord handle")}
                title="Click to copy"
              >
                <FaDiscord size={24} />
                <span>sirp_57021</span>
              </motion.li>
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={fadeUp}
                whileHover={hoverScale}
                onClick={() => handleCopy("@sirp_dev", "Telegram handle")}
                title="Click to copy"
              >
                <FaTelegram size={24} />
                <span>@sirp_dev</span>
              </motion.li>
              <motion.li
                className="flex items-center text-(--text-gray) font-normal text-base gap-2 cursor-pointer"
                variants={fadeUp}
                whileHover={hoverScale}
                onClick={() => handleCopy("sirp2804@gmail.com", "Email")}
                title="Click to copy"
              >
                <IoMdMail size={24} />
                <span>sirp2804@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.div>

      {copied.visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: [0.25, 0, 0.35, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 border border-(--text-primary) bg-(--bg-primary,#0a0a0a) text-white shadow-md"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-(--text-primary)"></span>
            <span className="text-sm font-medium">{copied.message}</span>
          </div>
        </motion.div>
      )}
      <div className="mt-auto pt-[145px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
