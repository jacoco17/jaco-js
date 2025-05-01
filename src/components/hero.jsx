import { motion } from 'framer-motion';
import jaco from '../assets/jaco.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center lg:text-left lg:flex lg:items-center lg:gap-12"
        >
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
              <img 
                src={jaco} 
                alt="RIEN BOBERTS" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                RIEAN BOB SIBUL
              </h1>
              <h2 className="text-xl md:text-2xl text-cyan-400 mt-2 font-semibold">
                Front-End Developer & IT Student
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Front-End Developer based in Zamboanga City with a focus on creating efficient and responsive user interfaces.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-cyan-400 font-semibold mb-2">Core Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Node.js', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View Portfolio
              </button>
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300 transform hover:-translate-y-1">
                Download CV
              </button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}