import React from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, Music } from 'lucide-react';
import nebulaImg from '../assets/nebula_music.png';

const MusicFeature = () => {
  return (
    <section id="music-feature" style={{ height: '100vh', background: 'linear-gradient(to bottom, #ff5722, #e91e63)', color: 'white', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background Text Overlay */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <h2 style={{ fontSize: '30vw', fontWeight: '900', opacity: 0.1, letterSpacing: '-0.05em', textTransform: 'uppercase' }}>NEBULA</h2>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', opacity: 0.8, fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>
                <span>UI/UX <br/> Mobile App</span>
                <span>Category <br/> Music App</span>
                <span>Project Duration <br/> 4 Weeks</span>
             </div>

             <h2 style={{ fontSize: '8vw', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '4rem', textTransform: 'uppercase' }}>
               The future of <br /> music listening <br /> experience
             </h2>

             <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <p style={{ maxWidth: '400px', fontSize: '1.4rem', lineHeight: '1.5', opacity: 0.9 }}>
                  Redefines what a music app can be—transforming passive listening into an immersive, interactive experience.
                </p>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <Music size={32} />
                </motion.div>
             </div>
          </motion.div>

          {/* Right Content (Hand + Phone) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
             <img src={nebulaImg} alt="Nebula App" style={{ width: '130%', transform: 'translateX(-10%)' }} />
             
             {/* Floating Controls */}
             <div style={{ position: 'absolute', bottom: '10%', right: '-10%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[SkipBack, Play, SkipForward].map((Icon, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, background: 'white', color: 'black' }}
                    style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default MusicFeature;
