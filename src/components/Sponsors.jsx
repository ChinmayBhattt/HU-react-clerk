import { motion } from 'framer-motion';

// Mock sponsor logos - replace with actual sponsor images
const sponsorLogos = [
  { id: 1, name: 'Google', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=Google' },
  { id: 2, name: 'Microsoft', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=Microsoft' },
  { id: 3, name: 'Amazon', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=Amazon' },
  { id: 4, name: 'Meta', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=Meta' },
  { id: 5, name: 'IBM', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=IBM' },
  { id: 6, name: 'Intel', logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=Intel' },
];

const Sponsors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-primary to-primary/80">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Proud partners who support our mission and community
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sponsorLogos.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex items-center justify-center p-6 glass-effect rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-effect rounded-2xl p-10 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Become a Sponsor
            </h3>
            <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
              Support our community and gain visibility among tech enthusiasts and
              innovators. Reach out to explore sponsorship opportunities.
            </p>
            <motion.a
              href="#"
              className="btn btn-accent inline-flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 text-lg">Interested in becoming a sponsor? Email us at <a href="mailto:sponsors@hackersunity.org" className="text-accent hover:underline">sponsors@hackersunity.org</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;