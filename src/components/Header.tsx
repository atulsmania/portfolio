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
      className="bg-black/20 py-4 sticky top-0 backdrop-blur-sm z-30"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          AC
        </a>
        <ul className="hidden sm:flex">
          <li className="mx-4">
            <a href="/projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li className="mx-4">
            <a href="/connect" className="hover:text-white">
              Connect
            </a>
          </li>
          <li className="mx-4">
            <a href="/about" className="hover:text-white">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
