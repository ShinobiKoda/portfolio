import Loader from "./Loader";
import { motion, introContainer, introItem } from "./animations/motion";

export default function Intro() {
  return (
    <motion.div
      className="w-full h-screen flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-(--background-color) px-4"
      variants={introContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-(--text-primary) tracking-wide text-center sm:text-left"
        variants={introItem}
      >
        Hello,
      </motion.h1>
      <motion.div variants={introItem}>
        <Loader />
      </motion.div>
    </motion.div>
  );
}
