import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Animated Background Placeholder */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-400 font-mono tracking-widest uppercase mb-4">
            Hello, I am
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Abdul Rawoof S.A.K.
          </h1>
          <h3 className="text-2xl sm:text-3xl text-slate-300 font-display mb-6">
            Machine Learning Engineer | NLP & LLM Specialist
          </h3>
          
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            1.5+ years building end-to-end ML pipelines, fine-tuning LLMs (LLaMA, QLoRA), 
            and deploying secure serverless AI on Azure.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects <ArrowRight size={20} />
              </motion.button>
            </Link>
            

            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-transparent hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail size={20} /> Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
