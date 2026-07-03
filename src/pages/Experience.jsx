import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Research Programmer',
      company: 'OndeZx, Nagercoil',
      date: 'Jun 2025 – Present',
      achievements: [
        'Spearheads proof-of-concept AI/ML model architecture and experimentation for PhD-level academic research.',
        'Conducts rigorous Exploratory Data Analysis (EDA) and performance validation using Python, Matplotlib, and Seaborn.'
      ]
    },
    {
      id: 2,
      role: 'Machine Learning Engineer',
      company: 'Matt Engineering Solutions, Nagercoil',
      date: 'Oct 2024 – May 2025',
      achievements: [
        'Developed predictive models (CNN, ANN, LSTM) using Python and SQL preprocessing pipelines.',
        'Built interactive Power BI dashboards tracking model precision and recall for key stakeholders.'
      ]
    }
  ];

  return (
    <div className="py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-display font-bold text-white mb-4">Professional Timeline</h2>
        <p className="text-slate-400 text-lg">My journey through machine learning and research.</p>
      </motion.div>

      <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-slate-900 border-2 border-white"></div>
            
            <div className="glass-card bg-slate-800/40 p-6 md:p-8 hover:bg-slate-800/60 transition-colors border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    {exp.role}
                  </h3>
                  <h4 className="text-xl text-slate-300 mt-1">{exp.company}</h4>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full text-sm font-medium w-fit">
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>
              </div>
              
              <ul className="mt-6 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1.5">•</span>
                    <span className="text-slate-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
