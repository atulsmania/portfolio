import { cursorStyles } from "@/components/ui/cursor";
import { type ClassValue, clsx } from "clsx";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Node.js",
  "Express",
  "MongoDB",
  "D3JS",
  "GraphQL",
];

export const setCurrentTheme = () => {
  const currentTheme = window.localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(currentTheme);
};

export const toggleDarkMode = () => {
  const currentTheme = window.localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.theme = newTheme;

  document.documentElement.classList.remove(currentTheme);
  document.documentElement.classList.add(newTheme);
};

export const setCursorType = (cursorStyle: keyof typeof cursorStyles) => {
  document
    .getElementById("portal-cursor")!
    .setAttribute("data-cursor", cursorStyle);
};

export const handleCursorEvents = (ref: RefObject<HTMLUnknownElement>) => {
  if (!ref.current) return () => null;
  const onMouseEnter = () => {
    setCursorType("link");
  };

  const onMouseLeave = () => {
    setCursorType("default");
  };

  ref.current?.addEventListener("mouseenter", onMouseEnter);
  ref.current?.addEventListener("mouseleave", onMouseLeave);
  return () => {
    ref.current?.removeEventListener("mouseenter", onMouseEnter);
    ref.current?.removeEventListener("mouseleave", onMouseLeave);
  };
};

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
  });
};
