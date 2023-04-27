import classNames from "classnames";
import { PropsWithChildren } from "react";

type TimelineItem = {
  year?: string;
  align: "left" | "right";
} & PropsWithChildren;

const Timeline = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <div className="relative h-full pt-4 space-y-4 overflow-hidden wrap">
        <div
          className={classNames(
            "absolute hidden w-0 h-full border-2 sm:block",
            "left-1/2 border-opacity-20 border-neutral-400"
          )}
        >
          <span
            className={classNames(
              "absolute px-4 pt-1 text-xl rounded-full",
              "bg-neutral-400 text-black -translate-x-1/2 -translate-y-1/2"
            )}
          >
            Journey
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

const Item = ({ children, year, align }: TimelineItem) => {
  return (
    <div
      className={classNames("flex items-center justify-between w-full", {
        "sm:flex-row-reverse": align === "left",
      })}
    >
      <div className="order-1 hidden w-5/12 sm:block" />
      <div
        className={classNames(
          "z-20 items-center order-1 hidden px-2 py-1 bg-black",
          "border-4 rounded-lg border-neutral-400/20 sm:flex w-fit"
        )}
      >
        <span className="mx-auto text-lg font-semibold">{year}</span>
      </div>
      <div className="order-1 w-full rounded-lg sm:w-5/12">{children}</div>
    </div>
  );
};

Timeline.Item = Item;
export default Timeline;
