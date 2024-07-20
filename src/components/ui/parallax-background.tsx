import { createPortal } from "react-dom";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const ParallaxBackground = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const blockSize = isMobile ? 50 : 100;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, blockSize * 5]);

  const position = useMotionTemplate`0 ${y}px`;

  return (
    <motion.div
      style={{
        backgroundSize: `${blockSize}px ${blockSize}px`,
        backgroundPosition: position,
      }}
      className="fixed inset-0 w-full h-3/4 overflow-hidden blur-[2px] dark:bg-light-grid bg-dark-grid -z-10 [mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,.5),#000)]"
    />
  );
};

export default () =>
  createPortal(
    <ParallaxBackground />,
    document.getElementById("portal-parallax")!
  );
