'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript/TypeScript", "C/C++", "C#"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Next.js 14", "Node.js/Express.js", "FastAPI", "React Native", "Zustand"]
    },
    {
      title: "Tools",
      skills: ["AWS", "Docker", "Git/GitHub", "Linux/Unix", "Unity 6", "Unreal Engine", "Arduino"]
    },
    {
      title: "Databases & Architecture",
      skills: ["SQL", "NoSQL (Firebase)", "RESTful API Design", "MVC", "Client-Server"]
    }
  ];

  return (
    <section id="skills" className="py-24 max-w-[900px] mx-auto px-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="flex items-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-lightest-slate flex items-center whitespace-nowrap">
          <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">
            04.
          </span>
          Technical Skills
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full relative ml-5" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-medium text-lightest-slate mb-4">
              {category.title}
            </h3>
            <ul className="text-slate space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center font-mono text-sm before:content-['▹'] before:text-green before:mr-3">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
