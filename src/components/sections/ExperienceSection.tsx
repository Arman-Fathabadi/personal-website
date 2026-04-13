'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 max-w-[700px] mx-auto px-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="flex items-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-lightest-slate flex items-center whitespace-nowrap">
          <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">
            02.
          </span>
          Where I&apos;ve Worked
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full relative ml-5" />
      </motion.div>

      <div className="space-y-12">
        {/* Carefree Lodge LTC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col"
        >
          <div className="mb-2">
            <h3 className="text-xl font-medium text-lightest-slate">
              <span>Technical Operations Coordinator</span>
              <span className="text-green"> @ Carefree Lodge LTC</span>
            </h3>
            <p className="text-slate font-mono text-sm mt-1 mb-4">
              Jun. 2022 – Aug. 2024
            </p>
          </div>
          
          <ul className="text-slate text-base leading-relaxed space-y-4">
            <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-lg">
              Built an automated <span className="text-green">Python</span> & <span className="text-green">SQL</span> asset tracking system, improving inventory accuracy by 20% via normalization.
            </li>
            <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-lg">
              Maintained AV infrastructure for 200+ residents, sustaining 99% uptime via real-time network and hardware monitoring.
            </li>
            <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-lg">
              Applied <span className="text-green">WCAG 2.1</span> accessibility standards to the internal site, reducing accessibility complaints by 30%.
            </li>
          </ul>
        </motion.div>

        {/* TMU Clubs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col"
        >
          <div className="mb-2">
            <h3 className="text-xl font-medium text-lightest-slate">
              <span>Dev Team & Contributor</span>
              <span className="text-green"> @ TMU Clubs</span>
            </h3>
            <p className="text-slate font-mono text-sm mt-1 mb-4">
              Sep. 2023 – Present
            </p>
          </div>
          
          <ul className="text-slate text-base leading-relaxed space-y-4">
            <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-lg">
              Collaborated with the <span className="text-green">Metropolitan Game Studio</span> dev team to build interactive prototypes and implement core gameplay mechanics in C#.
            </li>
            <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-lg">
              Actively participated in the <span className="text-green">TMU Algorithms and Coding Club (TMACC)</span>, solving complex problems and contributing to technical workshops for students.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
