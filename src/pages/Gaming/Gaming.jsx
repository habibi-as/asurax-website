import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Search, Menu, LogIn, User } from 'lucide-react';
import CardSwap from '../../components/ui/CardSwap.jsx';
import IntroSection from './sections/IntroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import GameAshore from './sections/GameAshore.jsx';
import GameRedOne from './sections/GameRedOne.jsx';
import GameOathHunt from './sections/GameOathHunt.jsx';
import GameSeventhChoir from './sections/GameSeventhChoir.jsx';
import GameFearAround from './sections/GameFearAround.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import PageHeaderLogo from '../../components/PageHeaderLogo.jsx';
import './Gaming.css';
import '../../components/ui/gaming-blocks.css';

export default function Gaming() {
  const [navSolid, setNavSolid] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [active, setActive] = useState('intro');

  const navigationItems = [
    { id: 'intro', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'the-last-signal', label: 'The Last Signal (Ashore)' },
    { id: 'red-one', label: 'RED01' },
    { id: 'oath-hunt', label: 'The Oath Hunt' },
    { id: 'seventh-choir', label: 'The Seventh Choir' },
    { id: 'fear-around', label: 'Fear Around' },
  ];

  const renderContent = () => {
    switch (active) {
      case 'intro':
        return <IntroSection onEnter={() => setActive('about')} />;
      case 'about':
        return <AboutSection />;
      case 'the-last-signal':
        return <GameAshore />;
      case 'red-one':
        return <GameRedOne />;
      case 'oath-hunt':
        return <GameOathHunt />;
      case 'seventh-choir':
        return <GameSeventhChoir />;
      case 'fear-around':
        return <GameFearAround />;
      default:
        return <IntroSection onEnter={() => setActive('about')} />;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
  const particleOptions = {
    fpsLimit: 60,
    particles: {
      number: { value: isMobile ? 0 : 8 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.4 },
      color: { value: ['#4f46e5', '#22d3ee', '#a855f7'] },
      opacity: { value: 0.4 },
      links: { enable: false },
    },
    background: { color: 'transparent' },
  };

  const scrollToFeatured = () => {
    const el = document.getElementById('gaming-featured');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="gaming-vr-page">
      {/* NAVBAR */}
      <header className={`gaming-nav ${navSolid ? 'gaming-nav-solid' : ''}`}>
        <div className="gaming-nav-inner">
          <div className="gaming-nav-left">
            <div className="gaming-logo">ASURAX<span> GAMING</span></div>
            <nav className="gaming-nav-links">
              <button type="button" className="gaming-nav-link" onClick={() => setActive('intro')}>Home</button>
              <button type="button" className="gaming-nav-link" onClick={() => setActive('the-last-signal')}>Games</button>
              <button type="button" className="gaming-nav-link" onClick={() => setActive('about')}>Universe</button>
              <button type="button" className="gaming-nav-link" onClick={() => setActive('red-one')}>Production</button>
              <button type="button" className="gaming-nav-link" onClick={() => setActive('fear-around')}>Gallery</button>
            </nav>
          </div>

          <div className="gaming-nav-right">
            <button type="button" className="icon-button" aria-label="Search">
              <Search size={18} />
            </button>
            <button type="button" className="gaming-auth-button">
              <User size={16} />
              <span>Sign In</span>
            </button>
            <button type="button" className="gaming-auth-button ghost">
              <LogIn size={16} />
              <span>Log In</span>
            </button>
            <button type="button" className="icon-button mobile-only" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <PageHeaderLogo />

      <main className="gaming-main">
        {/* HERO */}
        <section className="gaming-hero">
          {/* Background layers */}
          <div className="gaming-bg-base" />
          <div className="gaming-bg-texture" />
          <div className="gaming-bg-gradient" />
          <Particles id="gaming-particles" init={particlesInit} options={particleOptions} className="gaming-particles" />

          <div className="gaming-hero-inner">
            {/* Left content */}
            <motion.div
              className="gaming-hero-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="gaming-eyebrow">ASURAX STUDIOS</p>
              <h1 className="gaming-title">
                DIVE INTO
                <br />
                EPIC ADVENTURES
              </h1>
              <p className="gaming-subtitle">
                Join the ultimate gaming experience with cinematic worlds, competitive arenas,
                and story-driven universes crafted by Asurax.
              </p>

              <div className="gaming-cta-row">
                <motion.button
                  type="button"
                  className="gaming-cta primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToFeatured}
                >
                  Explore
                </motion.button>
                <motion.button
                  type="button"
                  className="gaming-cta secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setDemoOpen(true)}
                >
                  Play Demo <span className="play-icon">▶</span>
                </motion.button>
              </div>

              <div className="gaming-meta">
                <span>4+ Universes</span>
                <span>Immersive VR &amp; PC</span>
                <span>Cinematic Storytelling</span>
              </div>
            </motion.div>

            {/* Right character / progress */}
            <motion.div
              className="gaming-hero-right"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="gaming-hero-character">
                <div className="character-overlay" />
              </div>

              <div className="gaming-progress-rail">
                <span className="progress-label">01</span>
                <div className="progress-line">
                  <div className="progress-dot active" />
                  <div className="progress-dot" />
                  <div className="progress-dot" />
                  <div className="progress-dot" />
                </div>
                <span className="progress-label">04</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURED ROW */}
        <section id="gaming-featured" className="gaming-featured">
          <div className="gaming-featured-header">
            <div>
              <h2>Featured Realms</h2>
              <p>Choose your entry point into the Asurax universe.</p>
            </div>
          </div>

          <div className="gaming-featured-scroll">
            <div className="gaming-featured-row">
              {[
                {
                  title: 'VR Games',
                  description: 'Immersive first-person experiences with full spatial sound and motion.',
                },
                {
                  title: 'Esports',
                  description: 'Competitive arenas tuned for high-skill, high-intensity matches.',
                },
                {
                  title: 'Story Games',
                  description: 'Narrative-driven adventures with deep characters and branching choices.',
                },
                {
                  title: 'Console Games',
                  description: 'Optimised for gamepad, couch co-op, and cinematic living room play.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  className="gaming-card"
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                >
                  <div className="gaming-card-thumb" />
                  <div className="gaming-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button
                      type="button"
                      className="gaming-card-link"
                      onClick={scrollToFeatured}
                    >
                      Explore
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL NAVIGATION + CONTENT */}
        <section className="gaming-internal-wrapper">
          <div className="gaming-layout">
            <aside className="gaming-sidebar">
              <CardSwap
                items={navigationItems}
                active={active}
                onSelect={setActive}
              />
            </aside>

            <main className="gaming-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </section>
      </main>

      {/* DEMO MODAL */}
      {demoOpen && (
        <div className="gaming-demo-overlay" onClick={() => setDemoOpen(false)}>
          <motion.div
            className="gaming-demo-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Play Demo</h3>
            <p>This is a placeholder space for an upcoming interactive gaming demo.</p>
            <button type="button" className="gaming-cta primary" onClick={() => setDemoOpen(false)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}

