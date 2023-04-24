import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: "0.5",
  },
  onscreen: {
    y: 50,
    opacity: "1",
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

const Card = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};
export default Card;
