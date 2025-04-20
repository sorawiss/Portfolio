import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';


const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    else{
      return 'dark';
    }
  });


  
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log("Theme set to dark, class added."); // Debug log
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log("Theme set to light, class removed."); // Debug log
    }
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  const value = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
