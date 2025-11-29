import React from 'react';
import { SKILLS } from '../constants';
import GlassCard from './GlassCard';
import { 
  Cloud, 
  Container, 
  Network, 
  Database, 
  Terminal, 
  Settings, 
  GitMerge, 
  Server, 
  Activity, 
  Monitor 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-full h-full text-orange-400" />,
  Container: <Container className="w-full h-full text-blue-500" />,
  Network: <Network className="w-full h-full text-blue-400" />,
  Database: <Database className="w-full h-full text-purple-400" />,
  Terminal: <Terminal className="w-full h-full text-slate-200" />,
  Settings: <Settings className="w-full h-full text-red-400" />,
  GitMerge: <GitMerge className="w-full h-full text-orange-600" />,
  Server: <Server className="w-full h-full text-yellow-400" />,
  Activity: <Activity className="w-full h-full text-red-500" />,
  Monitor: <Monitor className="w-full h-full text-orange-500" />,
};

// Helper for animations based on tool type
const getAnimationClass = (iconName: string) => {
  switch (iconName) {
    case 'Settings': // Jenkins
    case 'Activity': // Prometheus
      return 'animate-spin-slow'; // Gears spin
    case 'Monitor': // Grafana
    case 'Network': // K8s
      return 'animate-pulse';
    case 'Cloud': // AWS
      return 'animate-bounce-slow';
    default:
      return '';
  }
};

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-4 relative">
       {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <GlassCard key={category} className="p-6" hoverEffect>
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group">
                    <div className={`w-10 h-10 p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/50 transition-colors ${skill.iconName ? getAnimationClass(skill.iconName) : ''}`}>
                      {skill.iconName && iconMap[skill.iconName] ? iconMap[skill.iconName] : <Terminal />}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">{skill.name}</h4>
                      <p className="text-xs text-slate-500">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;