import Header from "@/components/Header";
import Intro from "@/containers/Intro";
import { TooltipProvider } from "@/components/ui/tooltip";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { setCurrentTheme, skills } from "@/lib/utils";
import Footer from "@/components/Footer";
import About from "@/containers/About";
import { Analytics } from "@vercel/analytics/react";
import { Fragment, useLayoutEffect } from "react";
import Projects from "./containers/Projects";
import Cursor from "./components/ui/cursor";

const App = () => {
  useLayoutEffect(() => {
    setCurrentTheme();
  }, []);

  return (
    <Fragment>
      <TooltipProvider>
        <main className="px-4 mx-auto space-y-20 max-w-7xl">
          <Cursor />
          <Header />
          <Intro />
          <InfiniteMovingCards
            direction="left"
            speed="slow"
            pauseOnHover={false}
            items={skills}
          />
          <Projects />
          <About />
          <Footer />
        </main>
      </TooltipProvider>
      <Analytics />
    </Fragment>
  );
};

export default App;
