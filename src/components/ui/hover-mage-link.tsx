import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
};

const Link = ({ heading, imgSrc, subheading, href }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between py-4 transition-colors duration-500 border-b-2 group border-neutral-700 dark:hover:border-neutral-50 hover:border-neutral-900 md:py-8"
    >
      <div>
        <span className="relative z-10 block text-4xl font-bold transition-colors duration-500 text-neutral-500 dark:group-hover:text-neutral-50 group-hover:text-neutral-900 md:text-6xl">
          <span className="inline-block">{heading}</span>
        </span>
        <span className="relative z-10 block mt-2 text-base transition-colors duration-500 text-neutral-500 dark:group-hover:text-neutral-50 group-hover:text-neutral-900">
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
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl dark:text-neutral-50 text-neutral-900" />
      </motion.div>
    </motion.a>
  );
};

export default Link;