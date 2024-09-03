import Section from "@/components/Section";
import Link from "@/components/ui/hover-mage-link";

const Projects = () => {
  return (
    <Section id="my-projects" title="Projects">
      <Link
        heading="QuickFill"
        subheading="Chrome extension to quickly fill forms."
        href="https://github.com/atulsmania/quick-fill"
      />
      <Link
        heading="FindFlix"
        subheading="Movie and TV show search engine."
        href="https://github.com/atulsmania/findflix"
      />
      <Link
        heading="QuickFont"
        subheading="Quickly test fonts for your website."
        href="https://github.com/atulsmania/quick-font"
      />
    </Section>
  );
};

export default Projects;
