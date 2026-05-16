import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Zap, Layout, Monitor, Cpu } from 'lucide-react';
import mainImg from '../assets/web_hero_main.png';
import secImg from '../assets/web_hero_sec.png';

const BentoHero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bento-hero" style={{ padding: '2rem', background: '#fff', minHeight: '100vh', marginBottom: '4rem', overflow: 'visible' }}>
      
      {/* Top Navbar Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '1rem 2.5rem', background: '#f8f8f8', borderRadius: '30px', border: '1px solid #eee' }}>
        <div style={{ fontWeight: '900', fontSize: '1.4rem', lineHeight: '1', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          FRONTEND<br/><span style={{ color: 'var(--accent-purple)' }}>VISION</span>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <motion.span onClick={() => scrollToSection('process')} whileHover={{ color: 'var(--accent-purple)', y: -2 }} style={{ cursor: 'pointer', transition: '0.3s' }}>Services</motion.span>
          <motion.span onClick={() => scrollToSection('bento-features')} whileHover={{ color: 'var(--accent-purple)', y: -2 }} style={{ cursor: 'pointer', transition: '0.3s' }}>Dashboards</motion.span>
          <motion.span onClick={() => scrollToSection('case-study')} whileHover={{ color: 'var(--accent-purple)', y: -2 }} style={{ cursor: 'pointer', transition: '0.3s' }}>Case Studies</motion.span>
          <motion.span onClick={() => scrollToSection('contact')} whileHover={{ color: 'var(--accent-purple)', y: -2 }} style={{ cursor: 'pointer', transition: '0.3s' }}>Contact</motion.span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input type="text" placeholder="Search project" style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '15px', border: '1px solid #eee', fontSize: '0.85rem', width: '200px' }} />
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: 'black', color: 'white', padding: '0.7rem 1.8rem', borderRadius: '14px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', cursor: 'pointer' }}>Login</motion.button>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '1.5rem', minHeight: '850px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Slogan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ flex: 2, background: '#f1f1f1', borderRadius: '48px', padding: '5rem', position: 'relative', overflow: 'hidden', border: '1px solid #eee' }}
          >
            <motion.div 
              animate={{ rotate: [0, 360] }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.05, pointerEvents: 'none' }}
            >
              <Cpu size={450} />
            </motion.div>

            <h1 style={{ fontSize: '7vw', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
              For <ArrowRight size={70} style={{ verticalAlign: 'middle', margin: '0 1rem', color: 'var(--accent-purple)' }} /> <br />
              Visionaries but <br />
              not just anyone
            </h1>
            <p style={{ maxWidth: '480px', fontSize: '1.25rem', color: '#666', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              Transforming complex technical ideas into high-performance, high-conversion digital ecosystems. We build the future of the web.
            </p>
          </motion.div>

          {/* Small Cards Row */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.02, y: -5 }}
               transition={{ delay: 0.2 }}
               onClick={() => scrollToSection('features')}
               style={{ background: '#000', borderRadius: '48px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
             >
               <img src={secImg} alt="Frontend" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
               <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: 'white' }}>
                  <Layout size={32} style={{ marginBottom: '1rem', color: 'var(--accent-purple)' }} />
                  <span style={{ fontWeight: '900', fontSize: '1.6rem', textTransform: 'uppercase' }}>#FRONTEND</span>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.02, y: -5 }}
               transition={{ delay: 0.3 }}
               onClick={() => scrollToSection('features')}
               style={{ background: '#222', borderRadius: '48px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
             >
               <img src={secImg} alt="Backend" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(1) brightness(0.5)' }} />
               <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: 'white' }}>
                  <Monitor size={32} style={{ marginBottom: '1rem', color: 'var(--accent-purple)' }} />
                  <span style={{ fontWeight: '900', fontSize: '1.6rem', textTransform: 'uppercase' }}>#BACKEND</span>
               </div>
             </motion.div>
          </div>
        </div>

        {/* Right Column (Large Visual Card) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ borderRadius: '48px', overflow: 'hidden', position: 'relative', background: '#000' }}
        >
          <img src={mainImg} alt="Main Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          
          {/* Overlay Buttons */}
          <div style={{ position: 'absolute', bottom: '3.5rem', left: '3.5rem', right: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2 }}>
             <div style={{ display: 'flex', gap: '0.8rem' }}>
                <motion.button 
                  whileHover={{ scale: 1.05, background: 'var(--accent-purple)', color: 'white' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('case-study')}
                  style={{ background: '#fff', color: '#000', padding: '1.2rem 2.5rem', borderRadius: '100px', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', transition: '0.3s', cursor: 'pointer' }}
                >
                  View Case Studies
                </motion.button>
                <div style={{ width: '56px', height: '56px', background: '#000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Zap size={24} />
                </div>
             </div>
             
             <motion.button 
               whileHover={{ scale: 1.05, borderColor: 'var(--accent-purple)' }}
               whileTap={{ scale: 0.95 }}
               onClick={() => scrollToSection('contact')}
               style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)', color: '#fff', padding: '1.2rem 2.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: '0.3s', cursor: 'pointer' }}
             >
               Start Project <div style={{ width: '24px', height: '24px', background: 'var(--accent-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><ArrowRight size={14} /></div>
             </motion.button>
          </div>

          <div style={{ position: 'absolute', top: '50%', right: '5rem', transform: 'translateY(-50%)', zIndex: 2 }}>
            <motion.div 
              animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              style={{ width: '130px', height: '130px', borderRadius: '50%', border: '2px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '1.1rem', textAlign: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', boxShadow: '0 0 50px rgba(99, 102, 241, 0.4)', cursor: 'pointer' }}
              onClick={() => scrollToSection('contact')}
            >
               HIRE<br/>US
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoHero;
