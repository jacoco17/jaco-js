import { motion } from 'framer-motion';
import { useState } from 'react';
import jaco from '../assets/jaco.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiHtml5, SiCss3, SiPython, SiTailwindcss } from 'react-icons/si';

export default function HeroAbout() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { icon: <FaReact className="text-3xl text-blue-400" />, name: "React", level: 90 },
    { icon: <IoLogoJavascript className="text-3xl text-yellow-400" />, name: "JavaScript", level: 85 },
    { icon: <SiHtml5 className="text-3xl text-orange-500" />, name: "HTML", level: 95 },
    { icon: <SiCss3 className="text-3xl text-blue-500" />, name: "CSS", level: 90 },
    { icon: <SiPython className="text-3xl text-blue-600" />, name: "Python", level: 75 },
    { icon: <SiTailwindcss className="text-3xl text-cyan-400" />, name: "Tailwind", level: 85 },
  ];

  const experiences = [
    { 
      year: "2022-Present", 
      title: "Front-End Developer", 
      company: "Tech Solutions Inc.", 
      description: "Developing responsive and interactive user interfaces using React and modern JavaScript." 
    },
    { 
      year: "2020-2022", 
      title: "Web Developer Intern", 
      company: "Digital Creations", 
      description: "Assisted in building web applications and gained hands-on experience with various front-end technologies." 
    }
  ];

  const education = [
    { 
      year: "2019-2023", 
      degree: "BS Information Technology", 
      institution: "University of Technology", 
      description: "Specialized in web development and software engineering with focus on modern frameworks and methodologies." 
    }
  ];
  
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:h-screen">
        
        {/* Top Section - Hero */}
        <div className="flex-grow flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between">
          {/* Left Side - Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-5/12 mb-12 md:mb-0 relative"
          >
            <div className="relative">
              <div className="relative mx-auto md:mx-0 z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20">
                  <img 
                    src={jaco} 
                    alt="Riean Bob Sibul" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 blur-xl opacity-70"></div>
                
                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 flex items-center bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/30 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-xs text-gray-300">Available for work</span>
                </div>
              </div>
              
              {/* Background gradient circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl -z-10"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Side - Intro & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-6/12 text-center md:text-left"
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text mb-4">
                RIEAN BOB SIBUL
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
                Front-End Developer & IT Student
              </h2>
            </div>
            
            <div className="mb-8 relative">
              <p className="text-gray-300 text-lg leading-relaxed">
                Creative front-end developer based in Zamboanga City with a passion for building responsive, user-friendly interfaces. I specialize in React development and modern JavaScript frameworks.
              </p>
              
              {/* Decorative quote marks */}
              <div className="absolute -top-5 -left-10 opacity-10 text-blue-500 text-6xl font-serif hidden md:block">"</div>
              <div className="absolute -bottom-5 -right-10 opacity-10 text-blue-500 text-6xl font-serif hidden md:block">"</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-full hover:bg-blue-400/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
            
            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">Zamboanga City, PH</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="font-medium text-white">3+ Years</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Education</p>
                <p className="font-medium text-white">BS Information Technology</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Languages</p>
                <p className="font-medium text-white">English, Filipino</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section - Skills & Experience Tabs */}
        <motion.div 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 md:mt-0 md:mb-8"
        >
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
              <button 
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'skills' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Skills
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'experience' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Experience
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'education' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Education
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-6 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center mb-3 rounded-full bg-gray-700/70 group-hover:bg-gray-700 transition-all duration-300">
                      {skill.icon}
                      <svg className="absolute -top-1 -right-1 w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-white">{skill.name}</p>
                    
                    {/* Skill Level Indicator */}
                    <div className="w-full h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4 pt-1">
                      <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-gray-800"></div>
                      <div className="w-0.5 h-full bg-gray-700 ml-1.5 mt-2"></div>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <h3 className="text-lg font-bold text-white mr-3">{exp.title}</h3>
                        <span className="text-sm text-blue-400">{exp.company}</span>
                        <span className="ml-auto px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs backdrop-blur-sm border border-blue-500/20">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4 pt-1">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-800"></div>
                      <div className="w-0.5 h-full bg-gray-700 ml-1.5 mt-2"></div>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <h3 className="text-lg font-bold text-white mr-3">{edu.degree}</h3>
                        <span className="text-sm text-indigo-400">{edu.institution}</span>
                        <span className="ml-auto px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs backdrop-blur-sm border border-indigo-500/20">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 