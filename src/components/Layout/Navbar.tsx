import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  motion,
  navVariants,
  logoVariants,
  logoHover,
  linkVariants,
  linkHover,
  menuButtonVariants,
  menuHover,
  tapPress,
  hoverTransition,
  tapTransition,
  overlayVariants,
  sidebarVariants,
  sidebarLinkVariants,
  closeButtonVariants,
} from "../animations/motion";

const Navbar = () => {
  const links = [
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-8"
    >
      <motion.div
        variants={logoVariants}
        whileHover={logoHover}
        transition={hoverTransition}
        className="w-[100px] h-[100px]"
      >
        <Link to="/">
          <img src="/images/logo.png" alt="Logo Image" className="w-full" />
        </Link>
      </motion.div>

      <motion.ul className="hidden lg:flex items-center gap-[54px]">
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={linkVariants}
            whileHover={linkHover}
            transition={hoverTransition}
            className="list-none"
          >
            <Link to={link.link} className="font-semibold text-lg text-white">
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        className="lg:hidden inline-flex items-center justify-center"
        variants={menuButtonVariants}
        whileHover={menuHover}
        whileTap={{ ...tapPress, transition: tapTransition }}
        transition={hoverTransition}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <MdMenu size={34} className="text-white" />
      </motion.button>

      <motion.div
        className="fixed inset-0 z-50 lg:hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        variants={overlayVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.aside
        className="fixed top-0 right-0 h-full w-[80%] max-w-[360px] bg-neutral-900/95 backdrop-blur-md border-l border-white/10 z-50 lg:hidden flex flex-col"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <motion.div variants={logoVariants} className="w-[72px] h-[72px]">
            <img src="/images/logo.png" alt="Logo Image" className="w-full" />
          </motion.div>
          <motion.button
            variants={closeButtonVariants}
            whileHover={menuHover}
            whileTap={tapPress}
            transition={hoverTransition}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-white"
          >
            <IoClose size={30} />
          </motion.button>
        </div>

        <motion.ul className="flex flex-col gap-4 px-6 py-6">
          {links.map((l, i) => (
            <motion.li
              key={i}
              variants={sidebarLinkVariants}
              whileHover={linkHover}
              transition={hoverTransition}
              className="list-none"
              onClick={() => setIsOpen(false)}
            >
              <Link
                to={l.link}
                className="block py-2 text-xl font-semibold text-white"
              >
                {l.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.aside>
    </motion.nav>
  );
};

export default Navbar;
