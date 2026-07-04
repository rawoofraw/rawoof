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
      ],
      image: 'https://media.licdn.com/dms/image/v2/C5603AQHsalINZTya0Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1590985957701?e=2147483647&v=beta&t=YWCiTat2poNqZEa1Koe3Jbi8d9ckLlZ6wySWDSx9hrE'
    },
    {
      id: 2,
      role: 'Machine Learning Engineer',
      company: 'Matt Engineering Solutions, Nagercoil',
      date: 'Oct 2024 – May 2025',
      achievements: [
        'Developed predictive models (CNN, ANN, LSTM) using Python and SQL preprocessing pipelines.',
        'Built interactive Power BI dashboards tracking model precision and recall for key stakeholders.'
      ],
      image: 'https://content3.jdmagicbox.com/v2/comp/nagercoil/z3/9999p4652.4652.170925113643.s4z3/catalogue/matt-engineering-equipments-vadasery-nagercoil-tutorials-kc5ww0snjf.jpg'
    }
  ];

  return (
    <div id="experience" className="py-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
      
      {/* Left Side: Timeline */}
      <div className="w-full lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left"
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
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-slate-900 border-2 border-white"></div>
              
              <div className="glass-card bg-slate-800/40 p-6 md:p-8 transition-all duration-300 border border-slate-700/50 hover:border-red-600/70 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] relative">
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

                {/* Hover Preview Popup (Desktop Only) */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[105%] w-64 h-64 bg-[#111] border-2 border-red-600 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none z-50 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                  <div className="w-full h-full relative">
                    <img src={exp.image} alt={exp.company} className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{exp.company.split(',')[0]}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Right Side: Empty space for popups to overlay seamlessly */}
      <div className="hidden lg:block lg:w-1/3 relative pointer-events-none">
        {/* The hover popups will appear in this space */}
      </div>

    </div>
  );
};

export default Experience;
