import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/lib/utils";
import { motion } from "framer-motion";

type Direction = "left" | "right";
type Props = {
  direction?: Direction;
};

const Skills = ({ direction = "left" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InfiniteMovingCards
        direction={direction}
        speed="slow"
        pauseOnHover={false}
        items={skills}
      />
    </motion.div>
  );
};

export default Skills;
