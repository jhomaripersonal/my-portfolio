import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../styles/Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

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
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((job) => (
            <motion.div 
              key={job.id}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ x: 10, boxShadow: '0 10px 40px rgba(79, 70, 229, 0.3)' }}
            >
              <div className="experience-header">
                <div className="experience-info">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="duration">{job.duration}</span>
              </div>

              <ul className="highlights">
                {job.highlights.map((highlight, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
