import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import BentoHero from './components/BentoHero';
import BentoFeatures from './components/BentoFeatures';
import HorizontalProcess from './components/HorizontalProcess';
import MusicFeature from './components/MusicFeature';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import BentoGrid from './components/BentoGrid';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }, []);

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ 
        scaleX, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '4px', 
        background: 'var(--accent-orange)', 
        transformOrigin: '0%',
        zIndex: 2000
      }} />

      {/* Old Navbar hidden for new BentoHero header */}
      {/* <Navbar /> */}
      
      <main id="home">
        <BentoHero />
        <BentoFeatures />
        <HorizontalProcess />
        <MusicFeature />
        
        {/* Other sections below */}
        <Features />
        <Process />
        <CaseStudy />
        <BentoGrid />
        <Pricing />
        <FAQ />
        <Contact />
        
        <footer style={{ padding: '6rem 0', textAlign: 'center', background: 'white' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
            © 2026 FRONTEND VISION — ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
