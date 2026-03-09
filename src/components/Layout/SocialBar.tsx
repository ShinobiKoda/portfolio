import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, fadeUp, staggerFast, hoverLift } from "../animations/motion";

const SocialBar = () => {
  const socials = [
    { link: "https://github.com/ShinobiKoda", icon: <FaGithub size={24} /> },
    { link: "https://x.com/sirp_xo", icon: <FaXTwitter size={24} /> },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <motion.div
      className="fixed top-0 left-[17px] xl:flex flex-col items-center gap-8 hidden z-50"
      variants={fadeUp}
      initial="initial"
      animate="animate"
    >
      <div className="w-px h-[191px] bg-(--text-gray)" />
      <motion.ul
        className="flex flex-col gap-2"
        variants={staggerFast}
        initial="initial"
        animate="animate"
      >
        {socials.map((social, index) => (
          <motion.li
            key={index}
            variants={fadeUp}
            whileHover={hoverLift}
            className="text-(--text-gray)"
          >
            <NavLink
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my social profile"
            >
              {social.icon}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SocialBar;
