import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Mock event data - replace with actual event data in a real application
const events = [
  {
    id: 1,
    title: 'Annual Hackathon',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Hackathon',
    date: 'October 15-17, 2023',
    location: 'Tech Hub, New York',
    attendees: '250+ Participants',
    description: 'Join us for 48 hours of coding, innovation, and fun. Build projects that solve real-world problems and win amazing prizes!'
  },
  {
    id: 2,
    title: 'Web3 Workshop Series',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Web3+Workshop',
    date: 'Every Tuesday, Sept-Nov 2023',
    location: 'Virtual Event',
    attendees: '500+ Registered',
    description: 'Learn blockchain development, smart contracts, and decentralized applications in this comprehensive workshop series.'
  },
  {
    id: 3,
    title: 'AI Summit',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=AI+Summit',
    date: 'December 5-7, 2023',
    location: 'Convention Center, San Francisco',
    attendees: '1000+ Attendees',
    description: 'Explore the latest in artificial intelligence, machine learning, and neural networks with industry experts and researchers.'
  },
];

const Events = () => {
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-primary/90 to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us at our upcoming events to learn, connect, and grow with fellow tech enthusiasts
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="glass-effect rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute top-4 right-4 bg-accent/90 text-white text-sm font-semibold py-1 px-3 rounded-full z-20">
                  Upcoming
                </div>
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">{event.description}</p>
                
                <div className="space-y-3 text-gray-200 mb-8">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="btn btn-accent w-full flex items-center justify-center space-x-2 group"
                >
                  <span>Register Now</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="btn btn-secondary inline-flex items-center space-x-2"
          >
            <span>View All Events</span>
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
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-gray-300 text-lg">Want to host an event with us? <a href="#" className="text-accent hover:underline">Submit your proposal</a></p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-40">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4F46E5"></path>
        </svg>
      </div>
    </section>
  );
};

export default Events;