import { useMediaQuery } from "usehooks-ts";
import {
  getCurrentTime,
  handleCursorEvents,
  toggleDarkMode,
} from "@/lib/utils";

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { ImLocation } from "react-icons/im";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Header = () => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(isDark);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };

  const target = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>(getCurrentTime());
  const seconds = 60 * 1000;

  useEffect(() => {
    const unsubscribe = handleCursorEvents(target);
    const id = setInterval(() => {
      setTime(getCurrentTime());
    }, seconds);
    return () => unsubscribe();
  }, []);

  return (
    <header className="px-2 py-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between mx-auto max-w-7xl"
      >
        <div className="flex items-center space-x-2 font-mono font-medium">
          <span className="text-md">{time},</span>
          <span className="text-md">India</span>
          <ImLocation size={18} className="inline fill-red-400" />
        </div>

        <span ref={target} className="relative w-6" onClick={toggleTheme}>
          <AnimatePresence>
            {darkMode ? (
              <motion.span
                className="absolute"
                key="dark"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <MdDarkMode size={24} />
              </motion.span>
            ) : (
              <motion.span
                className="absolute"
                key="light"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <MdOutlineLightMode size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.div>
    </header>
  );
};

export default Header;
