import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';
import heroImg from '../assets/hero_v2.png';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2.5rem' }}
            >
              <div style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)' }}>Estratega de Software & Ventas</span>
            </motion.div>

            <h1 style={{ fontSize: '10vw', fontWeight: '900', lineHeight: '0.8', marginBottom: '3rem', letterSpacing: '-0.06em', textTransform: 'uppercase' }}>
              Impulsa <br /> <span style={{ color: '#f59e0b' }}>Resultados</span> <br /> No solo Apps
            </h1>
            
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)', marginBottom: '4rem', maxWidth: '550px' }}>
              Fusiono desarrollo de alto nivel con estrategias de ventas agresivas para transformar tu visión técnica en una máquina de facturación.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-black" 
                style={{ background: '#f59e0b', color: '#000', padding: '1.5rem 3rem', fontSize: '1.1rem', fontWeight: '900' }}
              >
                Empezar Ahora <ArrowRight size={20} />
              </motion.button>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[BarChart3, TrendingUp, Zap].map((Icon, i) => (
                  <div key={i} style={{ width: '54px', height: '54px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Icon size={24} color="#f59e0b" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #f59e0b 0%, transparent 60%)', opacity: 0.1, filter: 'blur(60px)', borderRadius: '40px' }}></div>
            <img 
              src={heroImg} 
              alt="Sales Strategy Dashboard" 
              style={{ width: '120%', borderRadius: '40px', boxShadow: '0 50px 100px rgba(0,0,0,0.5)', transform: 'translateX(-10%)' }} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
