'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from '@/components/Badge';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string | string[];
  timeline?: string;
  techStack: string[];
  githubLink: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, timeline, techStack, githubLink, liveDemo }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-deep transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold mb-1 text-gray-800 dark:text-white">{title}</h3>
      {timeline && <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{timeline}</p>}
      {Array.isArray(description) ? (
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
          {description.map((bullet, idx) => (
            <li key={idx} className="text-sm">{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="flex space-x-4">
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          GitHub
        </Link>
        {liveDemo && (
          <Link
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 transition-colors"
          >
            Live Demo
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;