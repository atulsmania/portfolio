import Section from "@/components/Section";
import WebsiteIcon from "@/components/WebsiteIcon";

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
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
    </Section>
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
    <div className="flex items-center gap-4 py-8 ml-4 transition-colors duration-500 border-b-2 group">
      <h2 className="text-4xl font-bold md:text-7xl dark:text-neutral-200">
        <span>{organization}</span>
      </h2>

      <span className="block w-12 h-1 transition-transform duration-700 origin-left bg-white rounded-full group-hover:scale-x-150" />
      <p className="relative transition-all duration-700 md:text-lg group-hover:translate-x-8">
        {duration.from} - {duration.to}
      </p>
    </div>
  );
};

export default Experience;
