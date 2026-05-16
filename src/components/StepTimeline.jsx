import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Search, 
  Map, 
  Layout, 
  Palette, 
  Zap, 
  Code2, 
  CheckCircle, 
  Rocket 
} from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    desc: "In-depth market research, competitor analysis, and defining target user personas to ensure product-market fit. We dive deep into your business goals.",
    icon: <Search size={40} />,
    color: "#6366f1"
  },
  {
    title: "Architecture",
    desc: "Mapping out the information architecture and defining complex user flows for a seamless navigation experience that converts visitors into customers.",
    icon: <Map size={40} />,
    color: "#8b5cf6"
  },
  {
    title: "Wireframing",
    desc: "Creating low-fidelity wireframes to focus on structure and usability before moving to visual design. We define the skeleton of your success.",
    icon: <Layout size={40} />,
    color: "#a78bfa"
  },
  {
    title: "UI Design",
    desc: "Crafting high-fidelity visuals, defining the design system, and ensuring brand consistency across all screens with a premium, modern aesthetic.",
    icon: <Palette size={40} />,
    color: "#f472b6"
  },
  {
    title: "Prototyping",
    desc: "Building interactive prototypes to test usability and gather feedback before the development phase. Fail fast, improve faster.",
    icon: <Zap size={40} />,
    color: "#fb923c"
  },
  {
    title: "Development",
    desc: "Full-stack implementation using modern technologies like React, Node.js and more, ensuring high performance and scalable architecture.",
    icon: <Code2 size={40} />,
    color: "#34d399"
  },
  {
    title: "QA & Testing",
    desc: "Rigorous testing across devices, fixing bugs, and optimizing performance for a flawless user experience that users will love.",
    icon: <CheckCircle size={40} />,
    color: "#2dd4bf"
  },
  {
    title: "Deployment",
    desc: "Final deployment to production, SEO optimization, and setting up analytics for post-launch monitoring and growth.",
    icon: <Rocket size={40} />,
    color: "#6366f1"
  }
];

const StepTimeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="steps" style={{ padding: '15rem 0', background: '#fff', position: 'relative' }}>
      <div className="container">
        
        {/* Massive Header */}
        <div style={{ marginBottom: '12rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '12vw', fontWeight: '900', letterSpacing: '-0.06em', lineHeight: '0.8', textTransform: 'uppercase' }}
          >
            Our <br /> <span style={{ color: 'var(--accent-purple)' }}>Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '600px' }}
          >
            A comprehensive journey from initial concept to a market-ready digital product.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div style={{ position: 'relative', paddingLeft: '4rem' }}>
          
          {/* Animated Progress Line */}
          <div style={{ 
            position: 'absolute', 
            left: '0', 
            top: '0', 
            bottom: '0', 
            width: '4px', 
            background: '#f1f5f9', 
            borderRadius: '10px'
          }}>
            <motion.div 
              style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-blue))',
                originY: 0,
                scaleY,
                borderRadius: '10px'
              }} 
            />
          </div>

          {/* Large Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  background: 'white',
                  padding: '5rem',
                  borderRadius: '48px',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.04)',
                  border: '1px solid #f1f5f9',
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '4rem',
                  alignItems: 'center'
                }}
              >
                {/* Background Step Number */}
                <span style={{ 
                  position: 'absolute', 
                  top: '2rem', 
                  right: '4rem',
                  fontSize: '12rem',
                  fontWeight: '900',
                  color: '#f8fafc',
                  zIndex: 0
                }}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                {/* Icon & Color Accents */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    background: `${step.color}11`, 
                    color: step.color,
                    borderRadius: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: `0 20px 40px ${step.color}11`
                  }}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.4rem', maxWidth: '700px' }}>{step.desc}</p>
                </div>

                {/* Side Indicator Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    left: '-4.6rem',
                    top: '50%',
                    width: '32px',
                    height: '32px',
                    background: 'white',
                    border: `6px solid ${step.color}`,
                    borderRadius: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    boxShadow: `0 0 30px ${step.color}44`
                  }}
                />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Final CTA Refined */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: '12rem', 
            background: 'var(--bg-dark)',
            padding: '10rem 5rem',
            borderRadius: '80px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-purple)', opacity: 0.15, filter: 'blur(150px)', borderRadius: '50%' }}></div>
          <h2 style={{ fontSize: '6rem', fontWeight: '900', marginBottom: '2rem', lineHeight: '1', letterSpacing: '-0.04em' }}>Ready to launch <br /> your <span style={{ color: 'var(--accent-purple)' }}>Vision?</span></h2>
          <p style={{ fontSize: '1.4rem', opacity: 0.6, marginBottom: '4rem', maxWidth: '700px', margin: '2rem auto 4rem' }}>
            We've refined our process over hundreds of projects to ensure the highest quality results in record time.
          </p>
          <button className="btn-black" style={{ background: 'var(--accent-purple)', padding: '1.8rem 5rem', fontSize: '1.4rem', borderRadius: '100px' }}>
            Get a Free Estimate
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default StepTimeline;
