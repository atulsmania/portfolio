const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="justify-center hidden w-full pb-8 md:flex">
      <span onClick={handleScrollToTop}>
        <svg
          className="w-16 p-2 transition-colors -rotate-90 rounded-full cursor-pointer hover:bg-neutral-400/20 fill-neutral-400"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.982,17h26.035c0.397,0,0.756-0.244,0.908-0.617c0.152-0.374,0.068-0.804-0.213-1.09l-11.789-12    c-0.384-0.391-1.005-0.391-1.389,0s-0.384,1.023,0,1.414L26.646,15H2.982C2.439,15,2,15.448,2,16S2.439,17,2.982,17z" />
          <path d="M17.228,29c0.251,0,0.503-0.098,0.695-0.293l7.86-8c0.384-0.391,0.384-1.023,0-1.414s-1.005-0.391-1.389,0l-7.86,8    c-0.384,0.391-0.384,1.023,0,1.414C16.725,28.902,16.977,29,17.228,29z" />
        </svg>
      </span>
    </div>
  );
};

export default Navbar;
