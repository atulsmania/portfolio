import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full rounded bg-neutral-400 sm:max-w-xl p-8 space-y-4">
      {children}
    </div>
  );
};

const Desc = ({ children, className, ...restProps }: ComponentProps<"div">) => {
  return (
    <div className={twMerge("font-sans text-black", className)} {...restProps}>
      {children}
    </div>
  );
};

const Image = ({ className, ...restProps }: ComponentProps<"img">) => {
  return (
    <img className={twMerge("rounded w-full", className)} {...restProps} />
  );
};

ProjectCard.Description = Desc;
ProjectCard.Img = Image;
export default ProjectCard;
