import { ArrowLeft, Droplets, Home, Building2, Sparkles, Shield, Lightbulb, Check, Clock, Calendar } from 'lucide-react';

interface LumiCleanProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiClean({ onNavigate, onToggleTheme, isDarkMode }: LumiCleanProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-green' : 'glow-green-light'} w-96 h-96 top-20 -left-40 animate-glow`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-green' : 'glow-green-light'} w-80 h-80 bottom-20 -right-40 animate-glow`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => onNavigate('landing')}
            className={`flex items-center ${isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'} font-semibold transition-colors animate-slide-in-left`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            <Lightbulb className="w-6 h-6 text-yellow-400" />
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className={`p-2 inline-flex items-center justify-center rounded-full ${isDarkMode ? 'bg-green-900/30' : 'bg-green-100'} mb-6`}>
              <Droplets className={`w-16 h-16 ${isDarkMode ? 'text-green-400' : 'text-green-600'} animate-float`} strokeWidth={1.5} />
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LumiClean</h1>
            <p className={`text-xl ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Crystal Clear Window Washing Services</p>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-fade-in-up delay-100`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About LumiClean</h2>
            <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              LumiClean specializes in professional window washing services that bring the light back
              into your spaces. Clean windows don't just look better—they transform how natural light
              fills your home or business, creating a brighter, more welcoming environment.
            </p>
            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Under the leadership of Portia Lane, LumiClean is committed to delivering meticulous,
              reliable service that exceeds expectations. We treat every window with care and attention,
              ensuring streak-free, sparkling results every time.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Check className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Streak-free finish</span>
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <Calendar className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Regular maintenance plans</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-green-500' : 'border-green-600'} animate-fade-in-up delay-200 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Residential Services</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Transform your home with spotless windows. We handle everything from ground-level
                windows to hard-to-reach second-story glass, ensuring your home shines inside and out.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-green-500' : 'border-green-600'} animate-fade-in-up delay-300 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Commercial Services</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Make a great first impression with pristine storefront and office windows. We work
                efficiently to minimize disruption to your business operations.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-green-500' : 'border-green-600'} animate-fade-in-up delay-400 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Detail-Oriented</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Every window receives thorough attention, including frames, sills, and tracks.
                We don't just clean—we restore clarity and brightness to your view.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-green-500' : 'border-green-600'} animate-fade-in-up delay-500 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Safe & Reliable</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your property is in good hands. We use professional equipment and techniques to
                ensure safe, damage-free cleaning with consistently excellent results.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white text-center animate-fade-in-up delay-200 border border-green-500/50">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-4">Let the Light In</h3>
            <p className="text-green-100 leading-relaxed">
              Clean windows do more than improve appearances—they enhance your mood, productivity, and
              enjoyment of your space. Portia Lane and the LumiClean team are dedicated to providing
              the best window washing experience, leaving you with views that truly shine. Experience
              the difference that crystal-clear windows can make.
            </p>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm animate-fade-in-up delay-300">
          Made by LumiTech
        </footer>
      </div>
    </div>
  );
}

export default LumiClean;
