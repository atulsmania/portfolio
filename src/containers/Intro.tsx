import { motion } from "framer-motion";
import Skills from "./Skills";
import Section from "@/components/Section";
import { useEffect, useRef } from "react";
import { handleCursorEvents } from "@/lib/utils";

const Intro = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const unsubscribe = handleCursorEvents(ref);
    return () => unsubscribe();
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <Section
      id="intro"
      separator={false}
      className="!min-h-[calc(100svh-100px)] pb-4 justify-end"
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="w-full space-y-2 text-4xl font-bold md:space-y-6"
      >
        <motion.span
          variants={variants}
          className="text-6xl font-extrabold md:text-8xl text-neutral-900 dark:text-neutral-50"
        >
          Hi, I'm Atul
        </motion.span>
        <br />
        <motion.span
          variants={variants}
          className="text-4xl font-bold text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-500"
        >
          Frontend developer
        </motion.span>
        <br />
        <motion.span
          variants={variants}
          className="inline-block max-w-5xl text-sm font-semibold pb-14 md:pb-20 md:font-medium md:text-2xl text-neutral-500 dark:text-neutral-500"
        >
          🚀 Bringing the precision of a three-pointer to every line of code.
          Explore my portfolio and see how I turn ideas into digital slam dunks!
          🏀 Ready to collaborate? &nbsp;
          <a
            ref={ref}
            className="relative dark:text-neutral-200 text-neutral-900 group"
          >
            Let’s talk!
            <span className="absolute inset-x-0 bottom-0 h-1 transition-transform duration-500 origin-right scale-x-0 group-hover:origin-left bg-gradient-to-r from-red-400 to-pink-500 group-hover:scale-x-100" />
          </a>
        </motion.span>
      </motion.div>
      <Skills />
    </Section>
  );
};

export default Intro;
