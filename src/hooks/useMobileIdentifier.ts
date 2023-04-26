import { useEffect, useState } from "react";

export const useMobileIdentifier = () => {
  const mobileMaxWidth = 767;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMaxWidth);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth >= mobileMaxWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return window.removeEventListener("resize", updateIsMobile);
  }, []);

  return { isMobile };
};
