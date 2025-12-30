
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Expert End-to-End Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
            Seamless <span className="gradient-text">Design.</span> <br/> Reliable Delivery.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            We are a dedicated team specialized in React, Node, and Flutter. We translate complex requirements into high-quality digital products with a focus on efficiency and milestone delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass-effect text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
