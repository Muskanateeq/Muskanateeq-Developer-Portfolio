"use client";
import { useState } from 'react';
import { motion } from 'framer-motion'; 
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string>('Home'); // Default active item
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/servicessection' },
    { name: 'Resume', href: '/resumesection' },
    { name: 'Project', href: '/worksection' },
    { name: 'Contact', href: '/contactsection' }
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-8 md:px-16 lg:px-32 bg-gray-900 fixed w-full top-0 z-50">
      {/* Logo with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }} 
        className="text-2xl font-bold text-white flex items-center cursor-pointer"
      >
        <Link href="/">
          Muskan<span className="text-teal-400 ml-1">.</span>
        </Link>
      </motion.h1>

      {/* Desktop Navbar Links */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }} 
            onClick={() => setActive(item.name)}
            className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${
              active === item.name
                ? 'text-teal-400 border-b-2 border-teal-400'
                : 'text-white'
            }`}
          >
            <Link href={item.href}>
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-40">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3, delay: index * 0.1 }} 
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
              }}
              className={`text-2xl py-4 transition-colors duration-200 ${
                active === item.name
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'text-white'
              }`}
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </motion.div>
          ))}
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          >
            ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

