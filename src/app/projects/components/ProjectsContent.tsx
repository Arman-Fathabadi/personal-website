'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsContent() {
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
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}