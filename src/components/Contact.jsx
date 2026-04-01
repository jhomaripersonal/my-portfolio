import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// Initialize EmailJS
emailjs.init('hO00G4wCGvcoLRoNn');

export default function Contact() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Send email to portfolio owner (Jhomari)
      await emailjs.send('service_oawh9rg', 'template_pb3b2nl', {
        to_email: contact.email,
        name: formData.name,
        email: formData.email,
        title: formData.message,
      });

      // Send confirmation email to visitor
      await emailjs.send('service_oawh9rg', 'template_pb3b2nl', {
        to_email: formData.email,
        name: 'Jhomari Atienza',
        email: contact.email,
        title: `Thank you for reaching out! I've received your message and will get back to you soon.`,
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Get In Touch</h3>
            
            <div className="info-item">
              <Mail size={24} />
              <div>
                <p className="label">Email</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>

            <div className="info-item">
              <Phone size={24} />
              <div>
                <p className="label">Phone</p>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} />
              <div>
                <p className="label">Location</p>
                <p>{contact.location}</p>
              </div>
            </div>

            <div className="social-links">
              {contact.socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                whileFocus={{ boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)' }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                whileFocus={{ boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)' }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                whileFocus={{ boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)' }}
                required
              />
            </div>

            {status === 'success' && (
              <motion.div 
                className="status-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                className="status-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Error sending message. Please try again or contact me directly.
              </motion.div>
            )}

            <motion.button 
              type="submit"
              className="submit-btn"
              disabled={loading}
              whileHover={!loading ? { scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.6)' } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
