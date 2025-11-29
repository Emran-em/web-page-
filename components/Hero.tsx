import React from 'react';
import { RESUME_DATA } from '../constants';
import GlassCard from './GlassCard';
import { ArrowDownCircle, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="max-w-4xl w-full z-10">
        <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
          {/* Animated Gradient Border Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer"></div>
          
          <h2 className="text-cyan-400 font-medium tracking-wider mb-4 uppercase text-sm md:text-base">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            {RESUME_DATA.name}
          </h1>
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="text-xl md:text-2xl text-blue-200 font-light">
              {RESUME_DATA.title}
            </span>
          </div>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {RESUME_DATA.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
             <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Email Me</span>
             </a>
             <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600/80 hover:bg-blue-600 border border-blue-400/50 rounded-lg transition-colors shadow-lg shadow-blue-500/30 group">
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
             </a>
             <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group">
                <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span>Call</span>
             </a>
          </div>

          <div className="animate-bounce-slow opacity-70">
            <ArrowDownCircle className="w-8 h-8 mx-auto text-slate-400" />
            <span className="text-xs text-slate-500 mt-1 block">Scroll Down</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Hero;