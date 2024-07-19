import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";
import { toggleDarkMode } from "@/lib/utils";

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
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
        <Toggler />
      </div>
    </header>
  );
};

export default Header;
