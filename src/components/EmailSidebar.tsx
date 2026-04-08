'use client';

import { motion } from 'framer-motion';

const EmailSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-50"
    >
      <div className="flex flex-col items-center mb-6">
        <a
          href="mailto:arman.fathabadi01@gmail.com"
          className="text-slate hover:text-green font-mono text-sm tracking-widest hover:-translate-y-1 transition-all duration-300 p-2"
          style={{ writingMode: 'vertical-rl' }}
        >
          arman.fathabadi01@gmail.com
        </a>
      </div>
      <div className="w-[1px] h-[90px] bg-slate"></div>
    </motion.div>
  );
};

export default EmailSidebar;
