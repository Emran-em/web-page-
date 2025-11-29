import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import GlassCard from './GlassCard';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience & Education</h2>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Professional Journey</h3>
            </div>

            <div className="space-y-6 border-l-2 border-slate-700 ml-6 pl-8 relative">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  
                  <GlassCard className="p-8" hoverEffect>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-slate-400 text-sm mb-6">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 ml-6">
              {EDUCATION.map((edu, idx) => (
                <GlassCard key={idx} className="p-6" hoverEffect>
                   <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                   <p className="text-slate-400 mb-4">{edu.institution}</p>
                   <div className="flex items-center gap-2 text-sm text-purple-300">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                   </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;