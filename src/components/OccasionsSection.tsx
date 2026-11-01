import React from 'react';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { OCCASIONS_LIST } from '../data/cateringData';

export const OccasionsSection: React.FC = () => {
  return (
    <section 
      id="occasions" 
      className="relative min-h-screen py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/wedding.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-amber-300" /> Celebrations We Cater • శుభకార్యాలు
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Tailored Feasts for <span className="text-amber-300">Every Auspicious Milestone</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            పెళ్లిళ్లు, గృహప్రవేశాలు, సీమంతాలు, మరియు వేడుకలకు ప్రత్యేక విందులు
          </p>
          <p className="mt-1.5 text-stone-200 text-xs sm:text-sm max-w-lg mx-auto">
            From ceremonial banana-leaf meals to royal wedding receptions, we provide dedicated cooks, service staff, and festive chafing dishes.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS_LIST.map((occ) => (
            <div
              key={occ.id}
              className="group rounded-2xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 overflow-hidden hover:border-amber-500 hover:shadow-xl transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-44 overflow-hidden bg-amber-50">
                <img
                  src={occ.image}
                  alt={occ.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs border border-amber-300 text-stone-900 text-[10px] font-bold shadow-xs">
                    {occ.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-telugu text-[11px] text-[#991b1b] font-bold mb-0.5">
                    {occ.teluguTitle}
                  </p>
                  <h3 className="font-royal text-base sm:text-lg font-bold text-[#451a03] group-hover:text-[#b45309] transition-colors leading-snug">
                    {occ.title}
                  </h3>
                  <p className="mt-1.5 text-stone-600 text-xs leading-relaxed">
                    {occ.description}
                  </p>

                  {/* Included features */}
                  <div className="mt-3 space-y-1.5 pt-2.5 border-t border-amber-100">
                    {occ.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-1.5 text-xs text-stone-700">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100">
                  <a
                    href="#booking-quota"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#78350f] border border-amber-300 py-2 text-xs font-bold transition-all shadow-xs"
                  >
                    <Calendar className="h-3 w-3" />
                    <span>Check Quota for this Event</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
