
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const TESTIMONIALS = [
  {
    quote: "Their digital solutions helped our startup streamline operations and improve customer engagement. Highly recommended.",
    author: "Samantha Lee",
    role: "Startup Founder"
  },
  {
    quote: "The team built our website and mobile app with exceptional quality and efficiency. The entire process was smooth and professional.",
    author: "Darryl Rob",
    role: "E-commerce Director"
  },
  {
    quote: "Working with the team was seamless. Their expertise in design and development delivered a product that exceeded our expectations.",
    author: "Jigs",
    role: "Product Owner"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        <section id="testimonials" className="py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-16">What our partners say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-effect p-8 rounded-2xl text-left hover:border-indigo-500/30 transition-all">
                  <div className="flex text-indigo-500 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">"{t.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{t.author}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
