import { RevealOnScroll } from "../RevealOnScroll";
import Skill from "../sub-component/skill";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r text-primary bg-clip-text text-center">
            {" "}
            About Me
          </h1>

          <div className="rounded-xl p-8 border-primary/10 border hover:-translate-y-1 transition-all">
            <p className="text-primary/70 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <Skill key={index} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <Skill key={key} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="p-6 rounded-xl border-primary/0 border">
              <h3 className="text-xl font-bold mb-4">Education </h3>
              <ul className="list-disc list-inside text-primary/70 space-y-2">
                <li>
                  <strong> Computer Science </strong> second year at Thammasat University GPA 3.66
                </li>
                <li>
                  <strong> Political Science </strong> second year at Ramkhamhaeng University GPA 3.7
                </li>
                <li>
                  Princess Chulabhorn Science High School (2017-2023) GPA 3.57
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-primary/0 border">
              <h3 className="text-xl font-bold mb-4">Work Experience </h3>
              <div className="space-y-4 text-primary/70">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
