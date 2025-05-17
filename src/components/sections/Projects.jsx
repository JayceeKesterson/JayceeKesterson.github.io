import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">Pokemon Capstone</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">WBLA</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">Mecazon</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">Door Game</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">Soccer Game</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-rose-400 text-rose-400 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] hover:shadow-xl hover:bg-rose-500/10 transition-all">
              <h3 className="texl-xl font-bold mb-2 cursor-default">Calculator</h3>
              <p className="text-black mb-4 cursor-default">
                Scalable cloud infastructure management with real-time scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-rose-500/10 text-rose-600 py-1 px-3 rounded-full text-sm  hover:bg-rose-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-400 hover:text-rose-500/40 transition-colors my-4"
                >
                  View Project  →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
