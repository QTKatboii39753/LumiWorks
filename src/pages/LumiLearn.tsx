import { ArrowLeft, GraduationCap, BookOpen, Users, Star, Heart, Lightbulb, Check, Clock, Award } from 'lucide-react';

interface LumiLearnProps {
  onNavigate: (page: 'landing' | 'tech' | 'clean' | 'learn') => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function LumiLearn({ onNavigate, onToggleTheme, isDarkMode }: LumiLearnProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-yellow' : 'glow-yellow-light'} w-96 h-96 top-20 -left-40 animate-glow`}></div>
        <div className={`glow-sphere ${isDarkMode ? 'glow-yellow' : 'glow-yellow-light'} w-80 h-80 bottom-20 -right-40 animate-glow`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => onNavigate('landing')}
            className={`flex items-center ${isDarkMode ? 'text-yellow-500 hover:text-yellow-400' : 'text-yellow-600 hover:text-yellow-700'} font-semibold transition-colors animate-slide-in-left`}
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
            <div className={`p-2 inline-flex items-center justify-center rounded-full ${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} mb-6`}>
              <GraduationCap className={`w-16 h-16 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} animate-float`} strokeWidth={1.5} />
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LumiLearn</h1>
            <p className={`text-xl ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>K-12 Tutoring Services</p>
          </div>

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
                <Check className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Personalized learning plans</span>
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <Award className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Certified educators</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-yellow-500' : 'border-yellow-600'} animate-fade-in-up delay-200 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'}`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Personalized Learning</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                One-on-one tutoring sessions tailored to each student's unique learning style, pace,
                and needs. We adapt our approach to help your child thrive.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-yellow-500' : 'border-yellow-600'} animate-fade-in-up delay-300 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'}`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>All Subjects</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                From math and science to reading and writing, we provide comprehensive support across
                all K-12 subjects to ensure well-rounded academic growth.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-yellow-500' : 'border-yellow-600'} animate-fade-in-up delay-400 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'}`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Confidence Building</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We don't just teach subjects—we help students develop confidence in their abilities
                and cultivate problem-solving skills that last a lifetime.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 ${isDarkMode ? 'border-yellow-500' : 'border-yellow-600'} animate-fade-in-up delay-500 hover:shadow-xl transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'}`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Patient Guidance</h3>
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Learning takes time, and we're here every step of the way. Our patient, encouraging
                approach helps students feel supported and motivated to succeed.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl shadow-xl p-8 text-white text-center animate-fade-in-up delay-200 border border-yellow-500/50">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-4">Helping Students Shine</h3>
            <p className="text-yellow-100 leading-relaxed">
              At LumiLearn, we're passionate about education and committed to making a positive difference
              in students' lives. Portia Lane brings dedication, patience, and expertise to every tutoring
              session, creating a supportive environment where students feel empowered to ask questions,
              make mistakes, and grow. Together, we'll illuminate your child's path to academic success.
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

export default LumiLearn;
