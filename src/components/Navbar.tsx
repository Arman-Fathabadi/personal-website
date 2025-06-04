import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  // Normalize paths to prevent issues with trailing slashes
  const isActive = (path: string) => {
    const currentPath = pathname?.replace(/\/$/, '') || '';
    const targetPath = `${basePath}${path}`.replace(/\/$/, '');
    return currentPath === targetPath;
  };

  const getHref = (path: string) => {
    return path === '/' ? basePath || '/' : `${basePath}${path}`;
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href={basePath || '/'}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            AF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={getHref(link.href)}
                className={`${
                  isActive(link.href)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                } transition-colors px-2 pb-1`}
              >
                {link.label}
              </Link>
            ))}
            <button 
              type="button"
              onClick={toggleDarkMode} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className={`block py-2 text-center ${
                    isActive(link.href)
                      ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="mt-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <HiSun className="w-6 h-6 mx-auto" />
                ) : (
                  <HiMoon className="w-6 h-6 mx-auto" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
