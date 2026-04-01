import { motion } from 'framer-motion';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="footer-text">
            © {currentYear} Jhomari Atienza. All rights reserved.
          </p>
          <p className="footer-tagline">
            Building scalable solutions one project at a time.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
