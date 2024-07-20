import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const TextProgress = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(ref.current?.offsetWidth ?? 0);
  const { scrollYProgress } = useScroll({
    target: ref,
    smooth: 10,
    offset: ["end end", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, width]);

  useEffect(() => {
    setWidth(ref.current?.offsetWidth ?? 0);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <motion.span
        ref={ref}
        className="absolute inset-0 z-10 transition-opacity group-hover:opacity-0 bg-neutral-100/50 dark:bg-black/40"
        style={{ x: progress }}
      />
      {children}
    </span>
  );
};

export default TextProgress;
