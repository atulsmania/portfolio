import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps } from "react";

type LinkProps = {
  tileIndex: number;
  hoveredCell: number | null;
  layoutId: string;
} & ComponentProps<"a">;

const Link = (props: LinkProps) => {
  const { tileIndex, hoveredCell, children, layoutId, ...restProps } = props;
  return (
    <a style={{ position: "relative" }} href="#" {...restProps}>
      <AnimatePresence>
        {hoveredCell === tileIndex && (
          <motion.div
            className="absolute left-0 z-10 w-full h-[2px] bg-neutral-900/50 rounded opacity-0 dark:bg-white/50 -bottom-2"
            layoutId={layoutId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-20 p-1 text-lg">{children}</span>
    </a>
  );
};

export default Link;
