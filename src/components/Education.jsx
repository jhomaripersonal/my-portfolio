import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="education-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              className="education-card"
              variants={itemVariants}
              whileHover={{ x: 10, boxShadow: '0 10px 40px rgba(79, 70, 229, 0.3)' }}
            >
              <div className="education-icon">📚</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="school">{edu.school}</p>
                <span className="year">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
