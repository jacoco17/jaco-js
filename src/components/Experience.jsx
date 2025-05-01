import { motion } from 'framer-motion';

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

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-xl font-medium text-white">Full Stack Developer</h4>
              <p className="text-blue-400 mb-2">2022 - Present</p>
              <p className="text-gray-400">
                Developing and maintaining web applications using React, JavaScript, and Python. 
                Building responsive and user-friendly interfaces while implementing efficient backend solutions.
              </p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-6">
              <h4 className="text-xl font-medium text-white">Frontend Developer</h4>
              <p className="text-indigo-400 mb-2">2020 - 2022</p>
              <p className="text-gray-400">
                Created interactive and responsive user interfaces using React and modern JavaScript.
                Collaborated with design teams to implement pixel-perfect designs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 