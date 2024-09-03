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

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
  });
};
