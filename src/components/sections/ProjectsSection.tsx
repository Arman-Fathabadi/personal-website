'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Budget Wizer: Full-Stack Financial Suite",
      timeline: "Mar. 2026 – Present",
      description: [
        "Used React Native and Firebase NoSQL to sync multi-user expense data, achieving sub-second latency across devices.",
        "Built a Python CSV parser with strict validation rules, reducing manual data entry by 80%.",
        "Developed a SQL-backed transaction categorization engine, cutting manual budgeting time by 30%."
      ],
      techStack: ["React Native", "Firebase", "Python", "SQL"],
      githubLink: "https://github.com/Arman-Fathabadi/Budget-wizer"
    },
    {
      title: "FatalChase",
      timeline: "Feb. 2026 – Apr. 2026",
      description: [
        "Built a Unity 6 3D survival driving game with reactive AI pursuit, boost mechanics, and real-time physics.",
        "Designed the full C# gameplay loop including chase AI, timed objectives, and collision feedback systems.",
        "Integrated physics-based vehicle handling with spatial audio, shipping a cross-platform MVP for Windows and macOS."
      ],
      techStack: ["Unity 6", "C#", "3D Physics"],
      githubLink: "https://github.com/Arman-Fathabadi/FatalChase"
    },
    {
      title: "Scientific Calculator",
      timeline: "Jan. 2026 – Feb. 2026",
      description: [
        "Engineered a BigDecimal math engine eliminating floating-point drift across complex trigonometric operations.",
        "Built a Graphics2D graphing module with zoom-adaptive coordinate mapping for real-time function scaling.",
        "Implemented a Shunting-yard expression parser handling 50+ unit-tested edge cases across nested logic."
      ],
      techStack: ["Java", "Graphics2D", "Algorithms"],
      githubLink: "https://github.com/Arman-Fathabadi/Scientific-Calculator"
    },
    {
      title: "PrepTime",
      timeline: "Dec. 2025 – Present",
      description: [
        "Architected a Next.js 14 and Zustand calendar interface, optimizing rendering across 50+ concurrent tasks.",
        "Built a FastAPI and Hugging Face inference pipeline deployed on Vercel for async schedule generation.",
        "Fixed TypeScript hydration errors, ensuring millisecond-accurate Pomodoro session tracking and data persistence."
      ],
      techStack: ["Next.js", "TypeScript", "FastAPI", "Zustand"],
      githubLink: "https://github.com/Arman-Fathabadi/Preptime-updated"
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-[900px] mx-auto px-4 sm:px-12">
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

      <ul className="space-y-24">
        {projects.map((project) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            <div className="md:col-span-10 md:col-start-1 text-left relative z-10 bg-light-navy p-6 md:bg-transparent md:p-0 rounded shadow-lg md:shadow-none">
              <p className="font-mono text-green mb-1 text-sm">{project.timeline}</p>
              <h3 className="text-lightest-slate text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <div className="md:bg-light-navy md:p-6 rounded md:shadow-lg text-slate text-base md:w-[120%] relative z-10 space-y-2">
                {project.description.map((bullet, idx) => (
                  <p key={idx} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-sm leading-relaxed">
                    {bullet}
                  </p>
                ))}
              </div>
              <ul className="flex flex-wrap text-light-slate font-mono text-sm mt-5 mb-5 md:mb-0 space-x-4 md:w-[120%] z-20 relative">
                {project.techStack.map((tech) => (
                  <li key={tech} className="whitespace-nowrap drop-shadow-sm">{tech}</li>
                ))}
              </ul>
              <div className="flex items-center space-x-4 text-lightest-slate">
                <a
                  href={project.githubLink}
                  aria-label="GitHub Link"
                  className="hover:text-green transition-colors z-20 relative px-1 py-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Visual separator/background for mobile */}
            <div className="absolute inset-0 bg-light-navy rounded md:hidden z-0 shadow-lg border border-lightest-navy/50" />
            
            {/* Minimalist structural decor for desktop to give dimension instead of a picture */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full max-h-[250px] w-6/12 border border-green/20 rounded mix-blend-screen opacity-50 z-0 bg-green/5" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
