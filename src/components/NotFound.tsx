import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { NavLink } from "react-router-dom";
import {
  motion,
  heroContainerVariants,
  heroItemVariants,
  bounceDropVariants,
  buttonHover,
  tapPress,
  tapTransition,
  titleLineGrowVariants,
} from "./animations/motion";

export default function NotFound() {
  const digits = ["4", "0", "4"];

  return (
    <div className="w-full min-h-screen bg-(--background-color)">
      <Navbar />

      <motion.section
        className="w-full max-w-5xl mx-auto px-4 lg:px-8 mt-16 lg:mt-28"
        variants={heroContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          variants={heroItemVariants}
        >
          <div className="flex items-end justify-center gap-2 select-none">
            {digits.map((d, i) => (
              <motion.span
                key={i}
                variants={bounceDropVariants}
                className={
                  "font-bold leading-none " +
                  (i === 1
                    ? "text-(--text-primary) text-7xl sm:text-8xl md:text-9xl"
                    : "text-white text-7xl sm:text-8xl md:text-9xl")
                }
              >
                {d}
              </motion.span>
            ))}
          </div>
          <motion.h1
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold"
            variants={heroItemVariants}
          >
            Page not found
          </motion.h1>

          <motion.p
            className="text-(--text-gray) text-base max-w-xl"
            variants={heroItemVariants}
          >
            The page you’re looking for doesn’t exist or has been moved.
          </motion.p>

          <motion.div
            className="h-px bg-(--text-primary) w-24 sm:w-32"
            variants={titleLineGrowVariants}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-1"
            variants={heroItemVariants}
          >
            <motion.div
              whileHover={buttonHover}
              whileTap={{ ...tapPress, transition: tapTransition }}
            >
              <NavLink
                to="/"
                className="px-4 py-2 border border-(--text-primary) font-medium text-base text-white"
              >
                Go home
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={buttonHover}
              whileTap={{ ...tapPress, transition: tapTransition }}
            >
              <NavLink
                to="/projects"
                className="px-4 py-2 border border-(--text-primary) font-medium text-base text-white"
              >
                View projects
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 w-full max-w-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-left"
            variants={heroItemVariants}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full bg-(--text-primary)"
                aria-hidden
              />
              <p className="text-sm sm:text-base text-white">
                Return to a known route or use the navigation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
