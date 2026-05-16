import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: '¿Qué tecnologías utilizas?', a: 'Principalmente React, Vite y Framer Motion para el frontend. Esto garantiza aplicaciones extremadamente rápidas y con una experiencia de usuario fluida.' },
  { q: '¿Cómo es el proceso de contacto?', a: 'Iniciamos con una reunión estratégica para entender tus objetivos. Luego pasamos a wireframes, diseño visual y finalmente el desarrollo.' },
  { q: '¿Entregas el código fuente?', a: 'Sí, todo el código fuente es tuyo al finalizar el proyecto. Trabajamos de forma transparente con repositorios compartidos.' },
  { q: '¿Das soporte post-lanzamiento?', a: 'Absolutamente. Todos mis planes incluyen un periodo de soporte y mantenimiento para asegurar que todo funcione perfecto.' }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3.5rem' }}>Preguntas Frecuentes</h2>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((f, i) => (
            <div key={i} className="glass-white" style={{ overflow: 'hidden', border: '1px solid #eee' }}>
              <button 
                onClick={() => setActive(active === i ? null : i)}
                style={{ width: '100%', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>{f.q}</span>
                {active === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ padding: '0 2rem 2rem 2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
