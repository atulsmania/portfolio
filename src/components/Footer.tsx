const Footer = () => {
  return (
    <footer id="connect" className="flex w-full px-2 pb-4 mt-12">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <p className="text-base text-center text-neutral-500">
          &copy; {new Date().getFullYear()} Atul Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
