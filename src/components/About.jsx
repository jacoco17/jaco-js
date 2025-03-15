import React, { useState } from "react";
import profile from "../assets/bg.jpg";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5, SiCss3 } from "react-icons/si";

const About = () => {
  const [isToggled, setIsToggled] = useState(false);

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
    <div className={`min-h-screen transition-colors duration-500 ${
      isToggled 
        ? 'bg-gradient-to-br from-gray-100 via-white to-gray-100' 
        : 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
    } py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r 
          ${isToggled ? 'from-blue-600 to-purple-600' : 'from-cyan-400 to-purple-500'} 
          text-transparent bg-clip-text`}>
          About Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="relative hidden lg:block">
              <div 
                onClick={() => setIsToggled(!isToggled)}
                className={`relative w-64 h-32 mx-auto lg:mx-0 rounded-full transition-all duration-500
                  ${isToggled 
                    ? 'bg-white shadow-lg border-blue-400/30' 
                    : 'bg-gray-800/50 backdrop-blur-sm border-cyan-400/30'
                  } border-2 cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20`}
              >
                <div 
                  className={`absolute top-0 w-32 h-32 rounded-full transition-all duration-500 ease-in-out transform 
                    ${isToggled ? 'translate-x-32 bg-blue-500' : 'translate-x-0 bg-cyan-400'}
                    flex items-center justify-center`}
                >
                  <img 
                    src={profile} 
                    alt="John Francis" 
                    className="w-28 h-28 object-cover rounded-full border-2 border-gray-900/30"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className={`text-sm ${isToggled ? 'text-gray-600' : 'text-gray-400'}`}>
                  {isToggled ? 'Light Mode' : 'Dark Mode'}
                </p>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="relative group lg:hidden">
              <img 
                src={profile} 
                alt="John Francis" 
                className={`w-64 h-64 object-cover rounded-2xl mx-auto transition-all duration-500 transform group-hover:scale-105 
                  ${isToggled ? 'border-blue-400/30' : 'border-cyan-400/30'} border-2`}
              />
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500
                ${isToggled 
                  ? 'bg-gradient-to-tr from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-tr from-cyan-500/20 to-purple-500/20'
                } group-hover:animate-pulse`}></div>
            </div>

            {/* Personal Info Card */}
            <div className={`transition-all duration-500 rounded-xl p-6 
              ${isToggled 
                ? 'bg-white/80 border-gray-200' 
                : 'bg-gray-800/50 backdrop-blur-sm border-gray-700/50'
              } border`}>
              <h2 className={`text-xl font-semibold mb-4 
                ${isToggled ? 'text-blue-600' : 'text-cyan-400'}`}>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="space-y-1">
                    <p className={`text-sm ${isToggled ? 'text-gray-600' : 'text-gray-400'}`}>
                      {info.label}
                    </p>
                    <p className={`font-medium ${isToggled ? 'text-gray-900' : 'text-gray-200'}`}>
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Description */}
            <div className="prose max-w-none">
              <p className={`text-lg leading-relaxed transition-colors duration-500
                ${isToggled ? 'text-gray-700' : 'text-gray-300'}`}>
                I'm a passionate Full-Stack Developer and IT student with a keen interest in creating 
                innovative web solutions. My journey in technology started with a curiosity about how 
                things work on the internet, which led me to pursue a career in web development.
              </p>
           
            </div>

            {/* Skills Card */}
            <div className={`transition-all duration-500 rounded-xl p-6 
              ${isToggled 
                ? 'bg-white/80 border-gray-200' 
                : 'bg-gray-800/50 backdrop-blur-sm border-gray-700/50'
              } border`}>
              <h2 className={`text-xl font-semibold mb-6 
                ${isToggled ? 'text-blue-600' : 'text-cyan-400'}`}>
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`group p-4 rounded-lg border transition-all duration-300
                      ${isToggled 
                        ? 'bg-gray-50 border-gray-200 hover:border-blue-400/50' 
                        : 'bg-gray-700/30 border-gray-600/50 hover:border-cyan-400/50'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`transition-colors duration-300
                        ${isToggled 
                          ? 'text-blue-600 group-hover:text-blue-500' 
                          : 'text-cyan-400 group-hover:text-cyan-300'
                        }`}>
                        {skill.icon}
                      </div>
                      <div>
                        <p className={`font-medium ${isToggled ? 'text-gray-900' : 'text-gray-200'}`}>
                          {skill.name}
                        </p>
                        <p className={`text-sm ${isToggled ? 'text-gray-600' : 'text-gray-400'}`}>
                          {skill.level}
                        </p>
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
