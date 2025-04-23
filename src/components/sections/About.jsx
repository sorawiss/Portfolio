import { RevealOnScroll } from "../RevealOnScroll";
import Skill from "../sub-component/Skill";

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
      className="min-h-screen flex items-center justify-center py-[8rem]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r text-primary bg-clip-text text-center">
            {" "}
            Who I am
          </h1>

          <div className="rounded-xl p-8 border-primary/20 border hover:-translate-y-1 transition-all hover:border-primary/60 ">
            <p className="text-primary/70 mb-6 text-center ">
            Second-year student in Computer Science and Political Science with interests in engineering, user experience design, social 
            sciences, and psychology. Passionate about understanding how people interact with technology, and designing systems that 
            are both technically sound and human-centered.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div> */}
          </div>

          <div className="flex flex-col mt-8">
            <div className="p-6 rounded-xl border-primary/0 border">
              <h3 className="text-xl font-bold mb-4">Education </h3>
              <ul className="list-disc list-inside text-primary/60 space-y-2">
                <li>
                  <strong> Computer Science </strong> second year at Thammasat University <strong>GPA 3.66</strong> 
                </li>
                <li>
                  <strong> Political Science </strong> second year at Ramkhamhaeng University <strong>GPA 3.71</strong> 
                </li>
                <li>
                  Princess Chulabhorn Science High School (2017-2023) <strong>GPA 3.57</strong> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
