import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-display font-bold text-white mb-4">Initialize Connection</h2>
        <p className="text-slate-400 text-lg">Looking to deploy ML models or collaborate on research? Let's talk.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="glass-card bg-slate-800/40 p-8 border border-slate-700/50 h-full">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Direct Comm_Link</h3>
            
            <div className="space-y-6">
              <a href="mailto:rawoofraw001@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">rawoofraw001@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <Phone className="w-6 h-6 text-slate-500" />
                </div>
                <span className="text-lg">+91 98947 28930</span>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-slate-500" />
                </div>
                <span className="text-lg">Nagercoil, India</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Social Network</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/rawoofabdul" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all shadow-md hover:shadow-blue-500/20">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="https://github.com/rawoofraw" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-white/10">
                  <GithubIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card bg-slate-800/40 p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message Request</h3>
            
            <form action="mailto:rawoofraw001@gmail.com" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Identifier (Name)</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Return Address (Email)</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="name@company.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Payload (Message)</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Detail your request..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Execute Send <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
