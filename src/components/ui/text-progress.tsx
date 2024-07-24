import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

const TextProgress = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end 0.7"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <span className="relative inline-block overflow-hidden w-fit">
      <motion.span
        ref={ref}
        className="absolute inset-0 left-0 z-10 transition-opacity origin-right group-hover:opacity-0 bg-neutral-100/50 dark:bg-black/40"
        style={{ scaleX: scaleX }}
      />
      {children}
    </span>
  );
};

export default TextProgress;
