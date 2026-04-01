import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';
import professionalPhoto from '../assets/Pofessional-photo.png';
import resume from '../assets/Jhomari Atienza Resume.pdf';
import '../styles/Hero.css';

export default function Hero() {
  const { personal, professional } = portfolioData;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Jhomari Atienza Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {personal.name}
          </motion.h1>
          
          <motion.p 
            className="hero-title"
            variants={itemVariants}
          >
            {personal.title}
          </motion.p>

          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            {professional.overview}
          </motion.p>

          <motion.div 
            className="hero-contact-info"
            variants={itemVariants}
          >
            <div className="contact-item">
              <Mail size={18} />
              <span>{personal.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>{personal.phone}</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>{personal.location}</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <ArrowRight size={20} />
            </motion.button>

            <motion.button 
              className="resume-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              Get Resume
              <Download size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          variants={itemVariants}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img 
            src={professionalPhoto} 
            alt="Jhomari Atienza Professional Photo"
            className="profile-image"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
