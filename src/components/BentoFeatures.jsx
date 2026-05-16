import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Globe, Code, MessageSquare } from 'lucide-react';
import techImg from '../assets/bento_feat_tech.png';
import blogImg from '../assets/bento_feat_blog.png';

const BentoFeatures = () => {
  return (
    <section id="bento-features" style={{ padding: '6rem 2rem', background: '#f4f4f4', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', background: '#ddd', borderRadius: '64px', padding: '1.2rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.2rem', boxShadow: '0 50px 100px rgba(0,0,0,0.05)' }}>
        
        {/* Left Card (Scalable Solutions) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          style={{ background: '#050505', borderRadius: '54px', padding: '5rem', color: 'white', position: 'relative', overflow: 'hidden', minHeight: '650px', cursor: 'pointer', transition: '0.4s' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', opacity: 0.6 }}>
             <div style={{ width: '12px', height: '12px', background: 'var(--accent-purple)', borderRadius: '50%' }}></div>
             <span style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise Solutions</span>
          </div>
          
          <h2 style={{ fontSize: '6.5rem', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.05em', marginBottom: '4rem' }}>
            Scalable <br /> Ecosystems <br /> for Growth
          </h2>
          
          <motion.div 
            whileHover={{ scale: 1.1, background: 'var(--accent-purple)' }}
            style={{ position: 'absolute', bottom: '4rem', left: '4rem', display: 'flex', alignItems: 'center', gap: '1.2rem', background: 'white', color: 'black', padding: '1.2rem 2.5rem', borderRadius: '24px', fontWeight: '900', fontSize: '1rem', transition: '0.3s', zIndex: 2 }}
          >
             <span>Explore Services</span>
             <BarChart3 size={24} />
          </motion.div>

          <img src={techImg} alt="Tech Visualization" style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: '70%', opacity: 0.6, mixBlendMode: 'screen', pointerEvents: 'none' }} />
        </motion.div>

        {/* Right Side Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          {/* Top Right (Blog/Insights) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 0.98 }}
            style={{ flex: 1.6, background: '#fff', borderRadius: '54px', padding: '3.5rem', position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: '0.4s' }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', color: '#aaa', letterSpacing: '0.05em' }}>Insights & Innovation</span>
                <div style={{ width: '64px', height: '64px', background: '#f5f5f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <ArrowUpRight size={32} />
                </div>
             </div>
             <h3 style={{ fontSize: '4.5rem', fontWeight: '900', marginTop: 'auto', position: 'absolute', bottom: '3.5rem', left: '3.5rem', letterSpacing: '-0.03em', zIndex: 1 }}>Tech <br/> Insights</h3>
             <img src={blogImg} alt="Abstract Blog" style={{ position: 'absolute', right: '-15%', top: '-15%', width: '80%', zIndex: 0, opacity: 0.9, mixBlendMode: 'multiply' }} />
          </motion.div>

          {/* Bottom Right Row (About & Contact) */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '1.2rem' }}>
             <motion.div 
               whileHover={{ y: -5, rotate: -1 }}
               style={{ background: 'var(--accent-purple)', borderRadius: '48px', padding: '3rem', color: 'white', position: 'relative', cursor: 'pointer', transition: '0.3s' }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <Globe size={28} />
                   <Code size={28} style={{ opacity: 0.5 }} />
                </div>
                <h3 style={{ fontSize: '2.8rem', fontWeight: '900', position: 'absolute', bottom: '3rem' }}>About Us</h3>
             </motion.div>

             <motion.div 
               whileHover={{ y: -5, rotate: 1 }}
               style={{ background: '#bef264', borderRadius: '48px', padding: '3rem', color: '#000', position: 'relative', cursor: 'pointer', transition: '0.3s' }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <MessageSquare size={28} />
                   <div style={{ width: '32px', height: '32px', background: 'rgba(0,0,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowUpRight size={18} />
                   </div>
                </div>
                <h3 style={{ fontSize: '2.8rem', fontWeight: '900', position: 'absolute', bottom: '3rem' }}>Contact</h3>
             </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoFeatures;
