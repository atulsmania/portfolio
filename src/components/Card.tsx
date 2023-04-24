import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 80,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

const Card = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};
export default Card;
