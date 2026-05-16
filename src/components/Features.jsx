import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Shield, Smartphone, Code } from 'lucide-react';

const features = [
  { icon: <Zap color="#f59e0b" />, title: 'Velocidad Extrema', desc: 'Optimización de assets y carga perezosa para un rendimiento de 100 en Lighthouse.' },
  { icon: <Smartphone color="#6366f1" />, title: 'Mobile First', desc: 'Diseños adaptativos que se sienten como apps nativas en cualquier dispositivo.' },
  { icon: <Shield color="#10b981" />, title: 'Seguridad de Grado A', desc: 'Implementación de cabeceras de seguridad y mejores prácticas de protección de datos.' },
  { icon: <Cpu color="#ec4899" />, title: 'Lógica Compleja', desc: 'Manejo de estados globales eficientes para aplicaciones ricas en datos.' },
  { icon: <Globe color="#06b6d4" />, title: 'SEO Estratégico', desc: 'Estructura semántica que posiciona tu negocio en los primeros lugares.' },
  { icon: <Code color="#8b5cf6" />, title: 'Clean Architecture', desc: 'Código modular, escalable y fácil de mantener por cualquier equipo.' }
];

const Features = () => {
  return (
    <section id="features" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ color: 'var(--accent-purple)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.9rem' }}>CAPACIDADES</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Efectos & Implementaciones</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-white"
              style={{ padding: '3rem', border: '1px solid #eee', background: '#fafafa' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
