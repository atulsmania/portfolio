import { CursorContext } from "@/context/CursorContext";
import { useContext, useEffect, useRef } from "react";

export const useCursor = <T extends HTMLElement>(
  initialValue: T | null | undefined = null
) => {
  const { hoveredElement } = useContext(CursorContext);
  const elementRef = useRef<T | null>(initialValue);

  const handleHover = (event: MouseEvent) => {
    const { target } = event;
    hoveredElement.current = target as HTMLUnknownElement;
  };

  const handleLeave = () => {
    hoveredElement.current = null;
  };

  useEffect(() => {
    if (!elementRef.current) return;
    const element = elementRef.current;
    element.addEventListener("mouseenter", handleHover);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mouseenter", handleHover);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return { elementRef };
};
