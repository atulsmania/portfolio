import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadResume = () => {
  const url =
    "https://drive.google.com/uc?id=1h7DMUAKIDE2h-WL7pThFyHtROGJquVPU&export=download";
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "resume.pdf");
  document.body.appendChild(link);
  link.click();
};

export const skills = [
  "HTML",
  "CSS",
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
