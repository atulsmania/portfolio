const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `radial-gradient(
            rgba(0, 0, 0, 0) 1px,
            black 1px
          )`,
        backgroundSize: "4px 4px",
      }}
      className="sticky top-0 z-30 py-4 bg-black/20 backdrop-blur-sm"
    >
      <nav className="container flex items-center justify-between mx-auto">
        <a href="/" className="text-2xl font-bold">
          AC
        </a>
        <ul className="flex">
          <li className="hidden mx-4 sm:block">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li className="hidden mx-4 sm:block">
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li className="px-2 py-1 mx-4 font-semibold rounded cursor-pointer sm:p-0 sm:font-normal sm:bg-transparent bg-neutral-400/20">
            <a
              href="https://drive.google.com/uc?id=1h7DMUAKIDE2h-WL7pThFyHtROGJquVPU&export=download"
              className="hover:text-white"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
