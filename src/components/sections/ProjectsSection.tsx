'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 max-w-[1000px] mx-auto px-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="flex items-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-lightest-slate flex items-center whitespace-nowrap">
          <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">
            03.
          </span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full relative ml-5" />
      </motion.div>

      <ul className="space-y-32">
        {projects.map((project, i) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${i % 2 !== 0 ? 'md:text-right' : ''}`}
          >
            {/* Project Image (Mobile: Always visible, Desktop: Alternating) */}
            <div className={`md:col-span-7 relative ${i % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-6'}`}>
              <Link href={`/projects/${project.slug}`} className="block group relative aspect-[16/10] overflow-hidden rounded shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-green/10 group-hover:bg-transparent z-10 transition-colors duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Project Content */}
            <div className={`md:col-span-6 relative z-20 ${i % 2 !== 0 ? 'md:col-start-7 md:text-right' : 'md:col-start-1 md:text-left'} -mt-8 md:mt-0 flex flex-col justify-center`}>
              <p className="font-mono text-green mb-1 text-sm">{project.timeline}</p>
              <h3 className="text-lightest-slate text-2xl font-semibold mb-4 hover:text-green transition-colors cursor-pointer inline-block">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <div className="bg-light-navy p-6 rounded shadow-xl text-slate text-base relative z-10 space-y-4 text-left">
                {project.shortDescription.map((bullet, idx) => (
                  <p key={idx} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-sm leading-relaxed">
                    {bullet}
                  </p>
                ))}
              </div>
              <ul className={`flex flex-wrap text-light-slate font-mono text-xs mt-5 mb-5 space-x-4 ${i % 2 !== 0 ? 'md:justify-end md:space-x-reverse' : ''}`}>
                {project.techStack.map((tech) => (
                  <li key={tech} className="whitespace-nowrap px-2 py-1 bg-navy/50 rounded">{tech}</li>
                ))}
              </ul>
              <div className={`flex items-center space-x-6 text-lightest-slate ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                <a
                  href={project.githubLink}
                  className="hover:text-green transition-colors flex items-center space-x-2 p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Source on GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="font-mono text-xs hidden sm:inline">GitHub</span>
                </a>
                
                {(project.demoLink || project.videoDemo) && (
                  <a
                    href={project.demoLink || project.videoDemo}
                    className="hover:text-green transition-colors flex items-center space-x-2 p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.demoType || "Demo"}
                  >
                    {project.demoType === 'Watch Demo' ? <FaPlayCircle className="w-5 h-5" /> : <FaExternalLinkAlt className="w-4 h-4" />}
                    <span className="font-mono text-xs hidden sm:inline">{project.demoType || "Demo"}</span>
                  </a>
                )}
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-xs font-mono text-green hover:underline flex items-center"
                >
                  Case Study <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
