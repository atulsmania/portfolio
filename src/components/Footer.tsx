const Footer = () => {
  return (
    <footer id="connect" className="w-full">
      <div className="flex flex-col justify-center pb-8">
        <span className="mx-auto font-bold text-center text-8xl md:text-9xl dark:text-neutral-50 text-neutral-900">
          Footer
        </span>
        <p className="text-sm text-center text-neutral-500">
          &copy; {new Date().getFullYear()} Atul Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
