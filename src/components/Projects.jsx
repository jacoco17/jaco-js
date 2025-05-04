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
    <section id="projects" className="relative min-h-screen bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.22676%200C1.91374%200%202.45351%200.539773%202.45351%201.22676C2.45351%201.91374%201.91374%202.45351%201.22676%202.45351C0.539773%202.45351%200%201.91374%200%201.22676C0%200.539773%200.539773%200%201.22676%200Z%22%20fill%3D%22rgba(200%2C200%2C200%2C0.15)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light tracking-tighter text-white mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="h-px w-16 mx-auto bg-emerald-400/50 mb-8"></div>
          <p className="text-zinc-400 max-w-xl mx-auto">A collection of my recent work showcasing my skills in web development and design.</p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group"
            >
              <div className={`flex flex-col md:flex-row border border-zinc-800 ${activeIndex === index ? 'border-emerald-400/30' : ''} transition-colors duration-300`}>
                {/* Left - Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-900/50 group-hover:bg-zinc-900/20 transition-colors duration-500"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {index % 2 === 0 && (
                    <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  {index % 2 === 1 && (
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
                
                {/* Right - Content */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <p className="text-emerald-400 font-light tracking-widest uppercase text-xs mb-2">Project {index + 1}</p>
                    <h3 className="text-2xl font-light text-white mb-4">{project.title}</h3>
                    <p className="text-zinc-400 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-zinc-800 text-zinc-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    className="self-start px-6 py-2 border border-zinc-800 text-white hover:border-emerald-400 transition-colors duration-300 inline-flex items-center gap-2 group/btn"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 text-emerald-400 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
                {index % 2 === 0 && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                {index % 2 === 1 && (
                  <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 