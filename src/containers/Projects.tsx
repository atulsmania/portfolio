import Section from "@/components/Section";
import Link from "@/components/ui/hover-mage-link";

const Projects = () => {
  return (
    <Section id="my-projects" title="Projects">
      <Link
        imgSrc="https://i.ibb.co/xMWMfYK/quick-fill.png"
        heading="QuickFill"
        subheading="Chrome extension to quickly fill forms."
        href="https://github.com/atulsmania/quick-fill"
      />
      <Link
        imgSrc="https://i.ibb.co/RPc8zYp/find-flix.png"
        heading="FindFlix"
        subheading="Movie and TV show search engine."
        href="https://github.com/atulsmania/findflix"
      />
      <Link
        imgSrc="https://i.ibb.co/rvwMMJP/quick-font.png"
        heading="QuickFont"
        subheading="Quickly test fonts for your website."
        href="https://github.com/atulsmania/quick-font"
      />
    </Section>
  );
};

export default Projects;
