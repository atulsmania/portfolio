import Section from "@/components/Section";
import Link from "@/components/ui/hover-mage-link";

const Projects = () => {
  return (
    <Section id="my-projects" title="Projects">
      <Link
        imgSrc="https://usfff5r1bhta5fkn.public.blob.vercel-storage.com/project-images/quick-fill.webp"
        heading="QuickFill"
        subheading="Chrome extension to quickly fill forms."
        href="https://github.com/atulsmania/quick-fill"
      />
      <Link
        imgSrc="https://usfff5r1bhta5fkn.public.blob.vercel-storage.com/project-images/find-flix.webp"
        heading="FindFlix"
        subheading="Movie and TV show search engine."
        href="https://github.com/atulsmania/findflix"
      />
      <Link
        imgSrc="https://usfff5r1bhta5fkn.public.blob.vercel-storage.com/project-images/quick-font.webp"
        heading="QuickFont"
        subheading="Quickly test fonts for your website."
        href="https://github.com/atulsmania/quick-font"
      />
    </Section>
  );
};

export default Projects;
