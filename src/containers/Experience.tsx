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
  const { duration, organization } = props;

  return (
    <div className="flex items-center justify-between gap-4 py-4 overflow-hidden transition-colors duration-500 group">
      <h2 className="text-4xl font-bold md:font-bold md:text-7xl dark:text-neutral-200">
        <span>{organization}</span>
      </h2>

      <p className="relative transition-all duration-700 md:text-lg group-hover:translate-x-8">
        {duration.from} - {duration.to}
      </p>
    </div>
  );
};

export default Experience;
