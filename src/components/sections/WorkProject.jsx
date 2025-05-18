import React from 'react'
import { RevealOnScroll } from "../RevealOnScroll";
import Project from "../sub-component/ProjectObject";
import workProjectData from '../../assets/work-project.json'

function WorkProject() {
  return (
    <section
      id="work-projects"
      className="min-h-screen flex items-center justify-center py-[8rem]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-[4rem] bg-gradient-to-r text-primary bg-clip-text text-center">
            Work Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workProjectData.map((items, index) => (
              <Project key={index} {...items} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default WorkProject