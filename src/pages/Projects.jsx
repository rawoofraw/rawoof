import { motion } from 'framer-motion';
import { Server, BrainCircuit, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Academic Style Transfer using LLaMA 8B Fine-Tuning',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      stack: ['Python', 'LLaMA', 'QLoRA', 'Unsloth', 'Gemini API'],
      points: [
        'Architected an automated ETL pipeline using PyMuPDF and Regex to extract and sanitize 200+ academic papers (CSE/EEE domains).',
        'Dynamically replaced complex LaTeX formulas to optimize token limits.',
        'Built a high-throughput synthetic data generation loop with the Gemini API, producing 26,000+ paired training samples in structured JSONL format.',
        'Fine-tuned a LLaMA 8B model using QLoRA and Unsloth on an NVIDIA T4 GPU, optimizing 16GB VRAM usage for large-scale domain adaptation.',
        'Implemented instruction-based prompting to improve output coherence and academic tone.'
      ]
    },
    {
      id: 2,
      title: 'Serverless LLM Inference Pipeline on Microsoft Azure',
      icon: <Server className="w-6 h-6 text-blue-400" />,
      stack: ['Azure ML', 'Azure Functions', 'APIM', 'Blob Storage'],
      points: [
        'Designed a scalable, cloud-based inference architecture to securely serve a fine-tuned LLaMA 8B model.',
        'Deployed the 5GB model via Azure ML managed endpoints.',
        'Configured cold-start scale-to-zero autoscaling to eliminate idle GPU costs.',
        'Built Azure Functions middleware with the Azure SDK for Python to orchestrate model predictions.',
        'Built a REST API via Azure API Management (APIM) with API key authentication and rate-limiting to prevent abuse.'
      ]
    }
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-display font-bold text-white mb-4">Featured Blueprints</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Deep dives into complex AI/ML engineering challenges, from fine-tuning Large Language Models to architecting scalable cloud infrastructure.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-slate-800/40 border border-slate-700/50 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              
              {/* Content Side */}
              <div className="p-8 lg:w-3/5 lg:pr-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/50">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-mono font-medium bg-blue-900/20 text-blue-300 border border-blue-800/30 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Key Contributions</h4>
                  <ul className="space-y-3">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">›</span>
                        <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Diagram Side */}
              <div className="lg:w-2/5 bg-slate-900/80 border-t lg:border-t-0 lg:border-l border-slate-700/50 p-8 flex flex-col items-center justify-center min-h-[300px] group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ImageIcon className="w-16 h-16 text-slate-600 mb-4 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-slate-500 font-mono text-sm uppercase tracking-widest group-hover:text-blue-300 transition-colors duration-300">
                  Architecture_Diagram.svg
                </span>
                <span className="text-slate-600 text-xs mt-2 text-center max-w-xs">
                  (Placeholder: Replace with actual system schematic)
                </span>
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
