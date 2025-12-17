import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar";
import ContactForm from "./ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
  motion,
  heroItemVariants,
  listStaggerVariants,
  buttonHover,
  sectionContainerVariants,
  socialListVariants,
  socialItemVariants,
  iconHover,
  hoverTransition,
} from "./animations/motion";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import Footer from "./Layout/Footer";

const Contact = () => {
  const socials = [
    {
      link: "https://github.com/ShinobiKoda",
      icon: <FaGithub size={30} />,
    },
    {
      link: "https://x.com/sirp_xo",
      icon: <RiTwitterXFill size={30} />,
    },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={30} />,
    },
  ];

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
    <div className="w-full">
      <Navbar />
      <Header title="contact" description="contact-me" />
      <motion.section
        variants={sectionContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-[46px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
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
      </motion.section>

      <motion.section
        variants={sectionContainerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[25px] w-full px-4 lg:px-8 max-w-5xl mx-auto space-y-[22px]"
      >
        <motion.h2
          className="font-medium text-2xl lg:text-[32px]"
          variants={heroItemVariants}
        >
          <span className="text-(--text-primary)">#</span>
          <span className="text-white">all-media</span>
        </motion.h2>
        <motion.ul
          className="flex items-center gap-4"
          variants={socialListVariants}
        >
          {socials.map((social, index) => (
            <motion.li
              key={index}
              variants={socialItemVariants}
              whileHover={iconHover}
              transition={hoverTransition}
              className="list-none"
            >
              <NavLink
                to={social.link}
                className="text-(--text-gray)"
                target="_blank"
              >
                {social.icon}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
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

      <div className="mt-[145px] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
