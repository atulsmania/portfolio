import Section from "@/components/Section";
import TextProgress from "@/components/ui/text-progress";
import { useCursor } from "@/hooks/useCursor";
import { ComponentProps } from "react";

const contact = [
  { link: "https://www.linkedin.com/in/chauhan-atul/", title: "LinkedIn" },
  { link: "https://twitter.com/atulsmania", title: "Twitter" },
  { link: "https://github.com/atulsmania", title: "GitHub" },
  { link: "mailto:atul14.chauhan@outlook.com", title: "Email" },
  {
    link: "https://drive.usercontent.google.com/u/0/uc?id=1h7DMUAKIDE2h-WL7pThFyHtROGJquVPU&export=download",
    title: "Resume",
  },
];

const Contact = () => {
  return (
    <Section id="contact" title="Contact" className="py-12">
      <div className="flex flex-col justify-between text-6xl font-bold md:text-8xl dark:text-neutral-300">
        {contact.map(({ link, title }, i) => (
          <Link href={link} target="_blank" className="w-fit">
            <TextProgress key={i}>{title}</TextProgress>
          </Link>
        ))}
      </div>
    </Section>
  );
};

const Link = (props: ComponentProps<"a">) => {
  const { children, ...rest } = props;
  const { elementRef } = useCursor<HTMLAnchorElement>();

  return (
    <a ref={elementRef} {...rest}>
      {children}
    </a>
  );
};

export default Contact;
