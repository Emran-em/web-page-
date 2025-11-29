import React from 'react';
import { RESUME_DATA } from '../constants';
import GlassCard from './GlassCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
             <GlassCard className="p-6 h-full flex flex-col justify-center items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 mb-6 shadow-xl shadow-cyan-500/20">
                  <img 
                    src="https://picsum.photos/200/200" 
                    alt={RESUME_DATA.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-slate-900" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">DevOps Engineer</h3>
                <p className="text-slate-400 text-sm">{RESUME_DATA.contact.location}</p>
             </GlassCard>
          </div>
          
          <div className="w-full md:w-2/3">
            <GlassCard className="p-8 h-full">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">About Me</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {RESUME_DATA.summary.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;