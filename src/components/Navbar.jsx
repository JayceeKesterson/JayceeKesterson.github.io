import { useEffect } from "react";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-pink-100 border-b border-white/10 shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="font-mono text-xl font-bold text-black cursor-default">
            Jaycee<span className="text-rose-400">.tech</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-15 font-bold text-md">
            <a
              href="#home"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
