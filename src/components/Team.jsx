import { motion, AnimatePresence } from 'framer-motion';

// Social media icons component for reuse
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Enhanced team data with IDs and more detailed bios
const coreMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Technical Lead',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=AJ',
    bio: 'Full-stack developer with expertise in React and Node.js ecosystems.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'UX Designer',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=SC',
    bio: 'Creative designer focused on building intuitive and accessible user experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Community Manager',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=MR',
    bio: 'Community builder with experience in organizing tech events and hackathons.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Event Coordinator',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=PP',
    bio: 'Event planning specialist with a passion for creating memorable tech gatherings.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
];

const founders = [
  {
    id: 1,
    name: 'David Wilson',
    role: 'Founder & CEO',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=DW',
    bio: 'Tech entrepreneur with 15+ years of experience in building communities and organizing tech events.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Emily Zhang',
    role: 'Co-Founder & CTO',
    image: 'https://placehold.co/300x300/4F46E5/FFFFFF?text=EZ',
    bio: 'Software engineer and hackathon enthusiast with a passion for mentoring the next generation of developers.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
];

const Team = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.2
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.4)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-primary">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind Hacker's Unity who are dedicated to building and
            supporting our vibrant tech community
          </p>
        </motion.div>

        {/* Founders Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-16 relative inline-block"
          >
            <span className="relative z-10">Founders</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {founders.map((founder) => (
              <motion.div
                key={founder.id}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 flex flex-col items-center text-center group"
              >
                <motion.div 
                  className="mb-8 relative"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary/30 p-1">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-white text-sm font-semibold py-1 px-4 rounded-full">
                    {founder.role}
                  </div>
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {founder.name}
                </h4>
                
                <p className="text-gray-300 mb-6">{founder.bio}</p>
                
                <div className="flex space-x-6">
                  <motion.a
                    href={founder.social.linkedin}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={founder.social.twitter}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href={founder.social.github}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <GithubIcon />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Team Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-16 relative inline-block"
          >
            <span className="relative z-10">Core Team</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="glass-effect rounded-xl p-6 text-center group card-hover"
              >
                <motion.div 
                  className="mb-6 mx-auto w-28 h-28 rounded-full overflow-hidden border-2 border-secondary/30"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h4>
                
                <p className="text-accent text-sm mb-3 font-medium">{member.role}</p>
                
                <p className="text-gray-300 text-sm mb-5 line-clamp-3">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <GithubIcon />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-10 max-w-4xl mx-auto"
        >
          <h4 className="text-2xl font-bold text-white mb-6">Join Our Team</h4>
          <p className="text-gray-300 mb-8 text-lg">
            We're always looking for talented individuals who are passionate about technology and community building.
            If you're excited about making an impact in the tech world, we'd love to hear from you!
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary inline-flex items-center space-x-2"
          >
            <span>View Open Positions</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Binary code background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap text-xs text-secondary/50 font-mono">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1/10 opacity-30">
              {Array.from({ length: 30 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;