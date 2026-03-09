import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  motion,
  sectionReveal,
  fadeUp,
  staggerFast,
  hoverLift,
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
      variants={sectionReveal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="w-full py-8 max-w-5xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <motion.div className="space-y-4" variants={fadeUp}>
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center" aria-label="Home">
                <div className="w-8 h-8">
                  <img
                    src="/images/logo.webp"
                    alt="Logo Image"
                    className="w-full"
                    width="32"
                    height="32"
                  />
                </div>
                <span className="font-bold text-base text-white">Praise</span>
              </Link>
              <p className="font-normal text-base text-(--text-gray)">
                sir-p.tech
              </p>
            </div>
            <p className="font-normal text-base text-white">
              Front-end developer
            </p>
          </motion.div>

          <motion.div className="space-y-3" variants={fadeUp}>
            <h2 className="font-medium text-2xl text-white">Media</h2>
            <motion.ul
              className="flex items-center gap-2"
              variants={staggerFast}
            >
              {media_links.map((link, index) => (
                <motion.li
                  key={index}
                  className="text-(--text-gray)"
                  variants={fadeUp}
                >
                  <Link to={link.link} aria-label="Visit my profile">
                    <motion.span whileHover={hoverLift}>
                      {link.icon}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <motion.p
          className="font-normal text-base text-(--text-gray) w-full text-center mt-12"
          variants={fadeUp}
        >
          &copy;Copyright {new Date().getFullYear()}. Made by Shinobikoda
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;
