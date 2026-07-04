import { motion } from 'framer-motion';
import { BookOpen, Code2, Cloud, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { useRef } from 'react';
import { ScrollVideoBackground } from '../components/ScrollVideoBackground';

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

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);



  const pageContent = (
    <div className="py-12 pointer-events-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* Professional Summary */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-display font-bold mb-6 text-white border-b border-slate-700 pb-2">About Me</h2>
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
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
              <div key={index} className="glass-card p-6 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 transition-colors border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-slate-100">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm font-medium bg-slate-900/80 text-blue-300 border border-blue-900/50 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Spacer to push Education section down a bit, matching the 3D scroll explosion */}
        <div className="h-32"></div>

        {/* Education Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-display font-bold mb-6 text-white border-b border-slate-700 pb-2">Education</h2>
          <div className="glass-card p-6 bg-slate-800/80 backdrop-blur-sm flex items-start gap-4 border border-slate-700/50">
            <div className="p-3 bg-[#2C5C88]/20 rounded-lg text-[#2C5C88] border border-[#2C5C88]/30">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.E. Mechanical Engineering</h3>
              <p className="text-slate-400 font-medium">Rohini College of Engineering and Technology, Kanyakumari</p>
              <p className="text-slate-500 mt-1 font-mono">2019 – 2023</p>
              <p className="text-slate-400 italic border-l-2 border-[#2C5C88] pl-3 mt-4 text-sm">
                "A foundation in complex mechanical systems that now shapes how I architect machine learning pipelines."
              </p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );

  if (!isDesktop) {
    return pageContent;
  }

  // Desktop Full-Page 3D Layout
  return (
    <div className="fixed inset-0 z-0 bg-[#010101]">
      <canvas 
        ref={canvasRef} 
        style={{ visibility: 'hidden' }}
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" 
      />
      <video
        ref={videoRef}
        src="/video/make_this_video_more_simple_li.mp4"
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full absolute inset-0 z-10"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, 5, -10]} intensity={2.5} color="#2C5C88" />
        <pointLight position={[0, -5, 5]} intensity={1} color="#2C5C88" />

        {/* 
          pages={2.5} stretches the scroll area. 
          The HTML overlay contains the actual text content.
        */}
        <ScrollControls pages={2.5} damping={0.25} distance={1.2}>
          
          <ScrollVideoBackground 
            videoUrl="/video/make_this_video_more_simple_li.mp4" 
            canvasRef={canvasRef} 
            videoRef={videoRef} 
          />

          <Scroll html style={{ width: '100%', height: '100%' }}>
            {/* 
              Wrap the page content in the standard max-w constraints 
              so it aligns with the rest of the site (Navbar/Footer).
            */}
            <div className="w-full h-full pointer-events-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                {pageContent}
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default About;
