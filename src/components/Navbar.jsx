import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next'; // Import the hook

import LanguageSwitcher from "./LanguageSwitcher";


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation(); // Use the hook

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

          {/* Hamburger Menu Icon - Consider using an SVG icon library */}
          <button
            aria-label="Toggle menu"
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-primary text-2xl" // Style the button
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {/* Use the t function for translations */}
            <a
              href="#home"
              className="text-primary hover:text-white transition-colors"
            >
              {t('navbar.home')}
            </a>
            <a
              href="#about"
              className="text-primary hover:text-white transition-colors"
            >
              {t('navbar.about')}
            </a>
            <a
              href="#projects"
              className="text-primary hover:text-white transition-colors"
            >
              {t('navbar.projects')}
            </a>
            <a
              href="#design"
              className="text-primary hover:text-white transition-colors"
            >
              {t('navbar.design')}
            </a>

            <LanguageSwitcher />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border rounded cursor-pointer bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500
              transition-all duration-300 "
            >
              {theme === 'light' ? `🌑 ${t('navbar.theme.dark')}` : `☀️ ${t('navbar.theme.light')}`}

            </button>

            

          </div>
        </div>
      </div>
    </nav>
  );
};
