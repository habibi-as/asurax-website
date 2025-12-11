// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import useLenis from "./hooks/useLenis";

import AsuraxMenuHorizontal from "./components/Bits/AsuraxMenuHorizontal.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SplashCursor from "./components/Bits/SplashCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Intro from "./pages/Intro/Intro.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Gaming from "./pages/Gaming/Gaming.jsx";
import GamingIntro from "./pages/Gaming/GamingIntro.jsx";
import Video from "./pages/Video/Video.jsx";
import Sound from "./pages/Sound/Sound.jsx";
import Music from "./pages/Music/Music.jsx";
import Photo from "./pages/Photo/Photo.jsx";
import Docs from "./pages/Docs/Docs.jsx";
import Website from "./pages/Website/Website.jsx";

// ASURAX: Page transition variants
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function App() {
  const location = useLocation();
  
  // Initialize Lenis for smooth scrolling
  useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, []);

  // Hide footer on Intro and Home pages
  const hideFooter = location.pathname === "/" || location.pathname === "/home";

  return (
    <div>
      <ScrollToTop />
      <AsuraxMenuHorizontal />

      {/* ⭐ ADD LIQUID ETHER CURSOR EFFECT HERE */}
      <SplashCursor />

      {/* ASURAX: Smooth page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gaming-intro" element={<GamingIntro />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/video" element={<Video />} />
            <Route path="/sound" element={<Sound />} />
            <Route path="/music" element={<Music />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/website" element={<Website />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {!hideFooter && <Footer />}
    </div>
  );
}
