import { PropsWithChildren, useContext, useRef } from "react";
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
import Card from "../components/Card";
import { AppContext } from "../Context/GlobalContext";

interface ParallaxProps extends PropsWithChildren {
  baseVelocity: number;
}

const skillList = [
  "Javascript",
  "React",
  "Redux",
  "Typescript",
  "React Query",
  "Tailwind",
  "Storybook",
  "HTML5",
  "Nodejs",
  "CSS/SCSS",
  "Svelte",
];

const ParallaxText = ({ children, baseVelocity = 1 }: ParallaxProps) => {
  const { isMobile } = useContext(AppContext);
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

  const x = useTransform(baseX, (v) => `${wrap(-20, -70, v)}%`);

  const directionFactor = useRef<number>(1);

  if (!isMobile) {
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
  }

  return (
    <div className="w-full flex flex-nowrap">
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
        "px-4 py-1 text-sm font-semibold rounded-full block",
        "md:py-4 md:px-12 bg-neutral-400/10 md:text-xl"
      )}
    >
      {children}
    </span>
  );
};

export default () => {
  const { isMobile } = useContext(AppContext);
  const multiplier = isMobile ? 2.5 : 1;

  const skillArr = (isMobile ? skillList : [...skillList, ...skillList]).map(
    (item, i) => <Skill key={i}>{item}</Skill>
  );

  return (
    <Card>
      <section className="space-y-4 md:text-clip overflow-hidden relative">
        {!isMobile ? (
          <>
            <ParallaxText baseVelocity={-1 * multiplier}>
              {skillArr}
            </ParallaxText>
            <ParallaxText baseVelocity={1 * multiplier}>
              {skillArr.reverse()}
            </ParallaxText>
          </>
        ) : (
          <div className="flex flex-wrap gap-2">{skillArr}</div>
        )}
      </section>
    </Card>
  );
};
