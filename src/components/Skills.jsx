import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import * as Icons from 'lucide-react';
import '../styles/Skills.css';

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const IconComponent = Icons[skill.icon];
            return (
              <motion.div 
                key={index}
                className="skill-card"
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(79, 70, 229, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {IconComponent && <IconComponent className="skill-icon" size={32} />}
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
