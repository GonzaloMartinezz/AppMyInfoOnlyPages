import React from 'react';
import { motion } from 'framer-motion';
import { Box, MousePointer2, Palette, Monitor, ArrowRight } from 'lucide-react';
import screen1 from '../assets/screen1.png';
import screen2 from '../assets/screen2.png';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';

const steps = [
  { 
    icon: <Box size={24} />, 
    title: "Ideation,", 
    desc: "Tore ctimne cloeck roithit inootche threg coltus emveenoo.",
    img: screen1 
  },
  { 
    icon: <MousePointer2 size={24} />, 
    title: "Wireframing,", 
    desc: "Tinentihle cnh aurinc riftodtheichidambar velockneyrom drican.",
    img: screen2 
  },
  { 
    icon: <Palette size={24} />, 
    title: "UI Design,", 
    desc: "Buoone tart the beatine ritalent oretintelso deprs daticoileaving.",
    img: screen3 
  },
  { 
    icon: <Monitor size={24} />, 
    title: "Development", 
    desc: "Pain daithe bonding ncomocio acthare oicienit orites.",
    img: screen4 
  }
];

const Process = () => {
  return (
    <section id="proceso" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="container">
        
        {/* Step Icons & Titles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ marginBottom: '1.5rem', color: '#6366f1' }}>{step.icon}</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4', maxWidth: '200px' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline dots & Line */}
        <div style={{ position: 'relative', height: '60px', display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: '#e5e7eb', zIndex: 0 }}></div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            {steps.map((_, i) => (
              <div key={i} style={{ width: '16px', height: '16px', background: '#6366f1', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 1px #6366f1' }}></div>
            ))}
          </div>
        </div>

        {/* Mobile Screens */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '8rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                background: 'white', 
                padding: '1rem', 
                borderRadius: '40px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                border: '1px solid #f3f4f6'
              }}
            >
              <img src={step.img} alt={step.title} style={{ width: '100%', borderRadius: '32px', display: 'block' }} />
            </motion.div>
          ))}
        </div>

        {/* Footer Text & Button */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1', marginBottom: '3rem' }}>
            Turn your ideas into <br /> functional apps— <br /> Learn the steps
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-black"
            style={{ 
              background: '#6366f1', 
              padding: '1.5rem 4rem', 
              fontSize: '1.2rem', 
              borderRadius: '100px',
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
            }}
          >
            Learn the steps
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Process;
