import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { handleCursorEvents, skills } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = handleCursorEvents(ref);
    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InfiniteMovingCards
        direction="left"
        speed="slow"
        pauseOnHover={false}
        items={skills}
      />
    </motion.div>
  );
};

export default Skills;
