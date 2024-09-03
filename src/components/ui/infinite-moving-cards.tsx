import React, { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <section
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden bg-lime-300/60 dark:bg-neutral-900 dark:border-neutral-800 border",
        "max-w-7xl mx-auto md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll"
        )}
      >
        {items.map((quote, idx) => (
          <Fragment key={idx}>
            <li className="w-2 h-2 bg-black rounded-full dark:bg-neutral-400" />
            <li
              className="relative flex items-center flex-shrink-0 max-w-full px-4 md:px-8 w-fit"
              key={idx}
            >
              <blockquote className="text-sm font-light md:font-medium md:text-xl text-neutral-900 dark:text-neutral-400">
                {quote}
              </blockquote>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
};
