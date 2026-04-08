'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start w-full px-4 sm:px-12 md:px-24 mx-auto max-w-[1000px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-green font-mono mb-5 ml-1">Hi, my name is</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-5xl sm:text-7xl font-semibold text-lightest-slate mb-2 tracking-tight">
          Arman Fathabadi.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-4xl sm:text-6xl font-semibold text-slate tracking-tight mb-6">
          I build high-performance applications.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="max-w-[540px] text-lg text-slate mb-12">
          I&apos;m a software developer specializing in creating interactive, scalable web
          applications using modern technologies like <span className="text-green">React</span>, <span className="text-green">Next.js</span>, and <span className="text-green">Node.js</span>. My focus is on robust architecture and
          user-friendly interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex space-x-6"
      >
        <a
          href="#projects"
          className="px-7 py-3 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
}
