'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/85 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 h-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green font-mono z-50">
          AF
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8 m-0 p-0">
            {navLinks.map((link, i) => (
              <li key={i} className="text-sm font-mono relative">
                <Link
                  href={link.url}
                  className="p-2 text-lightest-slate hover:text-green transition-colors flex flex-col items-center"
                >
                  <span className="text-green text-xs mb-1">0{i + 1}.</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-mono text-green border border-green rounded hover:bg-green/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green z-50 p-2"
        >
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-light-navy flex flex-col justify-center items-center md:hidden"
            >
              <ol className="flex flex-col space-y-8 items-center list-none w-full p-0">
                {navLinks.map((link, i) => (
                  <li key={i} className="text-center font-mono w-full">
                    <Link
                      href={link.url}
                      onClick={() => setIsOpen(false)}
                      className="text-lightest-slate hover:text-green transition-colors block w-full py-4 text-lg"
                    >
                      <span className="text-green block text-sm mb-2">
                        0{i + 1}.
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ol>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-12 px-8 py-4 text-sm font-mono text-green border border-green rounded hover:bg-green/10 transition-colors"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
