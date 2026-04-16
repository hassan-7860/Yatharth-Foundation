'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface h-[70px] flex items-center border-b-2 border-[#E2E8F0]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="font-extrabold text-[20px] text-primary tracking-tight">
            YATHARTH <span className="text-secondary">FOUNDATION</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-text-main font-medium text-[14px] ml-6 hover:text-secondary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-10 bg-primary text-white px-5 py-2.5 rounded-md text-[13px] font-semibold uppercase hover:opacity-90 transition-opacity">
            Enroll Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-[70px] left-0 w-full bg-surface shadow-md border-t border-[#E2E8F0]">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-text-main font-medium text-[14px]">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white text-center py-2.5 rounded-md text-[13px] font-semibold uppercase mt-2">
              Enroll Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
