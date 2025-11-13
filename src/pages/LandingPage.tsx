import { Code, Droplets, GraduationCap, Sparkles, Zap, Star, ArrowRight, Moon, Sun } from 'lucide-react';
import { LightBulb } from '../components/LightBulb';
import { Particles } from '../components/Particles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

// Navbar component
type Page = 'landing' | 'tech' | 'clean' | 'learn';

const Navbar = ({ 
  isDarkMode, 
  onToggleTheme, 
  onNavigate 
}: { 
  isDarkMode: boolean; 
  onToggleTheme: () => void; 
  onNavigate: (page: Page) => void; 
}) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Zap className={`h-6 w-6 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Lumiworks
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <button
              onClick={() => onNavigate('tech')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Tech
            </button>
            <button
              onClick={() => onNavigate('clean')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Clean
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Learn
            </button>
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => onNavigate('tech')}
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400' : 'text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LandingPage({ onNavigate, onToggleTheme, isDarkMode }: LandingPageProps) {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isBulbOn, setIsBulbOn] = useState(false);
  const [showSpark, setShowSpark] = useState(false);
  

  const handleButtonClick = (page: string) => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      onNavigate(page as any);
    }, 800);
  };

  const triggerSpark = () => {
    setShowSpark(true);
    setTimeout(() => setShowSpark(false), 500);
  };

  const handleClick = () => {
    setIsBulbOn(prev => !prev);
    triggerSpark();
    onToggleTheme(); // Toggle theme when light bulb is clicked
  };

  // Confetti effect
  useEffect(() => {
    if (!showConfetti) return;

    const colors = ['#fbbf24', '#60a5fa', '#34d399', '#f472b6', '#a78bfa'];
    
    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-10px';
      confetti.style.zIndex = '9999';
      confetti.style.pointerEvents = 'none';
      
      document.body.appendChild(confetti);
      
      const animation = confetti.animate(
        [
          { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
          { 
            transform: `translate(${Math.random() * 400 - 200}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
            opacity: 0 
          }
        ],
        {
          duration: 1000 + Math.random() * 2000,
          easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)',
        }
      );
      
      animation.onfinish = () => confetti.remove();
    };

    const interval = setInterval(createConfetti, 50);
    return () => clearInterval(interval);
  }, [showConfetti]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={onToggleTheme} 
        onNavigate={onNavigate} 
      />
      <Particles />
      <div className="absolute inset-0 overflow-hidden pt-16"> {/* Add pt-16 to account for fixed navbar */}
        {/* Background with better contrast */}
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-slate-900 via-slate-800 to-amber-900/20' : 'from-slate-50 via-slate-100 to-amber-100/20'}`}></div>
        
        {/* Floating light bulbs - using viewport units for stability */}
        <div style={{
          position: 'fixed',
          top: '25vh',
          left: '-5vw',
          opacity: 0.3,
          zIndex: 0,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}>
          <LightBulb size={150} initialOn={true} />
        </div>
        <div style={{
          position: 'fixed',
          top: '33vh',
          right: '-5vw',
          opacity: 0.3,
          zIndex: 0,
          transform: 'rotate(15deg) translate3d(0, 0, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}>
          <LightBulb size={180} initialOn={true} />
        </div>
        <div style={{
          position: 'fixed',
          bottom: '25vh',
          left: '25vw',
          opacity: 0.2,
          zIndex: 0,
          transform: 'rotate(-15deg) translate3d(0, 0, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}>
          <LightBulb size={120} initialOn={true} />
        </div>
        
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-amber-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-amber-500/5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in-up pt-16">
          <div className="flex flex-col items-center mb-6">
          <div className="relative mb-8 cursor-pointer" style={{ marginTop: '2rem' }} onClick={handleClick}>
            <div style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
              <LightBulb 
                size={100} 
                className="drop-shadow-[0_0_20px_rgba(250,204,21,0.7)]"
                style={{
                  position: 'relative',
                  transform: 'translate3d(0, 0, 0)',
                  zIndex: 10
                }}
                isOn={isBulbOn}
                showSpark={showSpark}
              />
              <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-6 h-6 animate-ping" style={{ zIndex: 15 }} />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500/20 w-32 h-4 rounded-full blur-md group-hover:w-40 transition-all duration-500" style={{ zIndex: 5 }}></div>
          </div>
          <h1 className="text-7xl font-bold mb-4 tracking-tight relative group">
            <span className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-yellow-300 via-amber-300 to-yellow-300' : 'from-amber-600 via-amber-700 to-amber-600'} bg-[length:200%] animate-gradient`}>
              Lumiworks
            </span>
            <span className={`absolute -top-4 -right-4 ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'} text-4xl animate-bounce`}>
              <Sparkles className="w-8 h-8" />
            </span>
            <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${isDarkMode ? 'from-yellow-400 to-amber-500' : 'from-amber-500 to-amber-600'} w-0 group-hover:w-full transition-all duration-1000`}></span>
          </h1>
          <p className={`text-3xl bg-gradient-to-r ${isDarkMode ? 'from-yellow-400 to-amber-400' : 'from-amber-600 to-amber-700'} bg-clip-text text-transparent mb-2 font-semibold animate-gradient`}>
            Illuminating Your Path Forward
          </p>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Founded by Portia Lane</p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <p className={`text-center text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-16 leading-relaxed animate-fade-in-up delay-100 whitespace-normal`}>
            Welcome to Lumiworks, where we bring light to every aspect of your life.
            We're dedicated to providing exceptional services across technology, home care, and education.
            Explore our three specialized businesses below.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="animate-fade-in-up delay-200 group relative"
              onMouseEnter={() => setIsHovering('tech')}
              onMouseLeave={() => setIsHovering(null)}
            >
              {isHovering === 'tech' && (
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white p-2 rounded-full transform rotate-12 animate-bounce">
                  <Zap className="w-5 h-5" />
                </div>
              )}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl hover:bg-white/20 border border-white/20 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Code className="w-12 h-12 mb-4 relative z-10" />
                  <h2 className="text-3xl font-bold mb-2 relative z-10">LumiTech</h2>
                  <p className="text-blue-200/90 mb-6">Technology Solutions</p>
                </div>
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm flex-grow flex flex-col">
                  <div className={`mb-6 leading-relaxed flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>App and website development services plus comprehensive computer usage tutorials to help you master technology with confidence.</p>
                  </div>
                  <button
                    onClick={() => handleButtonClick('tech')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/button"
                  >
                    <span>Explore LumiTech</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div 
              className="animate-fade-in-up delay-300 group relative"
              onMouseEnter={() => setIsHovering('clean')}
              onMouseLeave={() => setIsHovering(null)}
            >
              {isHovering === 'clean' && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white p-2 rounded-full transform -rotate-12 animate-bounce">
                  <Droplets className="w-5 h-5" />
                </div>
              )}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl hover:bg-white/20 border border-white/20 h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(22,163,74,0.5)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Droplets className="w-12 h-12 mb-4 relative z-10" />
                  <h2 className="text-3xl font-bold mb-2 relative z-10">LumiClean</h2>
                  <p className="text-green-200/90 mb-6">Window Washing Services</p>
                </div>
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm flex-grow flex flex-col">
                  <div className={`mb-6 leading-relaxed flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>Professional cleaning services for both residential and commercial properties. We bring sparkle to your space with eco-friendly solutions and attention to detail.</p>
                  </div>
                  <button
                    onClick={() => handleButtonClick('clean')}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/button"
                  >
                    <span>Explore LumiClean</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div 
              className="animate-fade-in-up delay-400 group h-full relative"
              onMouseEnter={() => setIsHovering('learn')}
              onMouseLeave={() => setIsHovering(null)}
            >
              {isHovering === 'learn' && (
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-white p-2 rounded-full animate-pulse">
                  <Star className="w-5 h-5" />
                </div>
              )}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl hover:bg-white/20 border border-white/20 h-full flex flex-col">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 text-white relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <GraduationCap className="w-12 h-12 mb-4 relative z-10" />
                  <h2 className="text-3xl font-bold mb-2 relative z-10">LumiLearn</h2>
                  <p className="text-yellow-200/90">Comprehensive computer tutorials</p>
                </div>
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm flex-grow flex flex-col">
                  <div className={`mb-6 leading-relaxed flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>Personalized K-12 tutoring services designed to help students shine. We illuminate the path to academic success with patience and expertise.</p>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleButtonClick('learn')}
                      className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/button"
                    >
                      <span>Explore LumiLearn</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-500 text-sm animate-fade-in-up delay-500">
          Made by LumiTech
        </footer>
      </div>
    </div>
  </div>
  );
}

export default LandingPage;
