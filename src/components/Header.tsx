import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";
import { toggleDarkMode } from "@/lib/utils";

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import Link from "./ui/link";
import { ImLocation } from "react-icons/im";

const Toggler = () => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [state, setState] = useState(isDark);

  const toggleTheme = () => {
    setState(!state);
    toggleDarkMode();
  };

  return (
    <Button size="sm" variant="ghost" onClick={toggleTheme}>
      {state ? <MdDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
    </Button>
  );
};

const Header = () => {
  const indiaDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "long",
    day: "numeric",
  });

  const indiaTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <header className="py-4">
      <div className="flex justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-2 font-mono font-medium">
          <span className="text-md">{indiaTime},</span>
          <span className="text-md">India</span>
          <ImLocation size={18} className="inline fill-red-400" />
        </div>
        <Menu />
        <Toggler />
      </div>
    </header>
  );
};

const Menu = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return null;
  }

  return (
    <nav className="flex items-center">
      {["#home", "#about", "#contact"].map((link, i) => (
        <Link
          key={link}
          href={link}
          tileIndex={i}
          hoveredCell={hoveredCell}
          layoutId="header-tabs"
          className="px-1 border-black md:px-3"
          onMouseEnter={() => setHoveredCell(i)}
          onMouseLeave={() => setHoveredCell(null)}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
