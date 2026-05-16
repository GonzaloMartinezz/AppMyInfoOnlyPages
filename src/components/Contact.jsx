import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'var(--accent)', filter: 'blur(200px)', opacity: 0.05, zIndex: -1 }}></div>

      <div className="container">
        <div className="glass" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', padding: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '900' }}>Hablemos de tu próximo paso.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
              Estoy listo para aplicar este proceso a tu negocio y escalar tu presencia digital.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <div style={{ background: 'var(--bg-card)', padding: '0.8rem', borderRadius: '12px' }}><Mail size={20} /></div>
                <span>contacto@frontendvision.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <div style={{ background: 'var(--bg-card)', padding: '0.8rem', borderRadius: '12px' }}><MapPin size={20} /></div>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nombre</label>
                <input type="text" placeholder="Tu nombre" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                <input type="email" placeholder="tu@email.com" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mensaje</label>
              <textarea placeholder="Cuéntame sobre tu proyecto..." rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}>
              Enviar Mensaje <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
