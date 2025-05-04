import { motion } from 'framer-motion';
import jaco from '../assets/jaco.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.22676%200C1.91374%200%202.45351%200.539773%202.45351%201.22676C2.45351%201.91374%201.91374%202.45351%201.22676%202.45351C0.539773%202.45351%200%201.91374%200%201.22676C0%200.539773%200.539773%200%201.22676%200Z%22%20fill%3D%22rgba(200%2C200%2C200%2C0.15)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"></div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-[360px] md:h-[360px]">
              {/* Image frame */}
              <div className="absolute inset-0 border-2 border-zinc-800 rounded-sm">
                <div className="absolute inset-0 m-[-8px] border border-zinc-800"></div>
              </div>
              
              <div className="absolute inset-0 p-3">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={jaco} 
                    alt="RIEAN BOB SIBUL" 
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  />
                </div>
              </div>
              
              {/* Accent corner */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400"></div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <div className="space-y-6">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-emerald-400 font-light mb-4 tracking-widest uppercase text-sm"
                >
                  Frontend Developer
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8"
                >
                  RIEAN BOB <br className="hidden md:block" /> 
                  <span className="text-emerald-400">SIBUL</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-lg text-zinc-400 leading-relaxed mb-8"
                >
                  I craft clean, responsive interfaces with modern web technologies. 
                  Based in Zamboanga City, I specialize in creating minimalist and 
                  functional digital experiences.
                </motion.p>
              </div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-12 mb-8 mt-8"
              >
                <div>
                  <p className="text-3xl font-light text-white">3+</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-white">15+</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-white">BS</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">IT Degree</p>
                </div>
              </motion.div>
              
              {/* CTA and social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              >
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white hover:border-emerald-400 transition-colors duration-300 min-w-[200px] text-center"
                >
                  Contact me
                </a>
                
                <div className="flex items-center gap-6 pl-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="mailto:contact@example.com"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}