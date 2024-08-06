import { useCursorContext } from "@/hooks/useCursorContext";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "usehooks-ts";

const cursorSize = 16;

export enum CursorType {
  cover,
  underline,
  pointer,
}

const getCursorBounds = (
  element: HTMLElement,
  cursorType: CursorType | null
) => {
  if (!element) return;

  switch (cursorType) {
    case CursorType.underline: {
      const bounds = element.getBoundingClientRect();
      return {
        x: bounds.x,
        y: bounds.y + bounds.height,
        width: bounds.width,
        height: 2,
        radius: 4,
      };
    }
    case CursorType.pointer: {
      const bounds = element.getBoundingClientRect();
      return {
        x: bounds.x - cursorSize * 2,
        y: bounds.y + bounds.height / 2 - cursorSize / 2,
        width: cursorSize,
        height: cursorSize,
        radius: 50,
      };
    }
    case CursorType.cover:
    default: {
      const bounds = element.getBoundingClientRect();
      return {
        x: bounds.x - cursorSize / 4,
        y: bounds.y - cursorSize / 4,
        width: bounds.width + cursorSize / 2,
        height: bounds.height + cursorSize / 2,
        radius: 4,
      };
    }
  }
};

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
      const { target, type } = hoveredElement.current;
      if (!target) {
        axisX.set(e.clientX - cursorSize / 2);
        axisY.set(e.clientY - cursorSize / 2);
        height.set(cursorSize);
        width.set(cursorSize);
        radius.set(50);
        return;
      }

      const bounds = getCursorBounds(target, type);
      if (!bounds) return;
      axisX.set(bounds.x);
      axisY.set(bounds.y);
      height.set(bounds.height);
      width.set(bounds.width);
      radius.set(bounds.radius);
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
        width: springWidth,
        height: springHeight,
        borderRadius: springRadius,
      }}
      className={cn(
        "transform-z-0 fixed rounded-full shadow-sm pointer-events-none",
        "bg-white z-50 mix-blend-difference"
      )}
    />
  );
};

export default () =>
  createPortal(<Cursor />, document.getElementById("portal-cursor")!);
