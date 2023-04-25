import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Main from "./containers/Main";
import Projects from "./containers/Projects";
import "./App.css";
import classNames from "classnames";

const App = () => {
  return (
    <div
      className={classNames(
        "min-h-screen bg-black text-slate-300",
        "font-mono md:px-32 px-4 tracking-widest text-neutral-400"
      )}
    >
      <Header />
      <Main />

      <div className="h-[1px] mt-8 bg-slate-50/20 w-full rounded" />

      <Projects />
      <BottomNav />
    </div>
  );
};

export default App;
