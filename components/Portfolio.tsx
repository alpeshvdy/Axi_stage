
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">Recent Work</h3>
          </div>
          <button className="text-slate-400 hover:text-white flex items-center space-x-2 transition-colors">
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold">View Case Study</span>
                </div>
              </div>
              <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest block mb-2">{project.category}</span>
              <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
