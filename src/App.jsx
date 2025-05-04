import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
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
      <div className="bg-zinc-950 text-zinc-200 min-h-screen">
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollPosition > 50 
              ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800'
              : 'bg-zinc-950/50 backdrop-blur-sm md:bg-transparent'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 focus:outline-none">
                <div className="text-2xl font-light tracking-tight">
                  <span className="text-white font-medium">R</span>
                  <span className="text-emerald-400 font-medium">.</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-zinc-400 hover:text-white text-sm uppercase tracking-wide font-medium transition-colors duration-300 focus:outline-none"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-6">
                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-5">
                  <a 
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden text-zinc-400 hover:text-white transition-colors focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <HiX className="h-6 w-6" />
                  ) : (
                    <HiMenu className="h-6 w-6" />
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
                <div className="bg-zinc-900/95 backdrop-blur-md px-4 py-5 space-y-3 border-b border-zinc-800">
                  {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-4 py-2 text-zinc-400 hover:text-white text-base uppercase tracking-wide font-light transition-colors duration-300 focus:outline-none"
                    >
                      {item}
                    </button>
                  ))}
                  
                  {/* Social links for mobile */}
                  <div className="flex gap-6 px-4 pt-4 border-t border-zinc-800">
                    <a 
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-emerald-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-emerald-400 transition-colors"
                      aria-label="LinkedIn"
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
        <main className="pt-16">
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
