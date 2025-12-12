import Loader from "./Loader";
import {
  motion,
  introContainer,
  helloText,
  helloChar,
  loaderIntro,
} from "./animations/motion";

export default function Intro() {
  const text = "Hello,".split("");
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
        variants={helloText}
      >
        {text.map((c, i) => (
          <motion.span key={i} className="inline-block" variants={helloChar}>
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </motion.h1>
      <motion.div variants={loaderIntro}>
        <Loader />
      </motion.div>
    </motion.div>
  );
}
