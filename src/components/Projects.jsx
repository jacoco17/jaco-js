import { motion } from 'framer-motion';

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
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-gray-900 font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 