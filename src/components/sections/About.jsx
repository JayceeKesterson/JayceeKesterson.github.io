import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "React", "Bootstrap", "TypeScript", "TailwindCSS"];
  const backendSkills = ["NodeJS", "MongoDB", "Express", "SQL", "MYSQL", "PHP"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent leading-right text-center cursor-default">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:bg-pink-200/70 cursor-default hover:shadow-xl">
            <p className="text-black mb-6 cursor-default">
              I am passionate about game development and I deeply enjoy the
              process of creating games and websites. The process of creating a
              game including the debugging and rewriting process entertains me.
              I enjoy creating unique websites for personal or work use.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-black mb-4 cursor-default">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-black mb-4 cursor-default">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:bg-pink-200/70 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-black cursor-default">
                Education
              </h3>
              <ul className="list-disc list-inside text-black space-y-2 cursor-default ">
                <strong> West-Mec Coding Program 2023 - 2025</strong>
                <li>
                  Two-year college level programming class with 900 hours
                  working hands-on in modern programming and web development
                  building front-end, server-side, and full-stack applications
                </li>
                <li>
                  Learned latest industry technologies and trends from certified
                  instructors and guest speakers in the computer science career
                  field
                </li>
                <strong>Millennium High School 2021 - 2025</strong>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:bg-pink-200/70 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-black cursor-default">
                Work Experience
              </h3>
              <div className="space-y-4 text-black cursor-default">
                <div>
                  <h4 className="font-semibold">
                    Oil & Gas | Cashier May 2023 - August 2023
                  </h4>
                  <p>
                    Managed cash drawer according to company financial
                    policies. Assisted customers with exceptional customer
                    service skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (2018)
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    APIs
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
