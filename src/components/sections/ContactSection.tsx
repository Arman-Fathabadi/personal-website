'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-[600px] mx-auto px-4 sm:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <h2 className="text-green font-mono text-base mb-5 flex justify-center items-center">
          <span className="mr-2">05.</span>What&apos;s Next?
        </h2>
        <h3 className="text-4xl sm:text-5xl font-semibold text-lightest-slate mb-6 leading-tight">
          Get In Touch
        </h3>
        <p className="text-slate text-lg mb-12">
          I&apos;m currently looking for a summer 2026 internship! Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        {/* Contact Form */}
        <div className="relative overflow-hidden min-h-[400px]">
          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-light-navy p-12 rounded shadow-lg border border-green/30 flex flex-col items-center justify-center h-full min-h-[400px]"
            >
              <FaCheckCircle className="text-green w-16 h-16 mb-6 animate-bounce" />
              <h4 className="text-2xl text-lightest-slate font-semibold mb-2">Message Sent!</h4>
              <p className="text-slate mb-8 max-w-[300px]">
                Thanks for reaching out! I&apos;ll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-green font-mono text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-6 mb-12 bg-light-navy p-8 rounded shadow-lg border border-lightest-navy/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-green mb-2">Name</label>
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    className="w-full bg-navy border border-slate/30 rounded px-4 py-3 text-lightest-slate focus:border-green outline-none transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-green mb-2">Email</label>
                  <input 
                    required 
                    type="email" 
                    id="email" 
                    className="w-full bg-navy border border-slate/30 rounded px-4 py-3 text-lightest-slate focus:border-green outline-none transition-colors" 
                    placeholder="Email@example.com" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-green mb-2">Message</label>
                <textarea 
                  required 
                  id="message" 
                  rows={4} 
                  className="w-full bg-navy border border-slate/30 rounded px-4 py-3 text-lightest-slate focus:border-green outline-none transition-colors" 
                  placeholder="Message..."
                ></textarea>
              </div>
              <button 
                disabled={formStatus === 'loading'}
                type="submit" 
                className={`w-full px-7 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors flex items-center justify-center space-x-2 ${formStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {formStatus === 'loading' ? (
                  <>
                    <FaSpinner className="animate-spin w-5 h-5 mr-3" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="flex justify-center flex-wrap gap-8 text-lightest-slate mt-8">
          <a href="mailto:arman.fathabadi01@gmail.com" className="hover:text-green transition-colors flex items-center space-x-2">
            <FaEnvelope className="w-5 h-5" />
            <span className="font-mono text-sm">Email</span>
          </a>
          <a href="https://github.com/Arman-Fathabadi" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors flex items-center space-x-2">
            <FaGithub className="w-5 h-5" />
            <span className="font-mono text-sm">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/arman-fathabadi" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors flex items-center space-x-2">
            <FaLinkedin className="w-5 h-5" />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
