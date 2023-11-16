import classNames from "classnames";
import Card from "components/Card";
import Link from "components/Link";
import ProjectCard from "components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="pt-8 pb-16 space-y-4">
      <span className="text-2xl">Projects</span>
      <div
        className={classNames(
          "w-full flex flex-col gap-12",
          "md:justify-between md:flex-row rounded"
        )}
      >
        <Card>
          <div className="space-y-4">
            <ProjectCard>
              <ProjectCard.Img
                className="max-w-lg aspect-video"
                src="https://i.ibb.co/4Fx6vfd/Screenshot-from-2023-04-25-15-38-44.png"
                alt="findFlix"
              />
              <ProjectCard.Description>
                A simple movie catalogue that offers a wide selection of titles,
                powered by TMDB. Whether you are looking for the latest
                blockbusters or timeless classics, you are sure to find
                something that fits your interests on our platform.
              </ProjectCard.Description>
            </ProjectCard>
            <div className="space-x-4">
              <Link href="http://find-flix.vercel.app/">Live</Link>
              <Link href="https://github.com/atulsmania/findFlix/">Github</Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
