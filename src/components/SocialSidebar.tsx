'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-50"
    >
      <ul className="flex flex-col items-center space-y-6 mb-6">
        <li>
          <a
            href="https://github.com/Arman-Fathabadi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 inline-block p-2"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arman-fathabadi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 inline-block p-2"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </li>
      </ul>
      <div className="w-[1px] h-[90px] bg-slate"></div>
    </motion.div>
  );
};

export default SocialSidebar;
