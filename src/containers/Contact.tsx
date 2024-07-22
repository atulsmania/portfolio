import Section from "@/components/Section";
import TextProgress from "@/components/ui/text-progress";

const connect = ["LinkedIn", "Twitter", "GitHub", "Email", "Resume"];

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col justify-between text-6xl font-bold md:text-8xl dark:text-neutral-300">
        {connect.map((c, i) => (
          <TextProgress key={i}>{c}</TextProgress>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
