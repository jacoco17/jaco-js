import React, { useState, useEffect } from "react";
import profile from "../assets/bg.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "Next.js", level: 75 },
    { name: "Git", level: 80 }
  ];

  const personalInfo = [
    { label: "Age", value: "22" },
    { label: "Location", value: "Zamboanga City, Philippines" },
    { label: "Education", value: "BS Information Technology" },
    { label: "Experience", value: "3+ years in Web Development" },
    { label: "Languages", value: "English, Filipino" },
    { label: "Availability", value: "Open for Projects" },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.22676%200C1.91374%200%202.45351%200.539773%202.45351%201.22676C2.45351%201.91374%201.91374%202.45351%201.22676%202.45351C0.539773%202.45351%200%201.91374%200%201.22676C0%200.539773%200.539773%200%201.22676%200Z%22%20fill%3D%22rgba(200%2C200%2C200%2C0.15)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"></div>
      
      <motion.div 
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light tracking-tighter text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-px w-16 mx-auto bg-emerald-400/50"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Profile & Info */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile Image & Info Card */}
            <div className="relative border border-zinc-800 p-8">
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400"></div>
              
              <div className="mb-8">
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="w-48 h-48 object-cover mx-auto grayscale contrast-125 brightness-90"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-light text-white mb-2">Personal Information</h3>
                  <div className="h-px w-12 bg-emerald-400/50 mb-4"></div>
                </div>
                
                <div className="space-y-4">
                  {personalInfo.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 py-2 border-b border-zinc-800/50">
                      <p className="text-zinc-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
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
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-7 space-y-12"
          >
            {/* Biography */}
            <div>
              <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-4">Biography</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I am a frontend developer with a passion for creating beautiful, responsive websites and applications. With over 3 years of experience, I've developed a strong foundation in modern web technologies and best practices.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My approach to web development combines clean code, thoughtful design, and attention to detail. I believe in creating digital experiences that are not only visually appealing but also highly functional and user-friendly.
              </p>
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-zinc-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-zinc-800">
                      <div 
                        className="h-full bg-emerald-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Summary */}
            <div className="space-y-6">
              <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-4">Experience</h3>
              
              <div className="border-l-2 border-zinc-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[7px] top-1"></div>
                <h4 className="text-xl font-light text-white">Frontend Developer</h4>
                <p className="text-zinc-500 text-sm mb-3">2021 - Present</p>
                <p className="text-zinc-400">Developing responsive web applications using React.js and implementing UI/UX designs with modern CSS frameworks like Tailwind.</p>
              </div>
              
              <div className="border-l-2 border-zinc-800 pl-6 relative">
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[7px] top-1"></div>
                <h4 className="text-xl font-light text-white">Web Developer (Intern)</h4>
                <p className="text-zinc-500 text-sm mb-3">2020 - 2021</p>
                <p className="text-zinc-400">Assisted in building and maintaining client websites, focusing on frontend development with HTML, CSS, and JavaScript.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
