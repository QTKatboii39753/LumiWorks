import { ArrowLeft, Droplets, Building2, Sparkles, Shield, Lightbulb, Check, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/futuristic.css';
import lumicleanLogo from '../../logos/lumiclean-blue.png';

interface LumiCleanProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiClean({ onNavigate, onToggleTheme, isDarkMode }: LumiCleanProps) {
  const services = [
    { icon: <Droplets className="w-8 h-8" />, title: "Residential Cleaning", description: "Crystal clear windows for your home" },
    { icon: <Building2 className="w-8 h-8" />, title: "Commercial Services", description: "Professional cleaning for businesses" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Eco-Friendly", description: "Environmentally safe cleaning solutions" },
    { icon: <Shield className="w-8 h-8" />, title: "Satisfaction Guaranteed", description: "100% satisfaction or we'll re-clean" }
  ];

  const serviceHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Services', hours: '24/7' }
  ];

  const testimonials = [
    { 
      name: 'Sarah J.', 
      role: 'Homeowner', 
      content: 'LumiClean transformed my home! The windows have never been cleaner. The team was professional and efficient.' 
    },
    { 
      name: 'Michael T.', 
      role: 'Business Owner', 
      content: 'We use LumiClean for our office building. Their attention to detail is unmatched and they always deliver on time.' 
    },
    { 
      name: 'Emily R.', 
      role: 'Property Manager', 
      content: 'The best window cleaning service in town. Our residents are always impressed with the results.' 
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute w-96 h-96 rounded-full filter blur-3xl opacity-20 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'}`} style={{ top: '10%', left: '10%' }}></div>
          <div className={`absolute w-80 h-80 rounded-full filter blur-3xl opacity-20 ${isDarkMode ? 'bg-sky-500' : 'bg-sky-300'}`} style={{ bottom: '10%', right: '10%' }}></div>
        </div>
        <div className="absolute inset-0 grid-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
        {/* Navigation */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12 glass-panel p-4 rounded-2xl"
        >
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => onNavigate('landing')}
            className={`flex items-center font-medium ${isDarkMode ? 'text-blue-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md transition-all`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Lightbulb className="w-5 h-5 text-yellow-300" />
              ) : (
                <Lightbulb className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className={`p-3 inline-flex items-center justify-center rounded-2xl ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100/50'} backdrop-blur-sm`}>
              <img
                src={lumicleanLogo}
                alt="LumiClean logo"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className={`text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-cyan-300' : 'bg-gradient-to-r from-blue-600 to-cyan-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            LumiClean
          </motion.h1>
          
          <motion.p 
            className={`text-2xl font-medium mb-8 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crystal Clear Window Washing Services
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium flex items-center ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              Get Free Quote
              <ArrowLeft className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium ${isDarkMode ? 'bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-900/30' : 'bg-transparent border-2 border-blue-600 text-blue-700 hover:bg-blue-100'}`}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-2xl mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Commitment</h3>
              <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Under the leadership of Portia Lane, LumiClean is committed to delivering meticulous,
                reliable service that exceeds expectations. We treat every window with care and attention,
                ensuring streak-free, sparkling results every time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Eco-Friendly Solutions</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Using environmentally safe cleaning products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Trained Professionals</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certified and experienced window cleaning experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Satisfaction Guaranteed</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>100% satisfaction or we'll re-clean for free</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service Hours</h3>
              <div className="space-y-4">
                {serviceHours.map(({ day, hours }, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{day}</span>
                    <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Need service now?</span>
                </div>
                <p className="mt-2 text-sm opacity-90">Call us at (555) 123-4567 for immediate assistance</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`glass-panel p-6 rounded-2xl h-full flex flex-col ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'}`}
              >
                <div className={`p-3 rounded-lg inline-flex ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 flex-grow ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                    <p className={`text-xl ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>Crystal Clear Window Washing Services</p>
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 px-6 rounded-3xl overflow-hidden relative mb-16"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-blue-600/20 to-cyan-600/20' : 'from-blue-500/20 to-cyan-500/20'} rounded-3xl`}></div>
          <div className="relative z-10">
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready for Crystal Clear Windows?</h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Get a free, no-obligation quote today and experience the LumiClean difference.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-lg ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Get Your Free Quote Now
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} LumiClean. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LumiClean;