import { RevealOnScroll } from "../RevealOnScroll";
import Skill from "../sub-component/Skill";


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
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> SideJob</h3>
              <p className="text-gray-400 mb-4">
              SideJob aims to bridge the gap between employers seeking temporary workforce solutions and students or young adults looking for flexible, non-permanent employment opportunities. The application facilitates straightforward interactions through posting and responding to job opportunities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "ExpressJS", "Supabase", "Tailwind", "Render"].map((tech, key) => (
                  <Skill key={key} tech={tech} />
                ))}
              </div>


              <div className="flex gap-2 items-center">
                <a
                  href="https://sideline-rangsit-demo.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                > View Project → 
                </a>
                <a href="https://github.com/sorawiss/sidejob" >github</a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Machine Learning </h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <Skill key={key} tech={tech} />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

           
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
