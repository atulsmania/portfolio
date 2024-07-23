const Footer = () => {
  return (
    <footer
      id="connect"
      className="w-full pb-4 mt-12 min-h-[calc(100svh/2)] flex px-2"
    >
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="flex flex-col items-start w-full gap-4 md:items-center md:justify-center md:flex-row ">
          <span className="text-4xl text-center dark:text-neutral-200 text-neutral-400">
            Still Thinking ?
          </span>
          <span className="hidden w-1 h-full rounded-full dark:bg-neutral-200 md:block bg-neutral-800" />
          <a
            href="mailto:atul14.chauhan@outlook.com"
            className="p-2 text-3xl border rounded bg-neutral-900 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900"
          >
            Lets Talk !
          </a>
        </div>
        <p className="text-base text-center text-neutral-500">
          &copy; {new Date().getFullYear()} Atul Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
