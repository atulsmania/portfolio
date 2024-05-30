import React from "react";

const About = () => {
  return (
    <section id="about" className="px-8 md:px-12 lg:px-32 bg-neutral-200/60">
      <div className="mx-auto max-w-7xl">
        <h4 className="text-4xl md:text-5xl">About Me</h4>
        <div className="w-20 h-1 my-3 bg-neutral-900 dark:bg-neutral-50" />
        <p className="mt-4 mb-2 md:text-xl text-neutral-500">
          Hello! I'm Atul Chauhan, a passionate frontend developer with over
          three years of experience crafting engaging, user-friendly digital
          experiences. My journey in tech began with a fascination for the way
          code could be transformed into dynamic, interactive websites. This
          curiosity sparked a dedication to mastering the latest frontend
          development tools and technologies.
        </p>
        <p className="mb-2 md:text-xl text-neutral-500">
          When I'm not building responsive web applications or optimizing site
          performance, you can find me on the basketball court.
        </p>
        <p className="md:text-xl text-neutral-500">
          I'm excited to connect with others who share my passion for frontend
          development. Let's discuss how my skills can help bring your web
          vision to life!
        </p>
      </div>
    </section>
  );
};

export default About;
