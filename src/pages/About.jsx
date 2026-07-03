import { motion } from 'framer-motion';
import { BookOpen, Code2, Cloud, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Languages & Cloud',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      items: ['Python', 'SQL', 'Microsoft Azure (Blob Storage, Azure ML, Azure Functions, APIM)', 'Docker', 'Kubernetes']
    },
    {
      category: 'ML / DL / GenAI',
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      items: ['PyTorch', 'TensorFlow', 'PEFT', 'Unsloth', 'LLaMA', 'Hugging Face', 'LangChain', 'RAG', 'LLM Studio']
    },
    {
      category: 'Data Engineering & MLOps',
      icon: <Database className="w-6 h-6 text-green-400" />,
      items: ['PySpark', 'Apache Airflow', 'ETL Pipelines', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'PyMuPDF', 'Regex', 'JSONL', 'Model Evaluation', 'Power BI']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* Professional Summary */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-display font-bold mb-6 text-white border-b border-slate-700 pb-2">About Me</h2>
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <p>
              I am a Machine Learning Engineer specializing in Natural Language Processing (NLP), Generative AI, and end-to-end MLOps. With a strong foundation in deep learning architectures, I focus on transforming complex academic research and proof-of-concept models into robust, scalable, and secure deployment pipelines.
            </p>
            <p>
              My expertise spans the entire machine learning lifecycle—from rigorous Exploratory Data Analysis (EDA) and data engineering using PySpark and Airflow, to fine-tuning large language models (like LLaMA) with QLoRA/Unsloth. I excel at architecting serverless cloud solutions on Microsoft Azure, ensuring optimal performance, security, and cost-efficiency through scale-to-zero policies and API Management.
            </p>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-display font-bold mb-8 text-white border-b border-slate-700 pb-2">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-card p-6 bg-slate-800/40 hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-slate-100">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm font-medium bg-slate-900 text-blue-300 border border-blue-900/50 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-display font-bold mb-6 text-white border-b border-slate-700 pb-2">Education</h2>
          <div className="glass-card p-6 bg-slate-800/40 flex items-start gap-4">
            <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.E. Mechanical Engineering</h3>
              <p className="text-slate-400 font-medium">Rohini College of Engineering and Technology, Kanyakumari</p>
              <p className="text-slate-500 mt-1 font-mono">2019 – 2023</p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
};

export default About;
