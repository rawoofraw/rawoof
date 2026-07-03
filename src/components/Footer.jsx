import { Mail } from 'lucide-react';

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

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Abdul Rawoof S.A.K. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/rawoofraw" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/rawoofabdul" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:rawoofraw001@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
