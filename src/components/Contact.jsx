import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative min-h-screen bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
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
            Contact <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-px w-16 mx-auto bg-emerald-400/50 mb-8"></div>
          <p className="text-zinc-400 max-w-xl mx-auto">Let's connect and discuss how we can work together on your next project.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative border border-zinc-800 p-8">
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400"></div>
              
              <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-8">Get in Touch</h3>
              
              <p className="text-zinc-400 mb-12">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="text-emerald-400 text-xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-light mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-emerald-400 text-xl mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-light mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-emerald-400 text-xl mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-light mb-1">Location</h4>
                    <p className="text-zinc-400">
                      Zamboanga City, Philippines
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-6">
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
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative border border-zinc-800 p-8">
              <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-emerald-400"></div>
              
              <h3 className="text-lg uppercase tracking-widest text-emerald-400 font-light mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-emerald-400' : 'text-zinc-500'}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-transparent border focus:outline-none text-white transition-colors duration-300 ${
                      focusedField === 'name' 
                        ? 'border-emerald-400' 
                        : 'border-zinc-800'
                    }`}
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-400' : 'text-zinc-500'}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-transparent border focus:outline-none text-white transition-colors duration-300 ${
                      focusedField === 'email' 
                        ? 'border-emerald-400' 
                        : 'border-zinc-800'
                    }`}
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-emerald-400' : 'text-zinc-500'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-transparent border focus:outline-none text-white transition-colors duration-300 min-h-[150px] resize-none ${
                      focusedField === 'message' 
                        ? 'border-emerald-400' 
                        : 'border-zinc-800'
                    }`}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white hover:border-emerald-400 transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 