import React from "react";
import profile from "../assets/jaco.png";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5, SiCss3 } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaReact className="text-2xl" />, name: "React.js", level: "Advanced" },
    { icon: <IoLogoJavascript className="text-2xl" />, name: "JavaScript", level: "Advanced" },
    { icon: <SiHtml5 className="text-2xl" />, name: "HTML", level: "Expert" },
    { icon: <SiCss3 className="text-2xl" />, name: "CSS", level: "Expert" },
    { icon: <FaNodeJs className="text-2xl" />, name: "Node.js", level: "Intermediate" },
    { icon: <FaGitAlt className="text-2xl" />, name: "Git", level: "Intermediate" },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="relative group">
              <img 
                src={profile} 
                alt="John Francis" 
                className="w-64 h-64 object-cover rounded-2xl mx-auto lg:mx-0 border-2 border-cyan-400/30 transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 group-hover:animate-pulse"></div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-cyan-400 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-gray-200 font-medium">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Description */}
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full-Stack Developer and IT student with a keen interest in creating 
                innovative web solutions. My journey in technology started with a curiosity about how 
                things work on the internet, which led me to pursue a career in web development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Currently focusing on modern web technologies and best practices, I'm constantly learning 
                and improving my skills to deliver high-quality, user-centric applications that make a 
                difference.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-cyan-400 mb-6">Technical Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group p-4 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400 group-hover:text-cyan-300">
                        {skill.icon}
                      </div>
                      <div>
                        <p className="text-gray-200 font-medium">{skill.name}</p>
                        <p className="text-gray-400 text-sm">{skill.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
