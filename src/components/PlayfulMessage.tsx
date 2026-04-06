import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

const PlayfulMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 3500);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasShown]);

  return (
    <div ref={ref} className="w-full flex justify-center items-center my-4" style={{ minHeight: "40px" }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.35, ease: [0.25, 0, 0.35, 1] }}
            className="border border-(--text-primary) px-5 py-2 flex items-center gap-3"
          >
            <motion.div
              className="h-2 w-2 bg-(--text-primary)"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-medium text-(--text-gray)">
              don't worry, it works
            </span>
            <span className="text-(--text-primary) font-semibold text-sm">
              ~
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayfulMessage;
