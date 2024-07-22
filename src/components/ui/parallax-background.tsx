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
  const blockSize = isMobile ? 40 : 70;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [blockSize * 10, 0]);

  const position = useMotionTemplate`0 ${y}px`;

  return (
    <motion.div
      style={{
        backgroundSize: `${blockSize}px ${blockSize}px`,
        backgroundPosition: position,
      }}
      className="fixed left-0 top-0 w-full h-4/5 overflow-hidden dark:bg-light-grid bg-dark-grid -z-10 [mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,.5),#000)]"
    />
  );
};

export default () =>
  createPortal(
    <ParallaxBackground />,
    document.getElementById("portal-parallax")!
  );
