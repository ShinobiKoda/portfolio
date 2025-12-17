import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  motion,
  sectionContainerVariants,
  heroContainerVariants,
  heroItemVariants,
  socialListVariants,
  socialItemVariants,
  iconHover,
} from "../animations/motion";

const Footer = () => {
  const media_links = [
    {
      link: "https://github.com/ShinobiKoda",
      icon: <FaGithub size={24} />,
    },
    {
      link: "https://x.com/sirp_xo",
      icon: <FaXTwitter size={24} />,
    },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <motion.div
      className="w-full border-t border-white"
      variants={sectionContainerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full py-8 max-w-5xl mx-auto px-4 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 sm:flex-row sm:justify-between"
          variants={heroContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="space-y-4" variants={heroItemVariants}>
            <motion.div
              className="flex items-center gap-6"
              variants={heroContainerVariants}
            >
              <motion.div variants={heroItemVariants}>
                <Link to="/" className="flex items-center">
                  <div className="w-8 h-8">
                    <img
                      src="/images/logo.webp"
                      alt="Logo Image"
                      className="w-full"
                    />
                  </div>
                  <span className="font-bold text-base text-white">Praise</span>
                </Link>
              </motion.div>
              <motion.p
                className="font-normal text-base text-(--text-gray)"
                variants={heroItemVariants}
              >
                sir-p.tech
              </motion.p>
            </motion.div>
            <motion.p
              className="font-normal text-base text-white"
              variants={heroItemVariants}
            >
              Front-end developer
            </motion.p>
          </motion.div>

          <motion.div className="space-y-3" variants={heroItemVariants}>
            <motion.h3
              className="font-medium text-2xl text-white"
              variants={heroItemVariants}
            >
              Media
            </motion.h3>
            <motion.ul
              className="flex items-center gap-2"
              variants={socialListVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              {media_links.map((link, index) => (
                <motion.li
                  key={index}
                  className="text-(--text-gray)"
                  variants={socialItemVariants}
                >
                  <Link to={link.link}>
                    <motion.span whileHover={iconHover}>
                      {link.icon}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.p
          className="font-normal text-base text-(--text-gray) w-full text-center mt-12"
          variants={heroItemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          &copy;Copyright 2025. Made by Shinobikoda
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;
