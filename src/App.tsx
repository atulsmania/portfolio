import Header from "@/components/Header";
import Intro from "@/containers/Intro";
import { setCurrentTheme } from "@/lib/utils";
import Footer from "@/components/Footer";
import About from "@/containers/About";
import { Analytics } from "@vercel/analytics/react";
import { Fragment, useLayoutEffect } from "react";
import Projects from "./containers/Projects";
import Cursor from "./components/ui/cursor";
import ParallaxBackground from "./components/ui/parallax-background";
import Lenis from "lenis";
import Contact from "./containers/Contact";

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
    <Fragment>
      <ParallaxBackground />
      <Cursor />
      <Header />
      <main className="w-full px-2 mx-auto space-y-20 font-body max-w-7xl">
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </Fragment>
  );
};

export default App;
