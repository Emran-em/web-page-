import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30">
      {/* Navigation - Simple top bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            MD<span className="text-cyan-400">W.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900 border-t border-slate-800">
        <p>© {new Date().getFullYear()} MD Waseem. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind & Gemini AI</p>
      </footer>

      {/* Floating Chat Widget */}
      <AIChat />
    </div>
  );
};

export default App;