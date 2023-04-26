import { PropsWithChildren, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import classNames from "classnames";

interface ParallaxProps extends PropsWithChildren {
  baseVelocity: number;
}

const skillList = [
  "Javascript",
  "React",
  "Typescript",
  "Redux",
  "React Query",
  "Tailwind",
  "Storybook",
  "HTML5",
  "Nodejs",
  "CSS/SCSS",
  "Svelte",
];

const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    if (scrollY.get() === scrollY.getPrevious()) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap gap-4"
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Skill = ({ children }: PropsWithChildren) => {
  return (
    <span
      className={classNames(
        "px-4 py-1 text-sm font-semibold rounded-full",
        "md:py-4 md:px-12 bg-neutral-400/10 md:text-xl"
      )}
    >
      {children}
    </span>
  );
};

export default function App() {
  return (
    <section
      style={{
        boxShadow: "0 20px 20px -20px black",
      }}
      className="space-y-4 overflow-hidden"
    >
      <ParallaxText baseVelocity={-1}>
        {skillList.map((item) => (
          <Skill key={item}>{item}</Skill>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={1}>
        {skillList.reverse().map((item) => (
          <Skill key={item}>{item}</Skill>
        ))}
      </ParallaxText>
    </section>
  );
}