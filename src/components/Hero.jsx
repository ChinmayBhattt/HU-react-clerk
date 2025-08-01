import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const Hero = () => {
  const { isSignedIn } = useAuth();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const buttonHover = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const statsItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  return (
    <section className="hero-gradient py-16 md:py-24 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Circle 1 */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Gradient Circle 2 */}
        <motion.div 
          className="absolute top-1/3 -right-20 w-80 h-80 bg-accent opacity-10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Code Pattern Background */}
        <motion.div 
          className="code-pattern"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        />
        
        {/* Digital Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary"
            >
              <span className="mr-2">✨</span> India's Premier Hackathon Community
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hacker's Unity</span>
            </h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Join our vibrant community of passionate developers, designers, and tech enthusiasts. 
              Learn, build, and grow together through hackathons, workshops, and collaborative projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {isSignedIn ? (
                <motion.div variants={fadeInUp}>
                  <Link to="/dashboard">
                    <motion.button 
                      className="btn btn-primary inline-flex items-center space-x-2"
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Go to Dashboard</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div variants={fadeInUp}>
                  <Link to="/sign-up">
                    <motion.button 
                      className="btn btn-primary inline-flex items-center space-x-2"
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Join the Community</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>
              )}
              
              <motion.div variants={fadeInUp}>
                <Link to="/events">
                  <motion.button 
                    className="btn btn-secondary inline-flex items-center space-x-2"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>Upcoming Events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2 
            }}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              className="relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut" 
              }}>
              <div className="w-full h-80 flex items-center justify-center relative">
                {/* Shield */}
                <motion.div 
                  className="w-64 h-64 border-4 border-secondary rounded-full flex items-center justify-center relative glow-pulse"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  {/* Shield inner */}
                  <div className="w-56 h-56 bg-primary-900 rounded-full flex items-center justify-center">
                    {/* HU Float SVG */}
                    <motion.img 
                      src="/images/hu-float.png" 
                      alt="HU Logo" 
                      className="w-50 h-44"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Animated particles */}
                <motion.div 
                  className="absolute top-0 right-0 w-4 h-4 rounded-full bg-accent"
                  animate={{ 
                    y: [0, 20, 0],
                    opacity: [0.2, 1, 0.2]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                <motion.div 
                  className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-secondary"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                />
              </div>
            </motion.div>
            
            {/* Floating code elements */}
            <motion.div 
              className="absolute top-5 right-10 bg-secondary/10 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-secondary/30"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <div className="text-secondary font-mono font-bold">{'<Code/>'}</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 left-5 bg-accent/10 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-accent/30"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
            >
              <div className="text-accent font-mono font-bold">{'{ }'}</div>
            </motion.div>
            
            {/* Additional floating element */}
            <motion.div 
              className="absolute top-1/2 right-5 bg-white/5 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/10"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut" 
              }}
            >
              <div className="text-white font-mono text-sm">
                <div className="text-secondary">function</div>
                <div className="text-white">hackersUnity()</div>
                <div className="text-white">{`{`}</div>
                <div className="text-accent ml-2">return "success";</div>
                <div className="text-white">{`}`}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 glass-effect rounded-2xl"
        >
          <motion.div variants={statsItem} className="text-center">
            <p className="text-4xl font-bold text-white mb-2">5,000+</p>
            <p className="text-gray-300">Community Members</p>
          </motion.div>
          <motion.div variants={statsItem} className="text-center">
            <p className="text-4xl font-bold text-white mb-2">50+</p>
            <p className="text-gray-300">Events Hosted</p>
          </motion.div>
          <motion.div variants={statsItem} className="text-center">
            <p className="text-4xl font-bold text-white mb-2">100+</p>
            <p className="text-gray-300">Projects Completed</p>
          </motion.div>
          <motion.div variants={statsItem} className="text-center">
            <p className="text-4xl font-bold text-white mb-2">20+</p>
            <p className="text-gray-300">Partner Companies</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;