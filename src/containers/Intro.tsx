import { motion } from "framer-motion";
import { addIdToCursor, removeIdFromCursor } from "@/lib/utils";

const Intro = () => {
  return (
    <section
      onMouseEnter={() => addIdToCursor("hi-there")}
      onMouseLeave={removeIdFromCursor}
      className="mt-28"
      id="hi there"
    >
      <div className="flex flex-col justify-end w-full space-y-4 md:space-y-6">
        <h2 className="font-sans text-3xl font-bold md:text-8xl text-neutral-900 dark:text-neutral-50">
          Hi, I'm Atul
          <br />
          I'm a &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
            Frontend developer
          </span>
        </h2>
        <span className="max-w-3xl font-mono text-xl text-neutral-500 dark:text-neutral-500">
          <IconReveal>🚀</IconReveal> Bringing the precision of a three-pointer
          to every line of code. Explore my portfolio and see how I turn ideas
          into digital slam dunks!<IconReveal>&nbsp;🏀</IconReveal> Ready to
          collaborate? Let’s talk!
        </span>
      </div>
    </section>
  );
};

const IconReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="inline-block text-2xl"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "fit-content", opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Intro;
