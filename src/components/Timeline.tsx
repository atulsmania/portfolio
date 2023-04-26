import classNames from "classnames";
import { PropsWithChildren } from "react";

type TimelineItem = {
  year?: string;
  align: "left" | "right";
} & PropsWithChildren;

const Timeline = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <div className="relative h-full overflow-hidden wrap">
        <div
          className={classNames(
            "absolute hidden h-full border-2 sm:block",
            "left-1/2 border-opacity-20 border-neutral-400"
          )}
        />
        {children}
      </div>
    </div>
  );
};

const Item = ({ children, year, align }: TimelineItem) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-between w-full mb-8 left-timeline",
        { "sm:flex-row-reverse": align === "left" }
      )}
    >
      <div className="order-1 hidden w-5/12 sm:block" />
      <div className="z-20 items-center order-1 hidden p-2 shadow-xl sm:flex aspect-square w-fit">
        <h1 className="mx-auto text-lg font-semibold">{year}</h1>
      </div>
      <div className="order-1 w-full rounded-lg sm:w-5/12">{children}</div>
    </div>
  );
};

Timeline.Item = Item;
export default Timeline;
