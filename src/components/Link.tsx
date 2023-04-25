import { ComponentProps } from "react";

const Link = ({ className, children, ...restProps }: ComponentProps<"a">) => {
  return (
    <a
      className="hover:underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    >
      {children}
    </a>
  );
};

export default Link;
