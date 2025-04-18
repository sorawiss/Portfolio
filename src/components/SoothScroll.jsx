// src/components/SmoothScrollWrapper.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // Smoothness (higher = smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrollWrapper;
