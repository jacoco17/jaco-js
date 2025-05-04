import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: "Frontend Development",
    items: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Backend Development",
    items: ["Python"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "VS Code", "Chrome DevTools"]
  }
];

const experiences = [
  {
    position: "Full Stack Developer",
    period: "2022 - Present",
    description: "Developing and maintaining web applications using React, JavaScript, and Python. Building responsive and user-friendly interfaces while implementing efficient backend solutions."
  },
  {
    position: "Frontend Developer",
    period: "2020 - 2022",
    description: "Created interactive and responsive user interfaces using React and modern JavaScript. Collaborated with design teams to implement pixel-perfect designs."
  }
];

export default function Experience() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoverExp, setHoverExp] = useState(null);
  
  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl font-bold text-white">Skills & Experience</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 blur-sm"></div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">My professional journey and technical expertise that I bring to every project.</p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 flex items-center"
          >
            <div className="h-px w-8 bg-blue-400 mr-3"></div>
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveSkill(index)}
                onHoverEnd={() => setActiveSkill(null)}
                className="group relative"
              >
                <div className={`h-full bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/30 ${activeSkill === index ? 'border-blue-500/30 shadow-blue-500/10' : ''}`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-700/30 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-blue-400/30 hover:text-blue-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8 flex items-center"
        >
          <div className="h-px w-8 bg-blue-400 mr-3"></div>
          Professional Experience
        </motion.h3>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoverExp(index)}
              onHoverEnd={() => setHoverExp(null)}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 border border-gray-700/30 overflow-hidden ${hoverExp === index ? 'border-blue-500/30 shadow-blue-500/10' : ''}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{exp.position}</h4>
                  <div className="hidden md:block h-1 w-1 rounded-full bg-blue-400"></div>
                  <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">{exp.period}</span>
                </div>
                
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 