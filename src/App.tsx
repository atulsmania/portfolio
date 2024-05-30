import Header from "@/components/Header";
import Intro from "@/containers/Intro";
import Experience from "@/containers/Experience";
import { TooltipProvider } from "@/components/ui/tooltip";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/lib/utils";
import Footer from "@/components/Footer";
import About from "@/containers/About";

const App = () => {
  return (
    <TooltipProvider>
      <Header />
      <Intro />
      <div className="mt-16 lg:mt-32" />
      <InfiniteMovingCards
        direction="left"
        speed="slow"
        pauseOnHover={false}
        items={skills}
      />
      <Experience />
      <About />
      <Footer />
    </TooltipProvider>
  );
};

export default App;
