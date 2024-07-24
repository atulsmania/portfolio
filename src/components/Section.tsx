import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title?: string;
  id: string;
  children: React.ReactNode;
  separator?: boolean;
} & ComponentProps<"section">;

const Section = (props: SectionProps) => {
  const { children, title, className, separator = true, ...rest } = props;

  return (
    <section
      className={cn(
        "w-full flex flex-col justify-center items-center",
        className
      )}
      {...rest}
    >
      {separator && (
        <div className="self-start w-10 h-[2px] my-3 bg-neutral-900 dark:bg-neutral-50 rounded-full md:mb-6" />
      )}
      <div className="w-full">{children}</div>
    </section>
  );
};

export default Section;
