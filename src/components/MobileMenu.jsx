

import { useTheme } from "../context/ThemeContext";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  const { theme, toggleTheme } = useTheme();


  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
      <a
        href="#design"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Design
      </a>

      <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className={`p-2 border rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 
              transition-all duration-300
               ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }   `}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
    </div>
  );
};
