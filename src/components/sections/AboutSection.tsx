'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-[900px] mx-auto px-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="flex items-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-lightest-slate flex items-center whitespace-nowrap">
          <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">
            01.
          </span>
          About Me
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full relative ml-5" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex-1 text-lg leading-relaxed text-slate space-y-4"
        >
          <p>
            Hello! My name is Arman and my interest in software development started back
            in high school. Today, I am a computer science student at{' '}
            <span className="text-green">Toronto Metropolitan University</span>, shaping my passion
            into scalable, high-performance applications.
          </p>
          <p>
            My main focus these days is building accessible, inclusive products and robust infrastructure.
            I&apos;ve contributed to the <span className="text-green">TMU Algorithms and Coding Club (TMACC)</span> and the <span className="text-green">Metropolitan Game Studio</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          className="w-full max-w-[250px] mx-auto md:w-[300px] relative mt-10 md:mt-0 group"
        >
          <div className="relative w-full aspect-square rounded overflow-hidden z-10 transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 mix-blend-multiply filter grayscale group-hover:filter-none group-hover:mix-blend-normal blur-[0.5px] group-hover:blur-none opacity-80 group-hover:opacity-100 bg-green">
            <Image
              src="/images/Arman.png"
              alt="Arman Fathabadi"
              fill
              className="object-cover"
            />
          </div>
          {/* Border element behind image */}
          <div className="absolute inset-0 border-2 border-green rounded translate-x-5 translate-y-5 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
