import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Router>
      <div className={`${darkMode ? 'bg-[#0A1122] text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-500`}>
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollPosition > 50 
              ? darkMode
                ? 'bg-[#0A1122]/80 backdrop-blur-md border-b border-[#4361ee]/10'
                : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 focus:outline-none">
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                      darkMode
                        ? 'bg-gradient-to-br from-[#22d3ee] to-[#a855f7] shadow-lg shadow-purple-500/20'
                        : 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20'
                    }`}
                  >
                    <span className="text-white font-bold text-xl">R</span>
                  </motion.div>
                </div>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`hidden sm:block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Riean Bob Sibul
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {['home', 'about', 'projects', 'experience', 'blog', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 text-sm font-medium ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } rounded-full transition-all duration-300 hover:bg-white/10 relative group focus:outline-none`}
                  >
                    <span className="relative z-10 capitalize">{item}</span>
                    <span className={`absolute bottom-1.5 left-4 right-4 h-0.5 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-[#22d3ee] to-[#a855f7]' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                    } transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left`} />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Social Icons - Desktop Only */}
                <div className="hidden md:flex items-center gap-3">
                  <a 
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`text-lg ${
                      darkMode ? 'text-gray-400 hover:text-[#22d3ee]' : 'text-gray-500 hover:text-blue-600'
                    } transition-colors`}
                  >
                    <FiGithub />
                  </a>
                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`text-lg ${
                      darkMode ? 'text-gray-400 hover:text-[#22d3ee]' : 'text-gray-500 hover:text-blue-600'
                    } transition-colors`}
                  >
                    <FiLinkedin />
                  </a>
                </div>
                
                {/* Theme Toggle */}
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  } transition-colors focus:outline-none`}
                >
                  {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`md:hidden p-2 rounded-full ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  } transition-colors focus:outline-none`}
                >
                  {isOpen ? (
                    <HiX className="h-6 w-6" />
                  ) : (
                    <HiMenuAlt4 className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className={`px-4 py-4 space-y-2 ${
                  darkMode
                    ? 'bg-[#0A1122]/95 backdrop-blur-md'
                    : 'bg-white/95 backdrop-blur-md'
                }`}>
                  {['home', 'about', 'projects', 'experience', 'blog', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
                        darkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-[#1a2747]/60' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      } transition-colors duration-300 focus:outline-none capitalize`}
                    >
                      {item}
                    </button>
                  ))}
                  
                  {/* Social links for mobile */}
                  <div className="flex gap-4 px-4 pt-4 border-t border-gray-700/20">
                    <a 
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-full ${
                        darkMode ? 'text-gray-400 hover:text-[#22d3ee] hover:bg-[#1a2747]/60' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      <FiGithub className="text-xl" />
                    </a>
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-full ${
                        darkMode ? 'text-gray-400 hover:text-[#22d3ee] hover:bg-[#1a2747]/60' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      <FiLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Main Content */}
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

// Custom NavLink component for desktop
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group"
    >
      {children}
      <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

// Custom NavLink component for mobile
function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
