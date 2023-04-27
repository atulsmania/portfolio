import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 80,
    opacity: 0.2,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 0.4,
    },
  },
};

const Card = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};
export default Card;
