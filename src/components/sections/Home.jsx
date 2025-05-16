import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold h-20 mb-6 bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent leading-right cursor-default">
            Hey, I'm Jaycee
          </h1>
          <p className="text-black text-lg mb-8 max-w-lg mx-auto cursor-default">
            I'm a full-stack Web Developer that has developed a multitude of
            projects working in the front-end, back-end, and with web design. I
            have worked with a small variety of languages but mostly in
            Javascript.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-rose-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#contacts"
              className="border border-rose-400 text-rose-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:bg-rose-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
