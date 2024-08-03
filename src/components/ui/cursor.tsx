import { useCursorContext } from "@/hooks/useCursorContext";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "usehooks-ts";

const cursorSize = 32;

const Cursor = () => {
  const { hoveredElement } = useCursorContext();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const axisX = useMotionValue(-cursorSize);
  const axisY = useMotionValue(-cursorSize);
  const height = useMotionValue(cursorSize);
  const width = useMotionValue(cursorSize);
  const radius = useMotionValue(50);

  const springX = useSpring(axisX, { damping: 80, stiffness: 1000 });
  const springY = useSpring(axisY, { damping: 80, stiffness: 1000 });
  const springHeight = useSpring(height, { damping: 80, stiffness: 1000 });
  const springWidth = useSpring(width, { damping: 80, stiffness: 1000 });
  const springRadius = useSpring(radius, { damping: 80, stiffness: 1000 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const bounds = getElementBounds();
      if (!bounds) {
        axisX.set(e.clientX - cursorSize / 2);
        axisY.set(e.clientY - cursorSize / 2);
        height.set(cursorSize);
        width.set(cursorSize);
        radius.set(50);
        return;
      }

      const x = bounds.x - cursorSize / 4;
      const y = bounds.y + bounds.height;
      const nWidth = bounds.width + cursorSize / 2;
      const nHeight = 4;
      axisX.set(x);
      axisY.set(y);
      height.set(nHeight);
      width.set(nWidth);
      radius.set(6);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const getElementBounds = () => {
    if (!hoveredElement.current) return;
    const bounds = hoveredElement.current.getBoundingClientRect();
    return bounds;
  };

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        width: springWidth,
        height: springHeight,
        borderRadius: springRadius,
      }}
      className={cn(
        "transform-z-0 fixed rounded-full shadow-sm pointer-events-none",
        "bg-black/30 dark:bg-white/60 z-50 backdrop-invert"
      )}
    />
  );
};

export default () =>
  createPortal(<Cursor />, document.getElementById("portal-cursor")!);
