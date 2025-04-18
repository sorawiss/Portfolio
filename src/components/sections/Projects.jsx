import { RevealOnScroll } from "../RevealOnScroll";
import Skill from "../sub-component/Skill";
import Project from "../sub-component/Project";

import projectData from '../../assets/project.json'


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4  ">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r text-primary bg-clip-text text-center">
            {" "}
            Engineering & Computer Science Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((items, index) => (
              <Project key={index} {...items} />
            ))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
