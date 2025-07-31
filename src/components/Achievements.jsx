import { motion } from 'framer-motion';
import { TrophyIcon, UserGroupIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const achievementData = [
  {
    id: 1,
    icon: <TrophyIcon className="h-10 w-10 text-accent" />,
    title: 'Hackathons Organized',
    value: '25+',
    description: 'Successful hackathons with global participation'
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-10 w-10 text-accent" />,
    title: 'Community Members',
    value: '10,000+',
    description: 'Active members from around the world'
  },
  {
    id: 3,
    icon: <BuildingOfficeIcon className="h-10 w-10 text-accent" />,
    title: 'Partner Organizations',
    value: '50+',
    description: 'Collaborations with leading tech companies'
  },
  {
    id: 4,
    icon: <CalendarIcon className="h-10 w-10 text-accent" />,
    title: 'Events Conducted',
    value: '100+',
    description: 'Online and offline tech events'
  }
];

const Achievements = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10,
        delay: 0.2
      }
    }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-primary/90 to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Celebrating our milestones and impact in the global tech community
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievementData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="glass-effect rounded-2xl p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/10 rounded-full group-hover:scale-150 transition-all duration-700"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-secondary/10 rounded-full group-hover:scale-150 transition-all duration-700"></div>
              
              <motion.div 
                className="flex justify-center mb-6 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="p-4 rounded-full bg-primary/50 border border-accent/30">
                  {item.icon}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10">
                {item.title}
              </h3>
              
              <motion.p 
                className="text-4xl font-bold text-accent mb-4 relative z-10"
                variants={numberVariants}
              >
                {item.value}
              </motion.p>
              
              <p className="text-gray-300 relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#" className="btn btn-accent inline-flex items-center space-x-2 group">
            <span>View All Achievements</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;