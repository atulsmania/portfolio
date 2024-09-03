import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Welcome = () => {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target });
  const translateX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 50]);
  const slideX = useTransform(scrollYProgress, [0.5, 1], [0, 150]);
  const translateXTemplate = useMotionTemplate`translateX(-${translateX}%)`;
  const slideXTemplate = useMotionTemplate`translateX(-${slideX}%)`;

  const scaleXTemplate = useMotionTemplate`scaleX(${scrollYProgress})`;

  return (
    <div
      ref={target}
      className="relative flex items-center w-full min-h-[400vh]"
    >
      <motion.div
        style={{ transform: scaleXTemplate }}
        className="fixed top-0 left-0 z-40 w-full h-1 origin-left scale-x-0 bg-neutral-900 dark:bg-neutral-50/40"
      />
      <motion.h1
        style={{ transform: translateXTemplate }}
        className="fixed flex top-0 -translate-y-1/2 left-[calc(50%+94px)] font-bold text-[400px]"
      >
        <motion.span
          className="inline-block"
          style={{ transform: slideXTemplate }}
        >
          Welcom
        </motion.span>
        <motion.span className="inline-block" style={{ scale: scale }}>
          e
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Welcome;
