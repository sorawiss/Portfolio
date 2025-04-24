import { RevealOnScroll } from "../RevealOnScroll";
// import Skill from "../sub-component/Skill"; // Assuming you might add skills back later
import { useTranslation } from 'react-i18next'; // Import the hook

export const About = () => {
  const { t } = useTranslation(); // Use the hook

  // const frontendSkills = [
  //   "React",
  //   "Vue",
  //   "TypeScript",
  //   "TailwindCSS",
  //   "Svelte",
  // ];

  // const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-[8rem]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r text-primary bg-clip-text text-center">
            {t('about.title')} {/* Translate title */}
          </h1>

          <div className="rounded-xl p-8 border-primary/20 border hover:-translate-y-1 transition-all hover:border-primary/60 ">
            <p className="text-primary/70 mb-6 text-center ">
              {t('about.description')} {/* Translate description */}
            </p>

            {/* Skills section commented out */}
          </div>

          <div className="flex flex-col mt-8">
            <div className="p-6 rounded-xl border-primary/0 border">
              <h3 className="text-xl font-bold mb-4">{t('about.educationTitle')}</h3> {/* Translate education title */}
              <ul className="list-disc list-inside text-primary/60 space-y-2">
                <li>
                  <strong>{t('about.csMajor')}</strong> {t('about.years')} {t('about.universityThammasat')} <strong>GPA 3.66</strong>
                </li>
                <li>
                  <strong>{t('about.psMajor')}</strong> {t('about.years')} {t('about.universityRamkhamhaeng')} <strong>GPA 3.71</strong>
                </li>
                <li>
                  {t('about.highSchool')} (2017-2023) <strong>GPA 3.57</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
