import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    // Initialize Lenis with smooth scrolling settings
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      lerp: 0.08,
      wheelMultiplier: 1.2,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
    });

    // Start the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis instance
    return () => {
      lenis.destroy();
    };
  }, []);
}
