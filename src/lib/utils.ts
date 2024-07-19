import { type ClassValue, clsx } from "clsx";
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

export const addIdToCursor = (id: string) => {
  document.getElementById("portal-cursor")?.setAttribute("data-section", id);
};

export const removeIdFromCursor = () => {
  document.getElementById("portal-cursor")?.removeAttribute("data-section");
};
