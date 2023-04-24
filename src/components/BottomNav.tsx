import classNames from "classnames";

const BottomNav = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(
            rgba(0, 0, 0, 0) 1px,
            black 1px
          )`,
        backgroundSize: "4px 4px",
      }}
      className={classNames(
        "bg-black/10 py-4 backdrop-blur-sm z-30",
        "sticky sm:hidden bottom-0 w-full"
      )}
    >
      <ul className="flex justify-evenly items-center">
        <li className="mx-4">
          <a href="/projects" className="hover:text-white">
            <svg
              enableBackground="new 0 0 128 128"
              className="w-6"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M109,43.1V42c0-5.5-4.5-10-10-10H74c-3.3,0-6-3.2-6-6.5V26c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v77  c0,5.5,4.5,10,10,10l0,0h87c5.5,0,10-4.5,10-10V53C118,47.8,114,43.6,109,43.1z M21,109c-3.3,0-6-2.7-6-6V26c0-3.3,2.7-6,6-6h37  c3.3,0,6,2.7,6,6c0,5.5,4.5,10,10,10h25c3.3,0,6,2.7,6,6v1H37c-5.5,0-10,4.5-10,10v50C27,106.3,24.3,109,21,109L21,109z M114,103  c0,3.3-2.7,6-6,6H29c1.3-1.7,2-3.8,2-6V53c0-3.3,2.7-6,6-6h71c3.3,0,6,2.7,6,6V103z"
                className="fill-slate-300"
              />
            </svg>
          </a>
        </li>
        <li className="mx-4">
          <a href="/connect" className="hover:text-white">
            <svg
              enableBackground="0 0 24 24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-300 w-6"
            >
              <g>
                <path d="M15.6,3.3c-1.4,0-2.6,0.5-3.6,1.5L9.8,7c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l2.2-2.2c1.2-1.2,3.2-1.2,4.4,0   c0.6,0.6,0.9,1.4,0.9,2.2c0,0.8-0.3,1.6-0.9,2.2l-2.2,2.2c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.2-2.2   c1-1,1.5-2.2,1.5-3.6c0-1.4-0.5-2.6-1.5-3.6C18.2,3.8,17,3.3,15.6,3.3z" />
                <path d="M8.4,11.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L4.8,12c-1,1-1.5,2.2-1.5,3.6c0,1.4,0.5,2.6,1.5,3.6c1,1,2.2,1.5,3.6,1.5   s2.6-0.5,3.6-1.5l2.2-2.2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2.2,2.2c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-0.9-1.4-0.9-2.2   c0-0.8,0.3-1.6,0.9-2.2L8.4,11.3z" />
                <path d="M9.1,14.9c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-4.3,4.3   C8.7,13.8,8.7,14.5,9.1,14.9z" />
              </g>
            </svg>
          </a>
        </li>
        <li className="mx-4">
          <a href="/about" className="hover:text-white">
            <svg
              className="w-6"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  className="fill-slate-300"
                  d="M16,17a8,8,0,1,1,8-8A8,8,0,0,1,16,17ZM16,3a6,6,0,1,0,6,6A6,6,0,0,0,16,3Z"
                />
                <path
                  className="fill-slate-300"
                  d="M23,31H9a5,5,0,0,1-5-5V22a1,1,0,0,1,.49-.86l5-3a1,1,0,0,1,1,1.72L6,22.57V26a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V22.57l-4.51-2.71a1,1,0,1,1,1-1.72l5,3A1,1,0,0,1,28,22v4A5,5,0,0,1,23,31Z"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
