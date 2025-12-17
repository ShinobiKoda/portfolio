import { NavLink, Link, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
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
  sidebarVariants,
  sidebarLinkVariants,
  closeButtonVariants,
  sidebarSocialListVariants,
  iconHover,
} from "../animations/motion";

const Navbar = () => {
  const links = [
    {
      label: "home",
      link: "/",
    },
    {
      label: "projects",
      link: "/projects",
    },
    {
      label: "contact",
      link: "/contact",
    },
  ];

  const socials = [
    {
      link: "https://github.com/ShinobiKoda",
      icon: <FaGithub size={30} />,
    },
    {
      link: "https://x.com/sirp_xo",
      icon: <FaTwitter size={30} />,
    },
    {
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287/",
      icon: <FaLinkedin size={30} />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const location = useLocation();

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-transparent"
      >
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
          <motion.div
            variants={logoVariants}
            whileHover={logoHover}
            transition={hoverTransition}
            className="py-[19px]"
          >
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16">
                <img
                  src="/images/logo.webp"
                  alt="Logo Image"
                  className="w-full"
                />
              </div>
              <span className="font-bold text-base text-white">Praise</span>
            </Link>
          </motion.div>

          <motion.ul className="hidden lg:flex items-center gap-[54px]">
            {links.map((l, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                whileHover={linkHover}
                transition={hoverTransition}
                className="list-none"
              >
                <NavLink to={l.link} className="text-base font-medium">
                  <span className="text-(--text-primary)">#</span>
                  <span
                    className={
                      location.pathname === l.link
                        ? "text-white"
                        : "text-(--text-gray)"
                    }
                  >
                    <span>{l.label}</span>
                  </span>
                </NavLink>
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
            ref={menuBtnRef}
          >
            <RiMenu3Line size={24} className="text-white" />
          </motion.button>
        </div>

        <motion.aside
          className="fixed top-0 right-0 h-full w-full bg-(--background-color) z-50 lg:hidden flex flex-col"
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          aria-hidden={!isOpen}
          inert={!isOpen}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-white/10">
            <motion.div variants={logoVariants} className="w-[72px] h-[72px]">
              <img
                src="/images/logo.webp"
                alt="Logo Image"
                className="w-full"
              />
            </motion.div>
            <motion.button
              variants={closeButtonVariants}
              whileHover={menuHover}
              whileTap={tapPress}
              transition={hoverTransition}
              onClick={() => {
                setIsOpen(false);
                // Return focus to the menu trigger to avoid hidden focus
                menuBtnRef.current?.focus();
              }}
              aria-label="Close menu"
              className="text-[#D9D9D9]"
            >
              <IoClose size={24} />
            </motion.button>
          </div>

          <motion.ul className="flex flex-col gap-8 px-4 mt-[47px]">
            {links.map((l, i) => (
              <motion.li
                key={i}
                variants={sidebarLinkVariants}
                whileHover={linkHover}
                transition={hoverTransition}
                className="list-none"
                onClick={() => {
                  setIsOpen(false);
                  menuBtnRef.current?.focus();
                }}
              >
                <NavLink to={l.link} className="text-base font-medium">
                  <span className="text-(--text-primary)">#</span>
                  <span
                    className={
                      location.pathname === l.link
                        ? "text-white"
                        : "text-(--text-gray)"
                    }
                  >
                    <span>{l.label}</span>
                  </span>
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul
            className="flex items-center gap-2 mt-[107px] justify-center"
            variants={sidebarSocialListVariants}
          >
            {socials.map((social, index) => (
              <motion.li
                key={index}
                variants={sidebarLinkVariants}
                whileHover={iconHover}
                transition={hoverTransition}
                className="list-none"
              >
                <NavLink
                  to={social.link}
                  className="h-16 w-16 flex items-center justify-center text-(--text-gray)"
                  target="_blank"
                >
                  {social.icon}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </motion.nav>
      <div className="h-20" aria-hidden />
    </>
  );
};

export default Navbar;
