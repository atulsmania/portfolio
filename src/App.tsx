import Header from "@/components/Header";
import Intro from "@/containers/Intro";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import ShrinkableCard from "./components/ui/shrinkable-card";
import Section from "./components/Section";
import Skills from "./containers/Skills";

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
      <TooltipProvider>
        <ParallaxBackground />
        <Cursor />
        <main className="w-full mx-auto max-w-7xl">
          <Header />
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </main>
      </TooltipProvider>
      <Analytics />
    </Fragment>
  );
};

export default App;
