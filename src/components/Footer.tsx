import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useMediaQuery } from "usehooks-ts";

const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const iconSize = isDesktop ? 36 : 24;
  return (
    <footer className="px-8 py-8 md:px-12 lg:px-32 bg-neutral-200/60">
      <div className="flex flex-col items-center justify-between w-full lg:flex-row">
        <div className="flex justify-between w-full gap-4 text-2xl md:gap-4 md:justify-normal md:text-5xl">
          <div>
            <span className="whitespace-nowrap">Say hi</span>
            <div className="hidden w-20 h-1 my-3 bg-neutral-900 dark:bg-neutral-50 md:block" />
          </div>

          <a
            className="overflow-hidden text-blue-400/90 hover:underline"
            href="mailto:atul14.chauhan@outlook.com"
          >
            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
              atul14.chauhan@outlook.com
            </span>
          </a>
        </div>
        <div id="contact" className="flex mt-4 space-x-8 md:mt-0">
          <a
            href="https://github.com/atulsmania"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={iconSize} />
          </a>
          <a
            href="https://www.linkedin.com/in/chauhan-atul/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={iconSize} />
          </a>
          <a href="https://x.com/faintd_monk" target="_blank" rel="noreferrer">
            <FaTwitter size={iconSize} />
          </a>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <p className="text-sm text-center text-neutral-500">
          &copy; {new Date().getFullYear()} Atul Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
