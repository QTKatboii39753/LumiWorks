import { ArrowLeft, BookOpen, Users, Star, Lightbulb, Check, Clock, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/futuristic.css';

interface LumiLearnProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiLearn({ onNavigate, onToggleTheme, isDarkMode }: LumiLearnProps) {
  const services = [
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Personalized Learning", 
      description: "Tailored one-on-one tutoring sessions" 
    },
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "All Subjects", 
      description: "Comprehensive K-12 subject coverage" 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Certified Educators", 
      description: "Experienced and qualified tutors" 
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "Flexible Scheduling", 
      description: "Sessions that fit your schedule" 
    }
  ];

  const serviceHours = [
    { day: 'Monday - Thursday', hours: '3:00 PM - 8:00 PM' },
    { day: 'Friday', hours: '3:00 PM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const testimonials = [
    { 
      name: 'Sarah M.', 
      role: 'Parent', 
      content: 'My child\'s grades have improved significantly since starting with LumiLearn. The tutors are patient and really know how to explain difficult concepts.' 
    },
    { 
      name: 'David T.', 
      role: 'High School Student', 
      content: 'I was struggling with calculus, but my tutor broke it down in a way that finally made sense. I aced my last test!' 
    },
    { 
      name: 'Jessica R.', 
      role: 'Parent', 
      content: 'The personalized attention my son receives is incredible. He looks forward to his tutoring sessions now.' 
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-purple' : 'glow-purple-light'} w-96 h-96 top-20 -left-40 animate-glow`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-purple' : 'glow-purple-light'} w-80 h-80 bottom-20 -right-40 animate-glow`} style={{ animationDelay: '2s' }}></div>
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
            className={`flex items-center ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} font-semibold transition-colors animate-slide-in-left`}
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
              <div className={`p-3 inline-flex items-center justify-center rounded-2xl ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100/50'} backdrop-blur-sm`}>
                <img
                  src="/logos/lumilearn-purple.png"
                  alt="LumiLearn logo"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              className={`text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-purple-300 to-violet-300' : 'bg-gradient-to-r from-purple-600 to-violet-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              LumiLearn
            </motion.h1>
            
            <motion.p 
              className={`text-2xl font-medium mb-8 ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              K-12 Tutoring Services
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
                className={`px-6 py-3 rounded-full font-medium flex items-center ${isDarkMode ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
              >
                Book a Session
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium ${isDarkMode ? 'bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-900/30' : 'bg-transparent border-2 border-purple-600 text-purple-700 hover:bg-purple-100'}`}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-fade-in-up delay-100`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About LumiLearn</h2>
            <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              LumiLearn provides personalized K-12 tutoring designed to help every student reach their
              full potential. We believe that with the right guidance and support, every child can excel
              academically and develop a genuine love for learning.
            </p>
            <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Led by Portia Lane, LumiLearn focuses on building confidence, strengthening understanding,
              and fostering independent thinking. We work with students at their own pace, celebrating
              progress and illuminating the path to academic success.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Check className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Personalized learning plans</span>
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <Award className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Certified educators</span>
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
                  <div className={`p-3 rounded-lg inline-flex ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100'} mb-4`}>
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
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Commitment</h3>
                <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  LumiLearn provides personalized K-12 tutoring designed to help every student reach their
                  full potential. We believe that with the right guidance and support, every child can excel
                  academically and develop a genuine love for learning.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Personalized Learning Plans</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Customized to each student's unique needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Certified Educators</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experienced teachers who are experts in their subjects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Progress Tracking</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Regular assessments to monitor improvement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tutoring Hours</h3>
                <div className="space-y-4">
                  {serviceHours.map(({ day, hours }, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{day}</span>
                      <span className={`font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Need help with homework?</span>
                  </div>
                  <p className="mt-2 text-sm opacity-90">Call us at (555) 987-6543 for immediate assistance</p>
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
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What Our Students Say</h2>
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
                  <div className="flex items-center mb4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl mr-4">
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
            <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-purple-700/20 to-violet-700/20' : 'from-purple-500/20 to-violet-500/20'} rounded-3xl`}></div>
            <div className="relative z-10">
              <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Unlock Your Child's Potential?</h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Get started with a free assessment and see how LumiLearn can help your child succeed.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
              >
                Book a Free Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} LumiLearn. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LumiLearn;
