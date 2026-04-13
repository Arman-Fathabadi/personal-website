import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaPlayCircle } from 'react-icons/fa';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy text-slate py-24 px-4 sm:px-12 md:px-24">
      <div className="max-w-[1000px] mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-green font-mono text-sm hover:underline mb-12 group"
        >
          <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="font-mono text-green mb-2">{project.timeline}</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-lightest-slate mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-lightest-slate">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green transition-colors flex items-center space-x-3 bg-light-navy px-4 py-2 rounded border border-slate/10"
              >
                <FaGithub className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest">Source Code</span>
              </a>
              {(project.demoLink || project.videoDemo) && (
                <a 
                  href={project.demoLink || project.videoDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors flex items-center space-x-3 bg-light-navy px-4 py-2 rounded border border-slate/10"
                >
                  {project.demoType === 'Watch Demo' ? <FaPlayCircle className="w-5 h-5" /> : <FaExternalLinkAlt className="w-4 h-4" />}
                  <span className="font-mono text-xs uppercase tracking-widest">{project.demoType || "Live Demo"}</span>
                </a>
              )}
            </div>

            <ul className="flex flex-wrap gap-3 mb-12">
              {project.techStack.map(tech => (
                <li key={tech} className="px-3 py-1 bg-light-navy text-green font-mono text-xs rounded border border-green/20">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-video rounded overflow-hidden shadow-2xl border border-lightest-navy">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Video Demo / Media Section */}
        {project.videoDemo && (
          <section className="mb-24">
            <h2 className="text-2xl font-semibold text-lightest-slate mb-8 flex items-center">
              <span className="text-green font-mono text-xl mr-4">01.</span>
              Project Walkthrough
            </h2>
            <div className="relative aspect-video w-full max-w-[800px] mx-auto bg-light-navy rounded-lg shadow-2xl border border-green/20 flex flex-col items-center justify-center p-8 text-center">
              <FaPlayCircle className="w-20 h-20 text-green/50 mb-6" />
              <h3 className="text-xl text-lightest-slate mb-2">Video Demonstration</h3>
              <p className="max-w-[400px] mx-auto text-slate mb-8">
                A full walkthrough of the technical features and gameplay mechanics.
              </p>
              <a 
                href={project.videoDemo}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors"
              >
                Watch on YouTube
              </a>
              {/* Note: This is a placeholder for an iframe which the user can swap in later */}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-slate/10 pt-16">
          <section>
            <h2 className="text-green font-mono text-sm mb-4 border-b border-green/20 pb-2">02. The Story</h2>
            <p className="leading-relaxed text-slate">{project.story}</p>
          </section>
          <section>
            <h2 className="text-green font-mono text-sm mb-4 border-b border-green/20 pb-2">03. The Challenge</h2>
            <p className="leading-relaxed text-slate">{project.challenge}</p>
          </section>
          <section>
            <h2 className="text-green font-mono text-sm mb-4 border-b border-green/20 pb-2">04. The Opportunity</h2>
            <p className="leading-relaxed text-slate">{project.opportunity}</p>
          </section>
        </div>

        <div className="mt-16 bg-light-navy p-8 rounded border border-lightest-navy">
          <h2 className="text-xl font-semibold text-lightest-slate mb-6">Technical Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map(feature => (
              <li key={feature} className="flex items-center text-slate before:content-['▹'] before:text-green before:mr-3">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
