
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-8 opacity-80" />
            <span className="text-xl font-heading font-bold text-white">Axionera</span>
          </div>

          <div className="flex space-x-8 text-slate-400 text-sm font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Get in Touch</a>
          </div>

          <div className="flex space-x-4">
            <a href="mailto:axionera.tech@gmail.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 text-slate-400 hover:text-white transition-all">
              <span className="sr-only">Email</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Axionera. All rights reserved. Professional & Affordable.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
