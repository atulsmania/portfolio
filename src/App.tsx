import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Main from "./containers/Main";
import Projects from "./containers/Projects";
import classNames from "classnames";
import TechStack from "./containers/TechStack";
import "./App.css";

const App = () => {
  return (
    <div
      className={classNames(
        "min-h-screen bg-black text-slate-300 space-y-16",
        "font-mono md:px-32 px-4 tracking-widest text-neutral-400"
      )}
    >
      <div>
        <Header />
        <Main />
      </div>

      <TechStack />

      <div>
        <Projects />
        <BottomNav />
      </div>
    </div>
  );
};

export default App;
