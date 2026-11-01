import React, { useEffect, useState } from 'react';
import { Sparkles, Utensils } from 'lucide-react';

interface PreLoaderProps {
  onLoaded: () => void;
}

export const PreLoader: React.FC<PreLoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoaded();
          }, 350);
          return 100;
        }
        return prev + 15;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoaded]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d120e] text-[#fef08a] transition-opacity duration-500">
      {/* Decorative Traditional Mandala Ring */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="h-28 w-28 animate-spin rounded-full border-2 border-dashed border-[#eab308]/40 [animation-duration:12s]" />
        
        {/* Glowing Central Crest */}
        <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#78350f] via-[#451a03] to-[#1e1b4b] shadow-[0_0_35px_rgba(234,179,8,0.4)] border border-[#eab308]/60">
          <Utensils className="h-8 w-8 text-[#fef08a] animate-pulse" />
        </div>

        {/* Rising Steam Effect */}
        <div className="absolute -top-6 flex gap-1">
          <span className="h-3 w-1.5 rounded-full bg-white/40 animate-steam [animation-delay:0s]" />
          <span className="h-4 w-1.5 rounded-full bg-white/50 animate-steam [animation-delay:0.4s]" />
          <span className="h-3 w-1.5 rounded-full bg-white/40 animate-steam [animation-delay:0.8s]" />
        </div>
      </div>

      {/* Brand & Telugu Blessing */}
      <div className="text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#fde047] mb-2 uppercase">
          <Sparkles className="h-3.5 w-3.5" /> 10th Anniversary Milestone (2015-2025)
        </div>
        <h1 className="text-2xl sm:text-3xl font-royal font-bold tracking-wide text-white">
          S.V.S. CATERING
        </h1>
        <p className="font-telugu text-sm sm:text-base text-[#fef08a]/90 mt-1">
          శుభకార్యాల విందు భోజనాలకు స్వాగతం
        </p>
        <p className="text-xs text-stone-400 tracking-widest uppercase mt-0.5">
          Anakapalle & Visakhapatnam
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-48 sm:w-64 rounded-full bg-stone-900/80 p-0.5 border border-[#ca8a04]/30">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-[#ca8a04] via-[#eab308] to-[#fef08a] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        onClick={() => {
          setIsVisible(false);
          onLoaded();
        }}
        className="mt-6 text-xs text-stone-400 hover:text-[#fde047] transition-colors underline underline-offset-4"
      >
        Skip to Feast →
      </button>
    </div>
  );
};

