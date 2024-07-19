import { motion } from "framer-motion";

const WordReveal = ({ children }: { children: string }) => {
  return (
    <>
      {children.split(" ").map((currentWord, index) => {
        return (
          <motion.div
            className="inline-block"
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", offset: 100 }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
          >
            <span>{currentWord}&nbsp;</span>
          </motion.div>
        );
      })}
    </>
  );
};

export default WordReveal;
