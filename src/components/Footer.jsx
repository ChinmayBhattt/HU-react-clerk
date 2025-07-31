import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5, color: '#f59e0b' }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
      className="bg-gradient-to-b from-primary-900 to-primary-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center mb-4"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-12 h-12 mr-3 rounded-full overflow-hidden bg-primary-dark border-2 border-secondary flex items-center justify-center"
              >
                <img 
                  src="/logo.svg" 
                  alt="Hacker's Unity" 
                  className="w-10 h-10 object-contain"
                />
              </motion.div>
              <div>
                <motion.h3 
                  variants={itemVariants}
                  className="text-xl font-bold bg-gradient-to-r from-secondary via-white to-accent bg-clip-text text-transparent"
                >
                  Hacker's Unity
                </motion.h3>
                <motion.div 
                  variants={itemVariants}
                  className="h-0.5 w-full bg-gradient-to-r from-secondary to-accent"
                ></motion.div>
              </div>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-6 glass-effect p-4 rounded-lg border border-gray-700/30"
            >
              A global tech and non-tech community bringing together innovators, creators, and problem-solvers. Join us to collaborate, learn, and build the future together.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4"
            >
              <motion.a 
                href="#" 
                variants={iconVariants}
                whileHover="hover"
                className="text-white p-2 bg-primary-dark/50 rounded-full border border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                variants={iconVariants}
                whileHover="hover"
                className="text-white p-2 bg-primary-dark/50 rounded-full border border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                variants={iconVariants}
                whileHover="hover"
                className="text-white p-2 bg-primary-dark/50 rounded-full border border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                variants={iconVariants}
                whileHover="hover"
                className="text-white p-2 bg-primary-dark/50 rounded-full border border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-effect p-5 rounded-lg border border-gray-700/30">
            <motion.h4 
              variants={itemVariants}
              className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent"
            >
              Quick Links
            </motion.h4>
            <motion.ul variants={itemVariants} className="space-y-3">
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#" 
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Home
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#achievements" 
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Achievements
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#sponsors" 
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Sponsors
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#events" 
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Events
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#team" 
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Team
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-effect p-5 rounded-lg border border-gray-700/30">
            <motion.h4 
              variants={itemVariants}
              className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h4>
            <motion.ul variants={itemVariants} className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-dark/70 rounded-full mr-3 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@hackersunity.org</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-dark/70 rounded-full mr-3 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors">123 Tech Street, San Francisco, CA 94107</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-dark/70 rounded-full mr-3 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Hacker's Unity. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;