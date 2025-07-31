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
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-primary to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated gradient circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Code matrix background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full flex flex-wrap text-xs text-secondary/50 font-mono">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1/10 opacity-30">
                  {Array.from({ length: 30 }).map((_, j) => (
                    <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Hacker's Unity
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
            <div className="relative z-10 glow-effect">
              <img
                src="/images/hero-illustration.svg"
                alt="Hacker's Unity Community"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Floating elements around the illustration */}
            <motion.div 
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-xl"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <div className="text-white font-bold">{'<Code/>'}</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-xl"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
            >
              <div className="text-white font-bold">{'{ }'}</div>
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