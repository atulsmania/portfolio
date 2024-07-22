import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ShrinkableCard = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div className={cn("bg-neutral-700 rounded-3xl", className)}>
      {children}
    </motion.div>
  );
};

export default ShrinkableCard;
