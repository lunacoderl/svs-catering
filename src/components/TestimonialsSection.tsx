import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/cateringData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="relative min-h-[75vh] py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/carosel2.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <Heart className="h-3 w-3 text-red-400" /> Customer Love • కస్టమర్ల ప్రశంసలు
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Words of Praise from <span className="text-amber-300">Cherished Families</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            వేలమంది అతిథులను మెప్పించిన మా రుచులు మరియు ఆత్మీయ సేవలు
          </p>
        </div>

        {/* Testimonials Cards (Luminous Ivory Cards scrolling over fixed background) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-amber-500 hover:shadow-2xl transition-all duration-200"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Telugu Highlight Quote */}
                {t.teluguQuote && (
                  <p className="font-telugu text-xs sm:text-sm text-[#991b1b] font-bold mb-2.5 border-l-2 border-amber-400 pl-2.5 italic">
                    "{t.teluguQuote}"
                  </p>
                )}

                {/* English Body */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-5 pt-3 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#451a03] text-xs sm:text-sm">{t.clientName}</h4>
                  <p className="text-[11px] text-stone-500">{t.location}</p>
                  <p className="text-[10px] text-[#b45309] font-semibold mt-0.5">{t.event}</p>
                </div>
                <div className="h-7 w-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#b45309]">
                  <Quote className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
