import React, { useState, useEffect } from "react";
import profile from "../assets/bg.jpg";
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { 
      icon: <FaReact />, 
      name: "React", 
      level: "Advanced", 
      description: "Component-based UI development with React hooks and context API"
    },
    { 
      icon: <IoLogoJavascript />, 
      name: "JavaScript", 
      level: "Advanced", 
      description: "ES6+, async/await, functional programming patterns"
    },
    { 
      icon: <SiHtml5 />, 
      name: "HTML", 
      level: "Expert", 
      description: "Semantic markup, accessibility best practices"
    },
    { 
      icon: <SiCss3 />, 
      name: "CSS", 
      level: "Expert", 
      description: "Flexbox, Grid, animations, responsive design"
    },
    { 
      icon: <SiTailwindcss />, 
      name: "Tailwind", 
      level: "Advanced", 
      description: "Utility-first CSS for rapid UI development"
    },
    { 
      icon: <FaNodeJs />, 
      name: "Node.js", 
      level: "Intermediate", 
      description: "Server-side JavaScript, REST API development"
    },
    { 
      icon: <SiNextdotjs />, 
      name: "Next.js", 
      level: "Intermediate", 
      description: "Server-side rendering, static site generation"
    },
    { 
      icon: <FaGitAlt />, 
      name: "Git", 
      level: "Intermediate", 
      description: "Version control, collaborative development workflows"
    }
  ];

  const experiences = [
    {
      position: "Frontend Developer",
      company: "Digital Solutions Inc.",
      period: "2021 - Present",
      description: "Developing responsive web applications using React.js and implementing UI/UX designs with modern CSS frameworks like Tailwind."
    },
    {
      position: "Web Developer (Intern)",
      company: "Tech Innovators",
      period: "2020 - 2021",
      description: "Assisted in building and maintaining client websites, focusing on frontend development with HTML, CSS, and JavaScript."
    }
  ];

  const personalInfo = [
    { label: "Age", value: "22" },
    { label: "Location", value: "Zamboanga City, Philippines" },
    { label: "Education", value: "BS Information Technology" },
    { label: "Experience", value: "2+ years in Web Development" },
    { label: "Languages", value: "English, Filipino" },
    { label: "Availability", value: "Open for Projects" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isToggled 
        ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100' 
        : 'bg-[#0A1122] bg-opacity-95 bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A2747\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
    } py-12 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
      <motion.div 
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-7xl mx-auto"
      >
   
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r 
            ${isToggled ? 'from-blue-600 to-indigo-700' : 'from-cyan-400 to-purple-500'} 
            text-transparent bg-clip-text inline-block`}>
            About Me
          </h1>
          <div className={`h-1 w-24 mx-auto rounded ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Profile */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-4 space-y-8"
          >
            {/* Profile Image Card */}
            <div className={`relative rounded-2xl overflow-hidden transition-all duration-500
              ${isToggled 
                ? 'bg-white shadow-lg border border-gray-200' 
                : 'bg-gray-800/30 backdrop-blur-lg border border-gray-700/50'
              } p-8`}
            >
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className={`absolute inset-0 rounded-full 
                  ${isToggled ? 'bg-gradient-to-tr from-blue-500/20 to-indigo-500/20' : 'bg-gradient-to-tr from-cyan-500/20 to-purple-500/20'} 
                  animate-pulse-slow`}></div>
                
                <img 
                  src={profile} 
                  alt="RIEN BOBERTS" 
                  className="w-full h-full object-cover rounded-full p-1"
                />
                
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center
                  ${isToggled ? 'bg-blue-600/90' : 'bg-purple-500/90'}`}>
                  <p className="text-white font-bold text-2xl">2+</p>
                </div>
              </div>
              
              <h2 className={`text-2xl font-bold text-center mb-1
                ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                RIEN BOBERTS
              </h2>
              
              <p className={`text-center mb-6 
                ${isToggled ? 'text-blue-600' : 'text-cyan-400'} font-medium`}>
                Frontend Developer
              </p>
              
              <div className="flex justify-center space-x-4">
                {[
                  { icon: <FaLinkedinIn />, link: "#" },
                  { icon: <FaGithub />, link: "#" },
                  { icon: <FaTwitter />, link: "#" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${isToggled 
                        ? 'bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white' 
                        : 'bg-gray-700/50 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900'}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Personal Info Card */}
            <div className={`rounded-2xl transition-all duration-500
              ${isToggled 
                ? 'bg-white shadow-lg border border-gray-200' 
                : 'bg-gray-800/30 backdrop-blur-lg border border-gray-700/50'
              } p-8`}
            >
              <h2 className={`text-xl font-semibold mb-6 flex items-center
                ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                <span className={`w-8 h-1 rounded mr-3 ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></span>
                Personal Information
              </h2>
              
              <div className="space-y-5">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 
                      ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></div>
                    <div>
                      <p className={`text-sm ${isToggled ? 'text-gray-500' : 'text-gray-400'}`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-8 space-y-8"
          >
            {/* Navigation Tabs */}
            <div className={`rounded-xl overflow-hidden transition-all duration-500
              ${isToggled 
                ? 'bg-white shadow-lg border border-gray-200' 
                : 'bg-gray-800/30 backdrop-blur-lg border border-gray-700/50'}`}
            >
              <div className="flex">
                {["about", "skills", "experience"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-center capitalize font-medium transition-all duration-300
                      ${activeTab === tab
                        ? isToggled 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-cyan-400 border-b-2 border-cyan-400'
                        : isToggled 
                          ? 'text-gray-500 hover:text-gray-700' 
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className={`rounded-2xl transition-all duration-500
              ${isToggled 
                ? 'bg-white shadow-lg border border-gray-200' 
                : 'bg-gray-800/30 backdrop-blur-lg border border-gray-700/50'
              } p-8 min-h-[500px]`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "about" && (
                    <div>
                      <h2 className={`text-2xl font-semibold mb-6 flex items-center
                        ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                        <span className={`w-8 h-1 rounded mr-3 ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></span>
                        About Me
                      </h2>
                      
                      <div className={`space-y-6 ${isToggled ? 'text-gray-700' : 'text-gray-300'}`}>
                        <p className="text-lg leading-relaxed">
                          I'm a passionate Frontend Developer with expertise in creating responsive, interactive web applications. 
                          Currently studying Information Technology and gaining practical experience through hands-on web development projects.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                          My journey in web development started with HTML, CSS, and vanilla JavaScript. Over time, I've expanded my 
                          skillset to include modern frameworks and libraries like React.js and Tailwind CSS.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                          I'm dedicated to writing clean, efficient code and creating intuitive user experiences. I enjoy 
                          problem-solving and continuously learning new technologies to stay current in this ever-evolving field.
                        </p>
                      </div>
                      
                      <div className={`mt-8 p-5 rounded-xl ${isToggled ? 'bg-gray-50' : 'bg-gray-800/30'}`}>
                        <blockquote className={`text-lg italic border-l-4 ${isToggled ? 'border-blue-600 text-gray-600' : 'border-cyan-400 text-gray-400'} pl-4`}>
                          "I believe that great design combined with clean code creates memorable digital experiences that solve real-world problems."
                        </blockquote>
                      </div>
                    </div>
                  )}

                  {activeTab === "skills" && (
                    <div>
                      <h2 className={`text-2xl font-semibold mb-8 flex items-center
                        ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                        <span className={`w-8 h-1 rounded mr-3 ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></span>
                        Technical Expertise
                      </h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.1,
                              ease: "easeOut" 
                            }}
                            className={`hexagon-container relative ${
                              isToggled 
                                ? 'bg-gradient-to-br from-gray-50 to-gray-100 shadow-md' 
                                : 'bg-gray-800/50 backdrop-blur-sm'
                            } rounded-xl border ${
                              isToggled 
                                ? 'border-gray-200' 
                                : 'border-gray-700/50'
                            } p-6 h-full overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
                          >
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform translate-x-8 -translate-y-8">
                              <div className={`hexagon ${
                                isToggled 
                                  ? 'bg-blue-600' 
                                  : 'bg-cyan-400'
                              }`}></div>
                            </div>
                            
                            <div className={`text-3xl mb-4 transition-all duration-300 ${
                              isToggled 
                                ? 'text-blue-600 group-hover:text-blue-700' 
                                : 'text-cyan-400 group-hover:text-cyan-300'
                            }`}>
                              {skill.icon}
                            </div>
                            
                            <h3 className={`text-lg font-semibold mb-1 ${
                              isToggled ? 'text-gray-900' : 'text-white'
                            }`}>
                              {skill.name}
                            </h3>
                            
                            <div className={`inline-block px-2 py-1 rounded-md text-xs mb-3 ${
                              isToggled 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-gray-700 text-cyan-400'
                            }`}>
                              {skill.level}
                            </div>
                            
                            <p className={`text-sm ${
                              isToggled ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {skill.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div>
                      <h2 className={`text-2xl font-semibold mb-6 flex items-center
                        ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                        <span className={`w-8 h-1 rounded mr-3 ${isToggled ? 'bg-blue-600' : 'bg-cyan-400'}`}></span>
                        Work Experience
                      </h2>
                      
                      <div className="space-y-8">
                        {experiences.map((exp, index) => (
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index} 
                            className={`relative pl-8 pb-8 ${index !== experiences.length - 1 ? 'border-l-2' : ''} 
                              ${isToggled ? 'border-blue-200' : 'border-gray-700'}`}
                          >
                            <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full border-2
                              ${isToggled 
                                ? 'bg-white border-blue-600' 
                                : 'bg-gray-900 border-cyan-400'}`}>
                            </div>
                            
                            <div className={`absolute top-0 left-8 text-sm font-medium py-1 px-3 rounded-full
                              ${isToggled 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-gray-800 text-cyan-400'}`}>
                              {exp.period}
                            </div>
                            
                            <div className="mt-8">
                              <h3 className={`text-xl font-semibold ${isToggled ? 'text-gray-900' : 'text-white'}`}>
                                {exp.position}
                              </h3>
                              <p className={`text-sm mb-3 ${isToggled ? 'text-blue-600' : 'text-cyan-400'}`}>
                                {exp.company}
                              </p>
                              <p className={`${isToggled ? 'text-gray-700' : 'text-gray-300'}`}>
                                {exp.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-16 p-10 rounded-2xl text-center transition-all duration-500
            ${isToggled 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl' 
              : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            I'm currently available for freelance projects or full-time opportunities. Let's create something amazing.
          </p>
          <button className={`px-8 py-3 rounded-full font-medium transition-all duration-300
            ${isToggled 
              ? 'bg-white text-blue-600 hover:bg-blue-50' 
              : 'bg-white text-purple-600 hover:bg-purple-50'}`}>
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .hexagon {
          width: 100%;
          height: 100%;
          background: currentColor;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .hexagon-container {
          transition: all 0.3s ease;
        }
        
        .hexagon-container:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About;
