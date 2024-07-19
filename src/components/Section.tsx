import { addIdToCursor, cn, removeIdFromCursor } from "@/lib/utils";
import React, { ComponentProps } from "react";

type SectionProps = {
  title?: string;
  id: string;
} & ComponentProps<"section">;

const Section = (props: SectionProps) => {
  const { children, title, className, ...rest } = props;

  return (
    <section
      onMouseEnter={() => addIdToCursor(props.id)}
      onMouseLeave={removeIdFromCursor}
      className={cn("w-full", className)}
      {...rest}
    >
      <div className="flex flex-col w-full gap-6 mx-auto max-w-7xl md:gap-0 md:flex-row">
        <div className="w-full md:space-y-6">
          <div className="w-10 h-[2px] my-3 bg-neutral-900 dark:bg-neutral-50 rounded-full" />
          <div className="flex flex-col gap-2 md:gap-6">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
