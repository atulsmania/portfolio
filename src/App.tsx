import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Main from "./containers/Main";
import Projects from "./containers/Projects";
import classNames from "classnames";
import TechStack from "./containers/TechStack";
import About from "./containers/About";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className={classNames(
        "min-h-screen bg-black md:space-y-16 space-y-8",
        "font-mono md:px-32 px-4 tracking-widest text-neutral-400"
      )}
    >
      <Header />
      <Main />

      <About />
      <TechStack />

      <Projects />

      <Navbar />
      <BottomNav />
    </div>
  );
};

export default App;
