import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
};

const Link = ({ heading, imgSrc, subheading, href }: Props) => {
  const elementRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [centered, setCentered] = useState(false);

  const { scrollYProgress } = useScroll({
    axis: "y",
    target: elementRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile) return;
    if (latest > 0 && latest < 1) {
      setCentered(true);
    } else {
      setCentered(false);
    }
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  return (
    <motion.a
      href={href}
      target="_blank"
      ref={elementRef}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between py-4 overflow-x-hidden transition-colors duration-500 border-b-2 group border-neutral-700 dark:hover:border-neutral-50 hover:border-neutral-900 md:py-8 md:overflow-x-visible"
    >
      <div>
        <span
          className={cn(
            "relative z-10 block text-5xl font-bold transition-colors duration-500 text-neutral-500 dark:text-neutral-400 dark:group-hover:text-neutral-50 group-hover:text-neutral-900 md:text-7xl",
            { "text-neutral-900 dark:text-neutral-50": centered }
          )}
        >
          {heading}
        </span>
        <span
          className={cn(
            "relative z-10 block mt-2 text-base transition-colors duration-500 text-neutral-500 dark:text-neutral-400 dark:group-hover:text-neutral-50 group-hover:text-neutral-900",
            { "text-neutral-900 dark:text-neutral-50": centered }
          )}
        >
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 object-cover w-32 h-24 rounded-lg md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        animate={centered ? "whileHover" : undefined}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl dark:text-neutral-50 text-neutral-900" />
      </motion.div>
    </motion.a>
  );
};

export default Link;
