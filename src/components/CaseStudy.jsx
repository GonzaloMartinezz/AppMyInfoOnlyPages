import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import caseStudyImg from '../assets/casestudy.png';

const CaseStudy = () => {
  return (
    <section id="logistica" style={{ padding: '10rem 0', overflow: 'hidden' }}>
      
      {/* 01 Project Overview Section */}
      <div style={{ position: 'relative', marginBottom: '15rem' }}>
        {/* Purple Background Wave */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '0', 
          width: '100%', 
          height: '400px', 
          background: 'var(--accent-purple)', 
          transform: 'translateY(-50%) skewY(-2deg)', 
          zIndex: -1 
        }}></div>

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: 'white' }}
            >
              <h3 style={{ fontSize: '10rem', fontWeight: '900', opacity: 0.5, lineHeight: '1', marginBottom: '1rem' }}>01</h3>
              <h4 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Project <span style={{ opacity: 0.7 }}>Overview</span></h4>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, maxWidth: '500px' }}>
                Home Ease is an online platform that connects customers with professional contractors for renovation and repair work. It offers an easy-to-use interface for finding and placing orders for services in both residential and commercial spaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img src={caseStudyImg} alt="Home Ease Detail" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Content Grid (Problem & Solution) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
          
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '8px', height: '40px', background: 'var(--accent-purple)', borderRadius: '4px' }}></div>
               The Problem
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'The difficulty of finding reliable performers for household chores',
                'Lack of transparency in the pricing of services',
                'The risk of poor-quality work and deception',
                'Difficulties in communication between the customer and contractor',
                'No guarantees of payment for performers',
                'Difficulty in estimating the amount of work and making estimates'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                  <div style={{ minWidth: '28px', height: '28px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7rem' }}>
                     <ArrowUpRight size={14} style={{ transform: 'rotate(90deg)' }} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: 'var(--accent-purple)', padding: '5rem', borderRadius: '60px', color: 'white', boxShadow: '0 40px 80px rgba(99, 102, 241, 0.2)' }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>The Solution</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Implementation of a rating and feedback system for performers, which allows customers to choose trusted specialists.',
                'Development of templates for standard orders with recommended price ranges.',
                'Creation of a system of phased payment and confirmation of work with the possibility of arbitration.',
                'Chat integration into the application for convenient communication between the customer and the contractor.',
                'Implementation of a secure payment system with funds frozen on the platform until the completion of the work is confirmed.',
                'The introduction of an online consultation function with specialists for a preliminary assessment of the scope of work and assistance in making estimates.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', lineHeight: '1.6', opacity: 0.9 }}>
                  <div style={{ minWidth: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
