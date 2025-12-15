import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import {
  motion,
  projectCardVariants,
  projectCardHover,
  stackIconTooltipVariants,
  stackIconVariants,
} from "./animations/motion";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

interface ProjectProps {
  image: string;
  stack: string[];
  name: string;
  description?: string;
  live: string;
  code?: string;
  contribution?: string;
}

const ProjectCard = ({
  image,
  stack,
  name,
  description,
  live,
  code,
  contribution,
}: ProjectProps) => {
  const getStackItems = () => {
    const items: Array<{ key: string; label: string; icon: ReactNode }> = [];
    for (const technology of stack) {
      const t = technology.toLowerCase();
      if (t.includes("react") && t.includes("vite")) {
        items.push({
          key: `${technology}-react`,
          label: "React",
          icon: <FaReact size={20} />,
        });
        items.push({
          key: `${technology}-vite`,
          label: "Vite",
          icon: <SiVite size={20} />,
        });
        continue;
      }

      switch (true) {
        case t.includes("next"):
          items.push({
            key: technology,
            label: "Next.js",
            icon: <SiNextdotjs size={20} />,
          });
          break;
        case t.includes("react"):
          items.push({
            key: technology,
            label: "React",
            icon: <FaReact size={20} />,
          });
          break;
        case t.includes("tailwind"):
          items.push({
            key: technology,
            label: "Tailwind CSS",
            icon: <SiTailwindcss size={20} />,
          });
          break;
        case t.includes("supabase"):
          items.push({
            key: technology,
            label: "Supabase",
            icon: <SiSupabase size={20} />,
          });
          break;
        case t.includes("typescript"):
          items.push({
            key: technology,
            label: "TypeScript",
            icon: <SiTypescript size={20} />,
          });
          break;
        case t.includes("figma"):
          items.push({
            key: technology,
            label: "Figma",
            icon: <IoLogoFigma size={20} />,
          });
          break;
        case t.includes("framer"):
          items.push({
            key: technology,
            label: "Framer Motion",
            icon: <SiFramer size={20} />,
          });
          break;
        case t.includes("vite"):
          items.push({
            key: technology,
            label: "Vite",
            icon: <SiVite size={20} />,
          });
          break;
        default:
          items.push({
            key: technology,
            label: technology,
            icon: (
              <span className="text-(--text-gray) text-sm">{technology}</span>
            ),
          });
          break;
      }
    }
    return items;
  };

  const stackItems = getStackItems();

  return (
    <motion.div
      className="min-h-[422px] border border-(--text-gray) w-full max-w-[330px] mx-auto"
      variants={projectCardVariants}
      whileHover={projectCardHover}
    >
      <div className="w-full h-[200px]">
        <img src={image} alt="Project Image" className="w-full h-full object-cover" />
      </div>
      <ul className="flex items-center gap-3 p-2 border-y border-(--text-gray)">
        {stackItems.map((item) => (
          <motion.li
            key={item.key}
            className="relative flex items-center justify-center cursor-pointer"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <motion.div
              className="text-(--text-gray)"
              variants={stackIconVariants}
            >
              {item.icon}
            </motion.div>

            <motion.span
              className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2
                   px-2 py-1 rounded-sm bg-[#1a1a20]
                   border border-(--text-gray)
                   text-(--text-gray) text-xs whitespace-nowrap"
              variants={stackIconTooltipVariants}
            >
              {item.label}
            </motion.span>
          </motion.li>
        ))}
      </ul>
      <div className="p-4 space-y-[18px]">
        <h3 className="font-medium text-2xl text-white">{name}</h3>
        {description && (
          <p className="font-normal text-base text-(--text-gray)">
            {description}
          </p>
        )}
        {contribution && (
          <p className="font-normal text-base text-(--text-gray)">
            {contribution}
          </p>
        )}
        <div className="flex items-center gap-4">
          <NavLink
            to={live}
            target="_blank"
            className="border border-(--text-gray) py-2 px-4 font-medium text-base text-white flex items-center gap-1"
          >
            <span>Live </span> <TbArrowWaveRightDown size={16} />
          </NavLink>
          {code && (
            <NavLink
              to={code}
              target="_blank"
              className="border border-(--text-gray) py-2 px-4 font-medium text-base text-white flex items-center gap-1"
            >
              <span>Code </span> <TbArrowWaveRightDown size={16} />
            </NavLink>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
