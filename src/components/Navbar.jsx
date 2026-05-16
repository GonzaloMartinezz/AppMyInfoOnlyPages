import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav style={{
      width: '100%',
      padding: '1.5rem 0',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ width: '32px', height: '32px', background: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)' }}>
             <div style={{ width: '12px', height: '12px', border: '2px solid white', borderRadius: '3px' }}></div>
          </div>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-0.05em' }}>Cealolu</span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Home', 'Features', 'Pricing', 'Contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{ 
                color: i === 0 ? 'var(--accent-purple)' : '#111', 
                textDecoration: 'none', 
                fontSize: '1rem', 
                fontWeight: '600',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'}
              onMouseLeave={(e) => e.target.style.color = i === 0 ? 'var(--accent-purple)' : '#111'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'var(--accent-purple)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '100px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
          }}
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
