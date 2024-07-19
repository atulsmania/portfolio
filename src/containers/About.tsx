import Section from "@/components/Section";
import TextProgress from "@/components/ui/text.progress";

const About = () => {
  return (
    <Section id="about-me" title="About">
      <div className="max-w-5xl">
        <p className="mt-4 mb-2 text-xl md:text-3xl text-neutral-500 dark:text-neutral-500">
          Hello! I'm Atul Chauhan, a passionate frontend developer with over
          three years of experience crafting engaging, user-friendly digital
          experiences. My journey in tech began with a fascination for the way
          code could be transformed into dynamic, interactive websites. This
          curiosity sparked a dedication to mastering the latest frontend
          development tools and technologies.
        </p>
      </div>
    </Section>
  );
};

export default About;
