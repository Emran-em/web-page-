import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false }) => {
  return (
    <div 
      className={`
        bg-glass backdrop-blur-md border border-glassBorder rounded-2xl shadow-lg 
        ${hoverEffect ? 'transition-all duration-300 hover:bg-white/10 hover:shadow-cyan-500/20 hover:scale-[1.01]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;