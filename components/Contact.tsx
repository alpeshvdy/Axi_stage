
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Let's build something great.</h3>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            We are a small startup with a big focus on quality. Because we're just starting, we offer <span className="text-white font-semibold">highly affordable pricing</span> for our enterprise-grade development and QA services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 glass-effect rounded-3xl border border-white/5 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-indigo-500 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Email Us</p>
              <a href="mailto:axionera.tech@gmail.com" className="text-white text-xl font-medium hover:text-indigo-400 transition-colors">axionera.tech@gmail.com</a>
            </div>

            <div className="p-8 glass-effect rounded-3xl border border-white/5 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-indigo-500 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Call Us</p>
              <a href="tel:+15195672889" className="text-white text-xl font-medium hover:text-indigo-400 transition-colors">+1 519-567-2889</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
