import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowUpRight, Send } from 'lucide-react';
import bentoBlog from '../assets/bento_blog.png';
import bentoProduct from '../assets/bento_product.png';

const BentoGrid = () => {
  return (
    <section id="proyectos" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gridTemplateRows: 'repeat(2, 350px)', 
          gap: '1.5rem' 
        }}>
          {/* Main Large Card - Dark */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-white"
            style={{ 
              gridColumn: 'span 2', 
              gridRow: 'span 2', 
              background: 'var(--bg-dark)', 
              color: 'white', 
              padding: '4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '1.5rem' }}>Estrategias de Impacto</p>
              <h2 style={{ fontSize: '4.5rem', lineHeight: '1', fontWeight: '900' }}>There is something <br /> else for you</h2>
            </div>
            
            <img 
              src={bentoProduct} 
              alt="Product" 
              style={{ position: 'absolute', bottom: '-10%', right: '0', width: '60%', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))' }} 
            />

            <motion.button 
              className="glass-white" 
              style={{ 
                width: 'fit-content', 
                padding: '1rem 2rem', 
                color: 'black', 
                fontWeight: '700', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              All products <ShoppingCart size={20} />
            </motion.button>
          </motion.div>

          {/* Blog Card - Abstract */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-white" 
            style={{ 
              gridColumn: 'span 2', 
              padding: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'flex-end',
              background: '#e5e7eb',
              backgroundImage: `url(${bentoBlog})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', top: '2.5rem', right: '2.5rem', background: 'white', padding: '0.8rem', borderRadius: '100px' }}>
              <ArrowUpRight size={24} />
            </div>
            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Tecnología Sensorial</p>
            <h3 style={{ fontSize: '2.5rem' }}>View our blog</h3>
          </motion.div>

          {/* About Us - Purple */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-white" 
            style={{ background: 'var(--accent-purple)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: 'white' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
               <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '700', opacity: 0.8 }}>Descubre nuestra historia</p>
               <ArrowUpRight size={24} />
            </div>
            <h3 style={{ fontSize: '2.5rem' }}>About us</h3>
          </motion.div>

          {/* Contact Us - Lime */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-white" 
            style={{ background: 'var(--accent-lime)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: 'var(--bg-dark)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
               <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '700', opacity: 0.8 }}>¿Tienes preguntas?</p>
               <Send size={24} />
            </div>
            <h3 style={{ fontSize: '2.5rem' }}>Contact us</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
