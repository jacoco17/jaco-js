import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: "Frontend Development",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    items: ["Python", "Node.js", "Express"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "VS Code", "Figma", "Chrome DevTools"]
  }
];

const experiences = [
  {
    position: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2022 - Present",
    description: "Developing and maintaining web applications using React, JavaScript, and Python. Building responsive and user-friendly interfaces while implementing efficient backend solutions."
  },
  {
    position: "Frontend Developer",
    company: "Web Innovators",
    period: "2020 - 2022",
    description: "Created interactive and responsive user interfaces using React and modern JavaScript. Collaborated with design teams to implement pixel-perfect designs."
  }
];

export default function Experience() {
  const [activeSkill, setActiveSkill] = useState(null);
  
  return (
    <section id="experience" className="relative min-h-screen bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
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
            Skills & <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="h-px w-16 mx-auto bg-emerald-400/50 mb-8"></div>
          <p className="text-zinc-400 max-w-xl mx-auto">My professional journey and technical expertise that I bring to every project.</p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-8">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveSkill(index)}
                onHoverEnd={() => setActiveSkill(null)}
                className="group"
              >
                <div className={`relative border border-zinc-800 p-6 ${activeSkill === index ? 'border-emerald-400/30' : ''} transition-colors duration-300`}>
                  {index === 0 && <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
                  {index === 1 && <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
                  {index === 2 && <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
                  
                  <h4 className="text-xl font-light text-white mb-6">{skillGroup.category}</h4>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-emerald-400"></div>
                        <span className="text-zinc-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-8">Professional Experience</h3>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative border border-zinc-800 p-8">
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400"></div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400"></div>
                
                <div className="md:grid md:grid-cols-12 gap-8">
                  {/* Left - Period */}
                  <div className="md:col-span-3 mb-4 md:mb-0">
                    <span className="text-zinc-500 text-sm block">{exp.period}</span>
                    <span className="text-emerald-400 block mt-1">{exp.company}</span>
                  </div>
                  
                  {/* Right - Content */}
                  <div className="md:col-span-9">
                    <h4 className="text-xl font-light text-white mb-4">{exp.position}</h4>
                    <p className="text-zinc-400">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 