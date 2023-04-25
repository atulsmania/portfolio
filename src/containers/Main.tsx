import classNames from "classnames";

const Main = () => {
  return (
    <main
      id="about"
      className={classNames(
        "font-sans flex flex-wrap flex-col justify-end gap-12",
        "md:justify-between md:items-end md:gap-0 md:flex-row",
        " min-h-[calc(100vh-100px)]"
      )}
    >
      <div className="md:max-w-2xl w-full space-y-2">
        <h2 className="md:text-xl text-lg">
          Hi there! I'm a frontend developer with two years of experience under
          my belt. I'm really comfortable working with React, TypeScript, and
          Tailwind, and I've used them to create some really cool web
          applications.
        </h2>
        <h1 className="md:text-9xl font-bold text-5xl break-words">
          <span>Frontend</span>
          <br />
          <span>Hashira</span>
        </h1>
      </div>
      <div className="font-normal text-xl md:text-end">
        <span className="text-2xl">Atul Chauhan</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/atulsmania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg
                enableBackground="new 0 0 512 512"
                className="w-6"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    clipRule="evenodd"
                    d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                    className="fill-neutral-400"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/atul-14-chauhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg
                viewBox="0 0 512 512"
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <path
                  d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
                  style={{ fillRule: "nonzero" }}
                  className="fill-neutral-400"
                />
              </svg>
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=atul14ac@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400/50"
          >
            <span>atul14ac@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
