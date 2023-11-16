import Card from "components/Card";
import Timeline from "components/Timeline";

const About = () => {
  return (
    <Timeline>
      <Card>
        <Timeline.Item align="left" year="2020">
          <div className="p-4 font-medium rounded md:p-8 bg-neutral-400/10">
            <h2 className="text-2xl font-bold">B.Tech - Computer Science</h2>
            <h3 className="text-xl">ABES Engineering College</h3>

            <div className="mt-8 text-md">
              Published a research paper on traffic congestion problems and ways
              to solve it. The paper covered topics such as the causes of
              traffic congestion, and possible solutions to reduce congestion.
              Built a small chat application as well as focused on solving Data
              Structures and Algorithms (DSA) problems using Java.
            </div>
          </div>
        </Timeline.Item>
      </Card>
      <Card>
        <Timeline.Item align="right" year="2021">
          <div className="p-4 font-medium rounded md:p-8 bg-neutral-400/10">
            <h2 className="text-2xl font-bold">Frontend Developer</h2>
            <h3 className="text-xl">Datasigns Technologies - MyShubhLife</h3>

            <div className="mt-8 text-md">
              Built and managed a custom web component library using compound
              pattern, resulting in a 30% reduction in development time for new
              projects. Investigation of app optimization techniques and SPA
              ﬂexibility for better UX when oﬄine. Managed a team of 3 frontend
              developers, providing guidance and mentoring to improve their
              skills and productivity.
            </div>
          </div>
        </Timeline.Item>
      </Card>
    </Timeline>
  );
};

export default About;
