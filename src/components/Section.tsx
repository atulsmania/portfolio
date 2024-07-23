import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title?: string;
  id: string;
  children: React.ReactNode;
  separator?: boolean;
} & ComponentProps<typeof motion.section>;

const Section = (props: SectionProps) => {
  const { children, title, className, separator = true, ...rest } = props;

  return (
    <motion.section
      className={cn(
        "w-full flex flex-col justify-center items-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      viewport={{ amount: 0.25 }}
      exit={{ opacity: 0, y: -20 }}
      {...rest}
    >
      {separator && (
        <div className="self-start w-10 h-[2px] my-3 bg-neutral-900 dark:bg-neutral-50 rounded-full md:mb-6" />
      )}
      <div className="w-full">{children}</div>
    </motion.section>
  );
};

export default Section;
