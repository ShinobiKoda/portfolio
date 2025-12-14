import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  motion,
  bounceDropVariants,
  heroItemVariants,
  socialListVariants,
  socialItemVariants,
  iconHover,
} from "../animations/motion";

const SocialBar = () => {
  const socials = [
    { link: "https://github.com/ShinobiKoda", icon: <FaGithub size={32} /> },
    { link: "https://x.com/sirp_xo", icon: <FaXTwitter size={32} /> },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={32} />,
    },
  ];

  return (
    <motion.div
      className="fixed top-0 left-[17px] xl:flex flex-col items-center gap-8 hidden z-50"
      variants={bounceDropVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-px h-[191px] bg-(--text-gray)"
        variants={heroItemVariants}
      />
      <motion.ul
        className="flex flex-col gap-2"
        variants={socialListVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {socials.map((social, index) => (
          <motion.li
            key={index}
            variants={socialItemVariants}
            whileHover={iconHover}
            className="text-(--text-gray)"
          >
            <NavLink to={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SocialBar;
