import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '999',
    features: ['Diseño UI Base', '3 Secciones', 'Optimización SEO', 'Responsive Design', 'Soporte 30 días']
  },
  {
    name: 'Business',
    price: '2499',
    popular: true,
    features: ['Diseño Premium', 'Proceso Completo', 'Animaciones Avanzadas', 'CMS Integrado', 'Estrategia de Conversión', 'Soporte 90 días']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Apps Complejas', 'Lógica de Datos', 'Infraestructura Scalable', 'UX Research Dedicado', 'Mantenimiento Anual']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '10rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3.5rem' }}>Modelos de Inversión</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem' }}>Planes diseñados para cada etapa de tu negocio.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-white"
              style={{ 
                padding: '4rem 3rem', 
                position: 'relative', 
                border: tier.popular ? '2px solid var(--accent-purple)' : '1px solid #eee',
                background: tier.popular ? 'white' : 'transparent'
              }}
            >
              {tier.popular && (
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--accent-purple)', color: 'white', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800' }}>MÁS POPULAR</div>
              )}
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{tier.name}</h3>
              <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>
                {tier.price !== 'Custom' && <span style={{ fontSize: '1.5rem' }}>$</span>}
                {tier.price}
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                {tier.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    <Check size={18} color="var(--accent-purple)" /> {f}
                  </li>
                ))}
              </ul>

              <button className="btn-black" style={{ width: '100%', justifyContent: 'center', background: tier.popular ? 'var(--accent-purple)' : 'black' }}>
                Seleccionar Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
