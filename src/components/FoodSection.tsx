import React, { useState } from 'react';
import { Utensils, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { FOOD_ITEMS } from '../data/cateringData';
import { triggerFestiveConfetti } from './CelebrationEffects';

export const FoodSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'veg' | 'non-veg' | 'live' | 'sweets'>('all');
  const [isSwitching, setIsSwitching] = useState(false);

  const categories = [
    { id: 'all', label: 'All Feasts', telugu: 'మొత్తం విందు' },
    { id: 'veg', label: 'Pure Veg Feasts', telugu: 'శాకాహార విందు' },
    { id: 'non-veg', label: 'Royal Non-Veg', telugu: 'నాన్-వెజ్ ఘుమఘుమలు' },
    { id: 'live', label: 'Live Counters', telugu: 'లైవ్ కౌంటర్లు' },
    { id: 'sweets', label: 'Royal Sweets', telugu: 'మిఠాయిలు' },
  ];

  const handleTabChange = (cat: 'all' | 'veg' | 'non-veg' | 'live' | 'sweets') => {
    setIsSwitching(true);
    setActiveCategory(cat);
    setTimeout(() => {
      setIsSwitching(false);
    }, 250);
  };

  const filteredItems = activeCategory === 'all'
    ? FOOD_ITEMS
    : FOOD_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section 
      id="food" 
      className="relative min-h-screen py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/hero-section-bg.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <Utensils className="h-3 w-3 text-amber-300" /> Culinary Excellence • రాయల్ రుచులు
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Our Grand <span className="text-amber-300">Celebration Menus</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            అతిథుల మనసులు గెలుచుకునే అచ్చమైన ఆంధ్ర రుచుల విందు
          </p>
          <p className="mt-1.5 text-stone-200 text-xs sm:text-sm max-w-lg mx-auto">
            Ceremonial banana-leaf meals, wood-pressed podis, royal Biryani banquets, and sizzling live counters.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 scrollbar-none max-w-3xl mx-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id as any)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex flex-col items-center backdrop-blur-md ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white shadow-md scale-102 border border-amber-300'
                  : 'bg-black/60 text-stone-200 hover:bg-black/80 border border-amber-400/40'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[9px] font-telugu leading-tight ${activeCategory === cat.id ? 'text-amber-200' : 'text-stone-300'}`}>
                {cat.telugu}
              </span>
            </button>
          ))}
        </div>

        {/* Food Items Grid with Skeleton Loading Simulation */}
        {isSwitching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl bg-white border border-amber-200 overflow-hidden p-3.5 space-y-3">
                <div className="h-44 rounded-xl skeleton-loading" />
                <div className="h-5 w-3/4 rounded-lg skeleton-loading" />
                <div className="h-3 w-full rounded-lg skeleton-loading" />
                <div className="h-3 w-2/3 rounded-lg skeleton-loading" />
                <div className="h-8 w-full rounded-xl skeleton-loading" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 overflow-hidden hover:border-amber-500 hover:shadow-xl transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                {/* Image Container with Steam FX */}
                <div className="relative h-48 overflow-hidden bg-amber-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Rising Aromatic Steam */}
                  <div className="absolute bottom-3 right-3 flex gap-1 pointer-events-none opacity-70">
                    <span className="h-3 w-1 rounded-full bg-amber-200 animate-steam" />
                    <span className="h-5 w-1 rounded-full bg-amber-300 animate-steam [animation-delay:0.4s]" />
                    <span className="h-4 w-1 rounded-full bg-amber-200 animate-steam [animation-delay:0.8s]" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs border border-amber-300 text-stone-900 text-[10px] font-bold uppercase shadow-xs">
                      {item.category === 'veg' && '🥬 Pure Veg'}
                      {item.category === 'non-veg' && '🍗 Royal Non-Veg'}
                      {item.category === 'live' && '🍳 Live Cooking'}
                      {item.category === 'sweets' && '🍮 Royal Sweet'}
                    </span>
                  </div>

                  {/* Spice Badge */}
                  {item.spiceLevel && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-[10px] font-bold flex items-center gap-1 shadow-xs">
                      <Flame className="h-2.5 w-2.5 text-red-600" />
                      {item.spiceLevel}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.teluguName && (
                      <p className="font-telugu text-[11px] text-[#991b1b] font-bold mb-0.5">
                        {item.teluguName}
                      </p>
                    )}
                    <h3 className="font-royal text-base sm:text-lg font-bold text-[#451a03] group-hover:text-[#b45309] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-stone-600 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] font-medium text-stone-700 flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-4 pt-3 border-t border-amber-100">
                    <a
                      href="#booking-quota"
                      onClick={triggerFestiveConfetti}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#78350f] border border-amber-300 py-2 text-xs font-bold transition-all shadow-xs"
                    >
                      <span>Customise in Menu Quota</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
