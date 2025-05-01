import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
                  >
                    <span className="text-gray-900 font-bold text-xl">RB</span>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden sm:block text-sm font-medium text-gray-300"
                  >
                    Riean Bob Sibul
                  </motion.span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group">
                  Home
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
                <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group">
                  About
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
                <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group">
                  Projects
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
                <button onClick={() => scrollToSection('experience')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group">
                  Experience
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group">
                  Contact
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt4 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-lg">
                  <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
                    About
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
                    Experience
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Add padding to account for fixed navbar */}
        <div className="pt-16">
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
          <section id="contact">
            <Contact />
          </section>
        </div>
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
