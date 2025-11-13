import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LumiTech from './pages/LumiTech';
import LumiClean from './pages/LumiClean';
import LumiLearn from './pages/LumiLearn';

// Wrapper component to handle the theme and navigation
const AppContent = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check user's system preference or use dark mode by default
    return !localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark';
  });

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Handle navigation
  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  // Update the theme class on the document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Apply dark mode class to the html element
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      html.style.backgroundColor = '#0f172a';
      html.style.color = '#f8fafc';
    } else {
      html.classList.remove('dark');
      html.style.backgroundColor = '#f1f5f9';
      html.style.color = '#1e293b';
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={
          <LandingPage 
            onNavigate={handleNavigate} 
            onToggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
          />
        } />
        <Route path="/tech" element={
          <LumiTech 
            onNavigate={handleNavigate} 
            onToggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
          />
        } />
        <Route path="/clean" element={
          <LumiClean 
            onNavigate={handleNavigate} 
            onToggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
          />
        } />
        <Route path="/learn" element={
          <LumiLearn 
            onNavigate={handleNavigate} 
            onToggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
          />
        } />
        {/* Add a catch-all route that redirects to home */}
        <Route path="*" element={
          <LandingPage 
            onNavigate={handleNavigate} 
            onToggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
          />
        } />
      </Routes>
    </div>
  );
};

// Main App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
