import Section from "@/components/Section";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "Hello! I'm Atul Chauhan, a passionate frontend developer with over three years of experience crafting engaging, user-friendly digital experiences. My journey in tech began with a fascination for the way code could be transformed into dynamic, interactive websites. This curiosity sparked a dedication to mastering the latest frontend development tools and technologies.";

const About = () => {
  const words = paragraph.split(" ");

  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["0.5 end", "0.2 start"],
  });

  return (
    <Section id="about" title="About">
      <p
        ref={target}
        className="text-2xl flex flex-wrap min-h-[calc(100vh/1.5)] font-medium md:text-5xl md:font-medium text-neutral-900 dark:text-neutral-400"
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word range={[start, end]} progress={scrollYProgress} key={index}>
              {word}
            </Word>
          );
        })}
      </p>
    </Section>
  );
};

const Word = ({
  range,
  progress,
  children,
}: {
  range: [number, number];
  progress: MotionValue<number>;
  children: string;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-2 text-neutral-900 dark:text-neutral-50">
      <span className="absolute opacity-25">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-neutral-900 dark:text-neutral-400"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default About;
