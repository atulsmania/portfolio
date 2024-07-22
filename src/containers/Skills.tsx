import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/lib/utils";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
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
