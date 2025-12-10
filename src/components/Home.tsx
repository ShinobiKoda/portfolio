import Navbar from "../components/Layout/Navbar";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import ParticlesAnimation from "./animations/Particles/Particles";
import {
  motion,
  heroContainerVariants,
  heroItemVariants,
  socialItemVariants,
  socialListVariants,
  buttonItemVariants,
  iconHover,
  buttonHover,
  tapPress,
  hoverTransition,
  blurOverlayVariants,
} from "./animations/motion";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const links = [
    {
      icon: <FaFacebookF size={20} />,
      link: "https://www.facebook.com/share/17VyDNkpz6/",
    },
    {
      icon: <FaXTwitter size={20} />,
      link: "https://x.com/sirp_xo",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287",
    },
    {
      icon: <BiLogoGmail size={20} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sirp2804@gmail.com",
    },
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/ShinobiKoda",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/home-bg-img.webp')" }}
      />

      {/* Particles layer (above image, below blur/content) */}
      <ParticlesAnimation className="absolute inset-0 z-15 pointer-events-none" />

      {/* Blur/tint overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        variants={blurOverlayVariants}
        initial="initial"
        animate="animate"
        style={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-20">
        <Navbar />
        <motion.div
          className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 mt-30"
          variants={heroContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="w-full flex flex-col max-w-[500px]"
            variants={heroItemVariants}
          >
            <motion.span
              className="w-full text-4xl sm:text-5xl lg:text-[52px] text-white font-semibold"
              variants={heroItemVariants}
            >
              ADEBIYI PRAISE
            </motion.span>
            <motion.span
              className="text-(--brand-color) font-semibold text-base sm:text-lg lg:text-[32px]"
              variants={heroItemVariants}
            >
              FRONTEND DEV
            </motion.span>
          </motion.h1>

          <motion.ul
            className="w-full flex items-center flex-wrap gap-4 sm:gap-[23px] mt-7"
            variants={socialListVariants}
          >
            {links.map((link, index) => (
              <motion.li
                key={index}
                variants={socialItemVariants}
                whileHover={iconHover}
                whileTap={tapPress}
                transition={hoverTransition}
              >
                <NavLink
                  to={link.link}
                  target="_blank"
                  className={`h-10 w-10 rounded-full border-2 border-(--brand-color) flex items-center justify-center text-(--brand-color)`}
                >
                  {link.icon}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="w-full mt-8 flex flex-col sm:flex-row items-stretch sm:items-center text-center gap-3 sm:gap-[43px]"
            variants={heroItemVariants}
          >
            <motion.button
              className="w-full sm:w-[172px] py-2 rounded-[19px] bg-(--brand-color) font-semibold text-sm sm:text-base cursor-pointer"
              variants={buttonItemVariants}
              whileHover={buttonHover}
              whileTap={tapPress}
              transition={hoverTransition}
              onClick={handleDownloadCV}
            >
              Download CV
            </motion.button>
            <motion.div
              className="w-full sm:w-[172px] py-2 rounded-[19px] bg-(--brand-color) font-semibold text-sm sm:text-base cursor-pointer"
              variants={buttonItemVariants}
              whileHover={buttonHover}
              whileTap={tapPress}
              transition={hoverTransition}
            >
              Portfolio
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
