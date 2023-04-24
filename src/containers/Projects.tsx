import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="pt-8 pb-16 space-y-4">
      <span className="text-2xl">Projects</span>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio
            incidunt molestiae nulla quas voluptas sed accusantium et vitae.
            Corrupti aliquam explicabo at odio esse commodi ullam reprehenderit
            ipsa ex?
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
