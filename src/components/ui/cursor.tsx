import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "usehooks-ts";

const Cursor = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const axisX = useMotionValue(0);
  const axisY = useMotionValue(0);
  const [hidden, setHidden] = useState(true);

  const [emoji, setEmoji] = useState<string>();

  const springX = useSpring(axisX, { damping: 80, stiffness: 1000 });
  const springY = useSpring(axisY, { damping: 80, stiffness: 1000 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      axisX.set(e.clientX - 12);
      axisY.set(e.clientY - 12);

      const portalCursor = document.getElementById("portal-cursor");
      if (!portalCursor) return;
      console.log(portalCursor.getAttribute("data-section"));
      const sectionId = portalCursor.getAttribute("data-section");
      setEmoji(sectionId as string);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = (e: MouseEvent) => {
      axisX.set(e.clientX);
      axisY.set(e.clientY);
      setHidden(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={clsx(
        "fixed z-50 w-6 h-6 rounded-full backdrop-invert shadow-sm pointer-events-none",
        "dark:bg-white/50 bg-black/20 border border-neutral-200 dark:border-neutral-800",
        { hidden: hidden }
      )}
    >
      <AnimatePresence>
        {!!emoji && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="relative px-3 py-2 text-xl dark:bg-neutral-50 whitespace-nowrap dark:text-neutral-950 left-5 top-5 rounded-3xl bg-neutral-900 text-neutral-50"
          >
            {emoji.replace(/-/g, " ")}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default () =>
  createPortal(<Cursor />, document.getElementById("portal-cursor")!);
