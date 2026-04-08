'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 max-w-[600px] mx-auto text-center px-4 mb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <p className="text-green font-mono mb-4">
          05. What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-lightest-slate mb-6">
          Get In Touch
        </h2>
        <p className="text-slate text-lg mb-12">
          I&apos;m currently looking for new internship opportunities. Whether you have a question, a potential opening, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:arman.fathabadi01@gmail.com"
          className="px-8 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors inline-block text-sm"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
