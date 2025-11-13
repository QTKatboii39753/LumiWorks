import { ArrowLeft, Lightbulb, Code, Laptop, Smartphone, Globe, Check, Clock, Server, BookOpen } from 'lucide-react';

interface LumiTechProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiTech({ onNavigate, onToggleTheme, isDarkMode }: LumiTechProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-blue' : 'glow-blue-light'} w-96 h-96 top-20 -left-40 animate-glow`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-blue' : 'glow-blue-light'} w-80 h-80 bottom-20 -right-40 animate-glow`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => onNavigate('landing')}
            className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-semibold transition-colors animate-slide-in-left`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            <Lightbulb className={`w-6 h-6 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className={`p-2 inline-flex items-center justify-center rounded-full ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mb-6`}>
              <Code className={`w-16 h-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-float`} strokeWidth={1.5} />
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LumiTech</h1>
            <p className={`text-xl ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>Technology Solutions & Digital Education</p>
          </div>

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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-blue-500' : 'border-blue-600'} animate-fade-in-up delay-200 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Custom websites and web applications built with modern technologies to help your business grow online.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-blue-500' : 'border-blue-600'} animate-fade-in-up delay-300 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Mobile Apps</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Cross-platform mobile applications that deliver seamless user experiences on any device.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-blue-500' : 'border-blue-600'} animate-fade-in-up delay-400 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>IT Consulting</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Expert guidance to help you make informed technology decisions and optimize your digital infrastructure.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-blue-500' : 'border-blue-600'} animate-fade-in-up delay-500 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Training</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Comprehensive training programs to help you and your team master new technologies and tools.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center animate-fade-in-up delay-200 border border-blue-500/50">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-4">Ready to Illuminate Your Digital Future?</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Let's work together to bring your ideas to life with cutting-edge technology solutions.
            </p>
            <button
              onClick={() => onNavigate('landing')}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          <footer className={`text-center mt-16 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} animate-fade-in-up`}>
            Made with ❤️ by LumiTech © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LumiTech;
