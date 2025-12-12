import Navbar from "../components/Layout/Navbar";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  motion,
  heroContainerVariants,
  heroItemVariants,
  socialListVariants,
  socialItemVariants,
  iconHover,
  bounceDropVariants,
  buttonHover,
  tapPress,
  tapTransition,
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
  const socials = [
    { link: "https://github.com/ShinobiKoda", icon: <FaGithub size={32} /> },
    { link: "https://x.com/sirp_xo", icon: <FaTwitter size={32} /> },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={32} />,
    },
  ];

  return (
    <div className="w-full h-full">
      <Navbar />

      <motion.div
        className="absolute top-0 left-[17px] xl:flex flex-col items-center gap-8 hidden"
        variants={bounceDropVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-px h-[191px] bg-(--text-gray)"
          variants={heroItemVariants}
        />
        <motion.ul
          className="flex flex-col gap-2"
          variants={socialListVariants}
          initial="initial"
          animate="animate"
        >
          {socials.map((social, index) => (
            <motion.li
              key={index}
              variants={socialItemVariants}
              whileHover={iconHover}
              className="text-(--text-gray)"
            >
              <NavLink to={social.link}>{social.icon}</NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

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
            className="hidden lg:block px-4 py-2 border border-(--text-primary) font-medium text-base cursor-pointer text-white"
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
    </div>
  );
};

export default Home;
