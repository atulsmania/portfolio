import { CursorType } from "@/components/ui/cursor";
import { CursorContext } from "@/context/CursorContext";
import { useContext, useEffect, useRef } from "react";

export const useCursor = <T extends HTMLElement>(type?: CursorType) => {
  const { hoveredElement } = useContext(CursorContext);
  const elementRef = useRef<T | null>(null);

  const handleHover = (event: MouseEvent) => {
    const { target } = event;
    hoveredElement.current.target = target as HTMLUnknownElement;
    hoveredElement.current.type = type ? type : CursorType.cover;
  };

  const handleLeave = () => {
    hoveredElement.current.target = null;
    hoveredElement.current.type = null;
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
