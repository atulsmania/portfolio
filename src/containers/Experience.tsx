import WebsiteIcon from "@/components/WebsiteIcon";
import { Button } from "@/components/ui/button";
import { LuExternalLink } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-8 md:pt-16 md:px-12 lg:px-32 bg-neutral-200/60"
    >
      <div className="flex flex-col w-full gap-6 mx-auto max-w-7xl md:gap-0 md:flex-row">
        <section className="w-full md:space-y-6">
          <h4 className="text-4xl md:text-5xl">Work Experience</h4>
          <div className="w-20 h-1 my-3 bg-neutral-900" />

          <div className="flex flex-col gap-2 md:gap-6">
            <ExperienceCard
              domain="joinfleek.com"
              designation="Software Engineer"
              organization="Fleek"
              duration={{ from: "January 2024", to: "Present" }}
            />
            <ExperienceCard
              domain="flipkart.com"
              designation="UI Engineer"
              organization="Flipkart"
              duration={{ from: "May 2023", to: "December 2023" }}
            />
            <ExperienceCard
              domain="myshubhlife.com"
              designation="Frontend Developer"
              organization="MyShubhLife"
              duration={{ from: "August 2021", to: "April 2023" }}
            />
          </div>
        </section>
        <section className="w-full md:space-y-6">
          <h4 className="text-4xl md:text-5xl">Personal Projects</h4>
          <div className="w-20 h-1 my-3 bg-neutral-900" />
          <div className="flex flex-col gap-2 md:gap-6">
            <ProjectCard
              title="QuickFill"
              description="Chrome extension to quickly fill forms."
              link="https://github.com/atulsmania/QuickFill"
            />

            <ProjectCard
              title="FindFlix"
              description="Movie and TV show search engine."
              link="https://github.com/atulsmania/findflix"
              domain="find-flix.vercel.app"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

type ExperienceCardProps = {
  domain?: string;
  designation: string;
  organization: string;
  duration: { from: string; to: string };
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const { designation, domain, duration, organization } = props;

  return (
    <div className="flex items-center py-4 rounded-lg">
      <WebsiteIcon domain={domain} />
      <div className="ml-4">
        <h2 className="font-medium md:text-xl">
          {designation} at <span className="font-bold">{organization}</span>
        </h2>
        <p className="text-gray-600 md:text-lg">
          {duration.from} - {duration.to}
        </p>
      </div>
    </div>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  domain?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, link, domain } = props;

  return (
    <div className="flex items-center py-4 rounded-lg">
      <div className="w-10 h-10 bg-white rounded-lg">
        <WebsiteIcon domain={domain} />
      </div>
      <div className="flex-1 ml-4">
        <h2 className="w-full text-xl font-medium">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div>
        <Button
          className="ml-auto"
          variant="link"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <Tooltip>
            <TooltipTrigger>
              <LuExternalLink size={24} />
            </TooltipTrigger>
            <TooltipContent>Open Link</TooltipContent>
          </Tooltip>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
