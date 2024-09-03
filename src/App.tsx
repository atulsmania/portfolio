import Header from "@/components/Header";
import Intro from "@/containers/Intro";
import { setCurrentTheme } from "@/lib/utils";
import Footer from "@/components/Footer";
import About from "@/containers/About";
import { Analytics } from "@vercel/analytics/react";
import { useLayoutEffect } from "react";
import Projects from "./containers/Projects";
import Cursor from "./components/ui/cursor";
import Lenis from "lenis";
import Contact from "./containers/Contact";
import CursorContextProvider from "./context/CursorContext";
import Experience from "./containers/Experience";
import Welcome from "./containers/Welcome";

const App = () => {
  useLayoutEffect(() => {
    setCurrentTheme();

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <CursorContextProvider>
      <Cursor />
      <Header />
      <Intro />
      <Projects />
      {/* <Experience /> */}
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </CursorContextProvider>
  );
};

export default App;
