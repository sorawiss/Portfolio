import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  const { theme, toggleTheme } = useTheme();


  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-primary">
            sorawiss
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-primary hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-primary hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-primary hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#design"
              className="text-primary hove:text-white transition-colors"
            >
              {" "}
              Design{" "}
            </a>


            <button
              onClick={toggleTheme}
              className="p-2 border rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 
              transition-all duration-300 "
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};
