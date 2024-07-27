import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "usehooks-ts";

export const cursorStyles = {
  link: "link",
  default: "default",
} as const;

const cursorSize = 32;

const Cursor = () => {
  const scale = useMotionValue(1);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const axisX = useMotionValue(-cursorSize);
  const axisY = useMotionValue(-cursorSize);

  const springX = useSpring(axisX, { damping: 80, stiffness: 1000 });
  const springY = useSpring(axisY, { damping: 80, stiffness: 1000 });
  const springScale = useSpring(scale, { damping: 80, stiffness: 1000 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      axisX.set(e.clientX - cursorSize / 2);
      axisY.set(e.clientY - cursorSize / 2);

      const portalCursor = document.getElementById("portal-cursor");
      if (!portalCursor) return;
      const type = portalCursor.getAttribute("data-cursor");
      const scaleValue = type === "link" ? 2.5 : 1;
      scale.set(scaleValue);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        width: cursorSize,
        height: cursorSize,
        scale: springScale,
      }}
      className={cn(
        "transform-z-0 fixed z-50 rounded-full shadow-sm pointer-events-none",
        "bg-black dark:bg-black backdrop-invert mix-blend-difference"
      )}
    />
  );
};

export default () =>
  createPortal(<Cursor />, document.getElementById("portal-cursor")!);
