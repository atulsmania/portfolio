import Section from "@/components/Section";
import TextProgress from "@/components/ui/text-progress";
import { handleCursorEvents } from "@/lib/utils";
import { useEffect, useRef } from "react";

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
    <Section id="contact" title="Contact">
      <div className="flex flex-col justify-between text-6xl font-bold md:text-8xl dark:text-neutral-300">
        {contact.map(({ link, title }, i) => (
          <a href={link} target="_blank" className="w-fit">
            <TextProgress key={i}>{title}</TextProgress>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
