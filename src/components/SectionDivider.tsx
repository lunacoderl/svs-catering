import React from 'react';
import { Sparkles, Utensils } from 'lucide-react';

interface SectionDividerProps {
  title: string;
  telugu: string;
  icon?: 'sparkles' | 'utensils';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  title, 
  telugu,
  icon = 'sparkles' 
}) => {
  return (
    <div className="relative z-30 w-full py-4 sm:py-5 bg-gradient-to-r from-[#4c0519] via-[#831843] to-[#4c0519] text-[#fef08a] shadow-[0_10px_25px_rgba(0,0,0,0.5)] border-y-2 border-[#f59e0b]/50 overflow-hidden">
      {/* Decorative Golden Pattern Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#fde047] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#fde047] to-transparent" />

      {/* Center Cultural Transition Ribbon */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2 text-[#fde047]">
          {icon === 'utensils' ? (
            <Utensils className="h-4 w-4 animate-pulse" />
          ) : (
            <Sparkles className="h-4 w-4 animate-pulse" />
          )}
          <span className="font-telugu text-xs sm:text-sm font-bold tracking-wide drop-shadow">
            {telugu}
          </span>
        </div>

        <span className="hidden sm:inline text-amber-300/40">•</span>

        <span className="font-royal text-[11px] sm:text-xs font-bold tracking-widest uppercase text-amber-100">
          {title}
        </span>
      </div>
    </div>
  );
};

