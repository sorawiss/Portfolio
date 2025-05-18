import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import WorkProject from "./components/sections/WorkProject";
import SmoothScrollWrapper from "./components/SoothScroll";
import Design from "./components/sections/Design";
import Footer from "./components/sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <ThemeProvider>
      <SmoothScrollWrapper>
        <div className={`min-h-screen transition-all duration-700 bg-background text-primary  `} >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          {/* <WorkProject /> */}
          <Projects />
          <Design />
          <Footer />
        </div>
      </SmoothScrollWrapper>
    </ThemeProvider>

  );
}

export default App;
