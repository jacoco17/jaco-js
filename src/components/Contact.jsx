import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl font-bold text-white">Contact Me</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 blur-sm"></div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">Let's connect and discuss how we can work together on your next project.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <div className="bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 shadow-lg h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white flex items-center mb-6">
                <div className="h-px w-8 bg-blue-400 mr-3"></div>
                Get in Touch
              </h3>
              
              <p className="text-gray-400 mb-8">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="group relative bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/30 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/30 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/30 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">
                        Zamboanga City, Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white flex items-center mb-6 relative z-10">
                <div className="h-px w-8 bg-blue-400 mr-3"></div>
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="group">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-300'}`}
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-700/30 border rounded-lg focus:outline-none focus:ring-1 text-white transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-blue-400 focus:ring-blue-400 shadow-sm shadow-blue-400/10' 
                          : 'border-gray-600/50'
                      }`}
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 ${
                      focusedField === 'name' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
                
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-300'}`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-700/30 border rounded-lg focus:outline-none focus:ring-1 text-white transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-blue-400 focus:ring-blue-400 shadow-sm shadow-blue-400/10' 
                          : 'border-gray-600/50'
                      }`}
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 ${
                      focusedField === 'email' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
                
                <div className="group">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-blue-400' : 'text-gray-300'}`}
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      className={`w-full px-4 py-3 bg-gray-700/30 border rounded-lg focus:outline-none focus:ring-1 text-white transition-all duration-300 ${
                        focusedField === 'message' 
                          ? 'border-blue-400 focus:ring-blue-400 shadow-sm shadow-blue-400/10' 
                          : 'border-gray-600/50'
                      }`}
                      required
                    ></textarea>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 ${
                      focusedField === 'message' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="relative w-full overflow-hidden group"
                >
                  <div className="relative px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium rounded-lg overflow-hidden">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 