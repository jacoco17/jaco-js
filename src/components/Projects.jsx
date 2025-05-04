import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "Capstone - E-commerce and Logistics System",
    description: "A comprehensive e-commerce and logistics system designed for direct suppliers, featuring inventory management, order processing, and delivery tracking.",
    technologies: ["React", "JavaScript", "Python", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "FJ Films Photography Booking System",
    description: "A professional appointment and booking system for FJ Films Photography, enabling clients to schedule sessions and manage their appointments.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Handmade Treasure Store",
    description: "An e-commerce platform for handmade crafts and unique treasures, featuring product listings, shopping cart, and secure checkout.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Pokemon Game",
    description: "An interactive Pokemon game built with React, featuring character selection, battles, and score tracking.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Todo List Application",
    description: "A modern todo list application with task management, priority settings, and completion tracking.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 blur-sm"></div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">Explore my latest work and projects that showcase my skills and expertise in web development and design.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative overflow-hidden"
            >
              <div className={`flex flex-col md:flex-row bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 shadow-lg transition-all duration-500 ${activeIndex === index ? 'shadow-blue-500/20' : ''}`}>
                <div className="relative md:w-2/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                
                <div className="relative p-8 md:w-3/5 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="h-px w-8 bg-blue-400 mr-3"></div>
                      <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Project {index + 1}</p>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-blue-400/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <a
                      href={project.link}
                      className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full group/button"
                    >
                      <span className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-blue-500/40 to-indigo-600/40 blur-xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 text-white font-medium group-hover/button:text-white transition-colors duration-300">
                        View Project
                      </span>
                      <svg
                        className="w-5 h-5 relative z-10 text-blue-400 group-hover/button:text-white transition-colors duration-300 transform group-hover/button:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 