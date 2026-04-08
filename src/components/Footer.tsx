'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-navy py-6 text-center mt-auto flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-6 mb-4 md:hidden">
        <a
          href="https://github.com/Arman-Fathabadi/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate hover:text-green transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/arman-fathabadi/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate hover:text-green transition-colors"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
      <div>
        <a 
          href="https://github.com/Arman-Fathabadi/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-green transition-colors font-mono text-sm"
        >
          Designed & Built by Arman Fathabadi
        </a>
      </div>
    </footer>
  );
};

export default Footer;