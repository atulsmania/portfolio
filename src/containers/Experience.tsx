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
    <div className="flex items-center py-6 group">
      <div className="ml-4 transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50">
        <h2 className="font-bold md:text-6xl">
          <span className="font-bold">{organization}</span>
        </h2>
        <p className="md:text-lg">
          {duration.from} - {duration.to}
        </p>
      </div>
    </div>
  );
};

export default Experience;
