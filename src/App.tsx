import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Main from "./containers/Main";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-mono md:px-32 px-12 pb-4 tracking-widest">
      <Header />
      <Main />
      <div className="h-[1px] mt-8 bg-slate-50/20 w-full rounded" />

      <div className="mt-4">
        <h2 className="text-2xl pt-4">Projects</h2>
        <div className="w-full flex md:flex-row flex-col gap-12 rounded">
          <Card>
            <div className="w-full rounded bg-slate-50/5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              asperiores, voluptatum odit officiis cum eius vero, aliquam omnis
              eaque beatae fugit! Saepe, quas. Dolor voluptates mollitia quos
              pariatur architecto cumque!
            </div>
          </Card>
          <Card>
            <div className="w-full rounded bg-slate-50/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              optio incidunt molestiae nulla quas voluptas sed accusantium et
              vitae. Corrupti aliquam explicabo at odio esse commodi ullam
              reprehenderit ipsa ex?
            </div>
          </Card>
        </div>
        <div className="min-h-screen"></div>
      </div>
    </div>
  );
};

export default App;
