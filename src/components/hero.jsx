import { motion } from 'framer-motion';
import jaco from '../assets/jaco.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCheck } from 'react-icons/fa';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPython } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };
    
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: "React", value: 90, icon: <SiReact /> },
    { name: "JavaScript", value: 85, icon: <SiJavascript /> },
    { name: "HTML", value: 95, icon: <SiHtml5 /> },
    { name: "CSS", value: 90, icon: <SiCss3 /> },
    { name: "Tailwind", value: 85, icon: <SiTailwindcss /> },
    { name: "Python", value: 75, icon: <SiPython /> }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0A1122] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A2747\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Animated background gradient */}
      <div className="absolute pointer-events-none">
        <div className="absolute -top-72 -right-72 w-[40rem] h-[40rem] rounded-full opacity-20 blur-3xl bg-gradient-to-br from-[#2563eb]/30 via-[#6366f1]/30 to-[#a855f7]/30 animate-blob"></div>
        <div className="absolute -bottom-72 -left-72 w-[40rem] h-[40rem] rounded-full opacity-20 blur-3xl bg-gradient-to-br from-[#a855f7]/30 via-[#22d3ee]/30 to-[#2563eb]/30 animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 text-center md:text-left order-2 md:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center mb-6 px-3 py-1.5 bg-[#1a2747]/70 backdrop-blur-md border border-[#4361ee]/20 rounded-full"
            >
              <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
              <span className="text-sm text-gray-300">Available for work</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              RIEAN BOB <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">SIBUL</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl md:text-2xl font-medium text-[#22d3ee] mb-6"
            >
              Front-End Developer & IT Student
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl md:mx-0 mx-auto"
            >
              Creative front-end developer based in Zamboanga City with a passion for 
              building responsive, user-friendly interfaces. I specialize in React 
              development and modern JavaScript frameworks.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <button className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download CV <FaDownload className="text-sm" />
                </span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#a855f7] to-[#22d3ee]"></div>
              </button>
              
              <button className="group relative overflow-hidden px-8 py-3.5 rounded-full text-[#22d3ee] font-medium border-2 border-[#22d3ee] hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-[#22d3ee]"></div>
              </button>
            </motion.div>
            
            {/* Info Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 p-4 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-1">Location</h3>
                <p className="text-white font-medium">Zamboanga City, PH</p>
              </div>
              <div className="backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 p-4 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-1">Experience</h3>
                <p className="text-white font-medium">3+ Years</p>
              </div>
              <div className="backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 p-4 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-1">Education</h3>
                <p className="text-white font-medium">BS Information Technology</p>
              </div>
              <div className="backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 p-4 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-1">Languages</h3>
                <p className="text-white font-medium">English, Filipino</p>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { icon: <FaGithub className="text-lg" />, url: "https://github.com" },
                { icon: <FaLinkedin className="text-lg" />, url: "https://linkedin.com" },
                { icon: <FaEnvelope className="text-lg" />, url: "mailto:contact@example.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 text-white hover:text-[#22d3ee] hover:border-[#22d3ee]/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column - Profile image and skills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-5 order-1 md:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Image container with glass effect */}
              <div className="relative z-20 w-full h-full rounded-full overflow-hidden backdrop-blur-md bg-[#1a2747]/40 border border-[#4361ee]/20 p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={jaco} 
                    alt="RIEAN BOB SIBUL" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute bottom-6 right-2 flex items-center justify-center w-20 h-20 rounded-full backdrop-blur-md bg-gradient-to-br from-[#22d3ee] to-[#a855f7] text-white shadow-lg">
                  <div className="text-center">
                    <p className="font-bold text-xl">3+</p>
                    <p className="text-xs font-medium">Years</p>
                  </div>
                </div>
              </div>
              
              {/* Background skills animation */}
              <div className="absolute inset-0 z-10 skills-orbit">
                {skills.map((skill, index) => {
                  const angle = (index * (360 / skills.length)) * (Math.PI / 180);
                  const x = Math.cos(angle) * 50 + 50;
                  const y = Math.sin(angle) * 50 + 50;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.2, zIndex: 30 }}
                      onMouseEnter={() => setActiveSkill(index)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-md bg-[#1a2747]/80 border border-[#4361ee]/20 flex items-center justify-center transition-all duration-300"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {activeSkill === index ? (
                        <div className="text-center">
                          <div className="flex justify-center text-[#22d3ee]">
                            <FaCheck />
                          </div>
                          <div className="mt-1 text-white text-xs">{skill.value}%</div>
                        </div>
                      ) : (
                        <div className={`text-2xl ${
                          index % 2 === 0 ? 'text-[#22d3ee]' : 'text-[#a855f7]'
                        }`}>
                          {skill.icon}
                        </div>
                      )}
                      
                      {/* Skill tooltip */}
                      {activeSkill === index && (
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1a2747]/90 backdrop-blur-md border border-[#4361ee]/20 px-3 py-1.5 rounded-lg text-white text-sm whitespace-nowrap">
                          {skill.name}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Light glow effect behind profile */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#22d3ee]/30 to-[#a855f7]/30 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .skills-orbit {
          pointer-events: none;
        }
        
        .skills-orbit > div {
          pointer-events: auto;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 8s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        :root {
          --mouse-x: 0.5;
          --mouse-y: 0.5;
        }
      `}</style>
    </div>
  );
}