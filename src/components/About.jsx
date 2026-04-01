import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

export default function About() {
  const { professional } = portfolioData;

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
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Overview</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Who I Am</h3>
            <p>{professional.overview}</p>
          </motion.div>

          <motion.div className="about-objective" variants={itemVariants}>
            <h3>My Objective</h3>
            <p>{professional.objective}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
