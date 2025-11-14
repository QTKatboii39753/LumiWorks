import { ArrowLeft, Lightbulb, Code, Laptop, Smartphone, Check, Clock, Server, BookOpen, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/futuristic.css';

interface LumiTechProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiTech({ onNavigate, onToggleTheme, isDarkMode }: LumiTechProps) {
  const services = [
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Web Development", 
      description: "Custom websites and web applications built with modern technologies." 
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: "Mobile Apps", 
      description: "Cross-platform mobile applications with seamless user experiences." 
    },
    { 
      icon: <Laptop className="w-8 h-8" />, 
      title: "IT Consulting", 
      description: "Expert guidance for your technology decisions and infrastructure." 
    },
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "Training", 
      description: "Comprehensive programs to master new technologies and tools." 
    }
  ];

  const serviceHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By appointment' }
  ];

  const testimonials = [
    { 
      name: 'Michael T.', 
      role: 'Small Business Owner', 
      content: 'LumiTech transformed our online presence with a beautiful, functional website that has significantly increased our customer engagement.' 
    },
    { 
      name: 'Jennifer L.', 
      role: 'Startup Founder', 
      content: 'The mobile app they developed for us exceeded our expectations. The team was professional and delivered on time.' 
    },
    { 
      name: 'Robert K.', 
      role: 'Non-profit Director', 
      content: 'Their IT consulting services helped us modernize our systems and improve efficiency across our organization.' 
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-blue' : 'glow-blue-light'} w-96 h-96 top-20 -left-40 animate-glow`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-blue' : 'glow-blue-light'} w-80 h-80 bottom-20 -right-40 animate-glow`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12 glass-panel p-4 rounded-2xl"
        >
          <button
            onClick={() => onNavigate('landing')}
            className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-semibold transition-colors animate-slide-in-left`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
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
              <Lightbulb className="w-5 h-5 text-yellow-600" />
            )}
          </motion.button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
                <Code className={`w-16 h-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <motion.h1 
              className={`text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-cyan-300' : 'bg-gradient-to-r from-blue-600 to-cyan-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              LumiTech
            </motion.h1>
            
            <motion.p 
              className={`text-2xl font-medium mb-8 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Technology Solutions & Digital Education
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
                Get a Free Quote
                <ChevronRight className="ml-2 w-5 h-5" />
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

          <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-fade-in-up delay-100`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About LumiTech</h2>
            <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              LumiTech is dedicated to bridging the gap between people and technology. Whether you need
              a custom app, a professional website, or guidance on using your computer more effectively,
              we're here to help illuminate your digital journey.
            </p>
            <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Led by Portia Lane, LumiTech combines technical expertise with a passion for education,
              ensuring that every client receives not just a solution, but the knowledge to make the most of it.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Check className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Custom solutions</span>
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Fast turnaround</span>
              </div>
              <div className="flex items-center">
                <Server className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Reliable hosting</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Services</h2>
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
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Expertise</h3>
                <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  LumiTech is dedicated to bridging the gap between people and technology. Whether you need
                  a custom app, a professional website, or guidance on using your computer more effectively,
                  we're here to help illuminate your digital journey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Custom Solutions</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tailored to your specific business needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Modern Technologies</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Using the latest frameworks and best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ongoing Support</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reliable maintenance and support services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Business Hours</h3>
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
                    <Lightbulb className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Need technical assistance?</span>
                  </div>
                  <p className="mt-2 text-sm opacity-90">Call us at (555) 123-4567 for immediate support</p>
                </div>
              </div>
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
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
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
              <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Illuminate Your Digital Future?</h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Let's work together to bring your ideas to life with cutting-edge technology solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg ${isDarkMode ? 'bg-white text-blue-900 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Get a Free Consultation
              </motion.button>
            </div>
          </motion.div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} LumiTech. All rights reserved.
          </p>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default LumiTech;
