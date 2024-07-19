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
    <div className="flex items-center py-4 rounded-lg">
      <WebsiteIcon domain={domain} />
      <div className="ml-4">
        <h2 className="font-medium md:text-xl">
          {designation} at <span className="font-bold">{organization}</span>
        </h2>
        <p className="text-gray-600 md:text-lg dark:text-neutral-400">
          {duration.from} - {duration.to}
        </p>
      </div>
    </div>
  );
};

export default Experience;
