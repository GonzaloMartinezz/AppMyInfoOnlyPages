import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layout, Palette, Code2, ArrowRight } from 'lucide-react';
import mockupsImg from '../assets/process_mockups.png';

const steps = [
  { icon: <Lightbulb />, title: "Ideation", desc: "Tore otimne cloeclc rontit fnoctiche fireg colitue emveenao." },
  { icon: <Layout />, title: "Wireframing", desc: "Tinentible cntn auring vritoateichi fambor veloaitineyrom drflean." },
  { icon: <Palette />, title: "UI Design", desc: "Buicoe tat iht beatine rritoient aratinteasa depre dattoaieaving." },
  { icon: <Code2 />, title: "Development", desc: "Pain daithe bonliing ncomnoia ecitheoe olruenit ontea." }
];

const HorizontalProcess = () => {
  return (
    <section id="process" style={{ padding: '10rem 0', background: '#f8fafc', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ textAlign: 'left' }}
            >
              <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>{step.title},</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', maxWidth: '250px' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Line */}
        <div style={{ position: 'relative', height: '2px', background: '#e2e8f0', margin: '4rem 0 6rem' }}>
           <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{ width: '16px', height: '16px', background: '#6366f1', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 1px #e2e8f0' }}
                />
              ))}
           </div>
        </div>

        {/* Large Mockups Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '8rem' }}
        >
          <img src={mockupsImg} alt="App Process Mockups" style={{ width: '100%', borderRadius: '40px' }} />
        </motion.div>

        {/* Footer CTA Section */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '3rem', letterSpacing: '-0.04em' }}>
            Turn your ideas into <br /> functional apps— <br /> Learn the steps
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: '#6366f1', color: 'white', padding: '1.5rem 4rem', borderRadius: '100px', fontSize: '1.2rem', fontWeight: '700', boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)', cursor: 'pointer' }}
          >
            Learn the steps <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default HorizontalProcess;
