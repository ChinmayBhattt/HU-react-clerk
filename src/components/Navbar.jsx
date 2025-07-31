import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignInButton, SignOutButton, useAuth } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  // Define navigation links for reuse
  const navLinks = [
    { to: '/achievements', label: 'Achievements' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/events', label: 'Events' },
    { to: '/team', label: 'Team' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: { 
      scale: 1.05, 
      color: "#4f46e5", 
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mr-2 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative h-8 w-8 bg-primary rounded-full flex items-center justify-center border-2 border-secondary">
                  <span className="text-accent font-bold text-xs">HU</span>
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text">Hacker's Unity</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={navbarVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.to} variants={linkVariants}>
                <Link to={link.to}>
                  <motion.a 
                    className="text-gray-200 hover:text-white cursor-pointer relative group"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                </Link>
              </motion.div>
            ))}

            {isSignedIn ? (
              <SignOutButton>
                <motion.button 
                  className="btn btn-secondary btn-sm"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign Out
                </motion.button>
              </SignOutButton>
            ) : (
              <SignInButton>
                <motion.button 
                  className="btn btn-primary btn-sm"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign In
                </motion.button>
              </SignInButton>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 glass-effect rounded-lg mt-2 shadow-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={mobileLinkVariants}>
                  <Link
                    to={link.to}
                    className="block py-2 px-4 text-gray-200 hover:text-white hover:bg-secondary/20 rounded-md mx-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                className="px-4 py-2 mt-2"
                variants={mobileLinkVariants}
              >
                {isSignedIn ? (
                  <SignOutButton>
                    <motion.button 
                      className="btn btn-secondary btn-sm w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Out
                    </motion.button>
                  </SignOutButton>
                ) : (
                  <SignInButton>
                    <motion.button 
                      className="btn btn-primary btn-sm w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign In
                    </motion.button>
                  </SignInButton>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;