const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full px-2 py-8 pb-4 mx-auto mt-12 max-w-7xl">
      <div className="md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-full h-0.5 bg-white/30 my-8" />
      <p className="text-base text-center text-neutral-500">
        &copy; {new Date().getFullYear()} Atul Chauhan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
