import { Scroll } from '@react-three/drei';

const EducationOverlay = () => {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>
      {/* 
        The Scroll component spans the entire height of the ScrollControls pages. 
        We use vh units to space things out based on scroll depth.
      */}
      
      {/* Initial state: Top of section */}
      <div className="absolute top-[10vh] left-[5vw] md:left-[10vw] max-w-lg pointer-events-auto">
        <div className="bg-[#010101]/80 backdrop-blur-sm p-8 rounded-xl border border-slate-800 shadow-2xl">
          <span className="text-[#2C5C88] font-mono text-sm tracking-widest uppercase mb-2 block">
            Education
          </span>
          <h2 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
            B.E. Mechanical Engineering
          </h2>
          <p className="text-slate-300 text-lg mb-2 font-medium">
            Rohini College of Engineering and Technology, Kanyakumari
          </p>
          <p className="text-slate-500 font-mono text-sm mb-6">
            2019 – 2023
          </p>
          <p className="text-slate-400 italic border-l-2 border-[#2C5C88] pl-4">
            "A foundation in complex mechanical systems that now shapes how I architect machine learning pipelines."
          </p>
        </div>
      </div>
      
      {/* Scroll indicator halfway down to encourage scrolling */}
      <div className="absolute top-[80vh] w-full flex justify-center pointer-events-none opacity-50">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-slate-400 text-xs tracking-widest uppercase mb-2">Scroll to Disassemble</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </div>
      </div>
      
    </Scroll>
  );
};

export default EducationOverlay;
