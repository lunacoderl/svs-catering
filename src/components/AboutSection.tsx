import React from 'react';
import { Award, Utensils, HeartHandshake, ShieldCheck, Clock, MapPin, Sparkles, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/about-bg.png')` }}
    >
      {/* Semi-transparent overlay so the fixed background image is clearly seen scrolling underneath */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-black/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#fde047] mb-2 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" /> 12+ Years Experience Milestone
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            12+ Years of Royal Feasts & <span className="text-amber-300">Cherished Memories</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            12+ సంవత్సరాల అనుభవం & విశ్వసనీయత • అచ్చతెలుగు రుచుల అపురూప వేదిక
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-400/60" />
            <Utensils className="h-4 w-4 text-amber-300" />
            <span className="h-px w-10 bg-amber-400/60" />
          </div>
        </div>

        {/* Heritage Story & Owners Grid (Vibrant, Light-Themed Cards Scrolling over Fixed Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Legacy Description (Bright Ivory Card with Gold Border) */}
          <div className="lg:col-span-7 bg-[#fffdfa]/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#991b1b] to-[#b91c1c] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              Our Journey & Heritage
            </div>

            <h3 className="font-serif-display text-xl sm:text-2xl text-[#451a03] font-bold leading-snug">
              From Sivanaidu Gardens to Coastal Andhra's Most Beloved Catering Family
            </h3>

            <p className="mt-3 text-stone-700 text-xs sm:text-sm leading-relaxed">
              Founded in 2015 at <strong>Sivanaidu Gardens, Karrivari Street, Gavarapalem, Anakapalle</strong>,
              <strong> S.V.S. Catering</strong> was born from a timeless devotion to the authentic, heartwarming culinary traditions of Andhra.
              With over <strong>12+ Years Experience</strong>, we have catered over 1,500+ grand wedding banquets, Gruhapravesams, and joyous milestones across Anakapalle and Visakhapatnam.
            </p>

            <p className="mt-2.5 text-stone-700 text-xs sm:text-sm leading-relaxed">
              Whether it is the pure devotional sanctity of a <em>Satyanarayana Vratham Arati Aaku Bhojanam</em> prepared with pure cow ghee and traditional stone-ground Podis, or the rich, royal feast of an authentic <em>Visakha Dum Biryani and Natu Kodi Pulusu</em>, every single recipe is personally tasted and supervised by founders <strong>Santanosh (90324 79193)</strong> and <strong>Naidu (90324 79194)</strong>.
            </p>

            {/* Core Values / Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-amber-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-stone-800 font-bold">100% Quality & Hygiene</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                <span className="text-xs text-stone-800 font-bold">Punctual Muhurtham Serving</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-rose-600 shrink-0" />
                <span className="text-xs text-stone-800 font-bold">Warm Telugu Hospitality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profiles Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#fffdf8]/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl p-5 sm:p-7 shadow-2xl relative">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center text-[#b45309]">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-royal text-base sm:text-lg text-[#451a03] font-bold">Personal Owner Commitment</h4>
              </div>

              <p className="text-stone-700 text-xs leading-relaxed mb-4">
                Unlike commercial agency caterers, at S.V.S. Catering, the owners themselves oversee procurement of pure cow ghee and raw spices, supervise the cooking hearths, and stand at your buffet to guarantee exceptional hospitality.
              </p>

              {/* Founder 1: Santanosh */}
              <div className="p-3 rounded-xl bg-white border border-amber-200 mb-2.5 flex items-center justify-between shadow-2xs">
                <div>
                  <h5 className="font-bold text-[#1c1917] text-xs sm:text-sm">
                    Santanosh <span className="font-telugu text-[#991b1b] font-bold">(సంతోష్)</span>
                  </h5>
                  <p className="text-[10px] text-stone-500 font-medium">Owner & Culinary Director</p>
                </div>
                <a
                  href="tel:9032479193"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold hover:bg-amber-200 transition-all"
                >
                  <Phone className="h-3 w-3 text-[#b45309]" />
                  90324 79193
                </a>
              </div>

              {/* Founder 2: Naidu */}
              <div className="p-3 rounded-xl bg-white border border-amber-200 mb-2.5 flex items-center justify-between shadow-2xs">
                <div>
                  <h5 className="font-bold text-[#1c1917] text-xs sm:text-sm">
                    Naidu <span className="font-telugu text-[#991b1b] font-bold">(నాయుడు)</span>
                  </h5>
                  <p className="text-[10px] text-stone-500 font-medium">Owner & Event Operations Lead</p>
                </div>
                <a
                  href="tel:9032479194"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold hover:bg-amber-200 transition-all"
                >
                  <Phone className="h-3 w-3 text-[#b45309]" />
                  90324 79194
                </a>
              </div>

              {/* Registered Address */}
              <div className="mt-3 flex items-start gap-1.5 text-xs text-stone-600 pt-2.5 border-t border-amber-200">
                <MapPin className="h-3.5 w-3.5 text-[#b45309] shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  <strong>Kitchen & HQ:</strong> Sivanaidu Gardens, Karrivari Street, Gavarapalem, Anakapalli, Visakhapatnam – 531002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Statistics Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#fffdfa]/95 backdrop-blur-md border border-amber-300 rounded-xl p-4 text-center shadow-lg">
            <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#b45309] block">12+</span>
            <span className="text-xs text-stone-800 font-bold uppercase tracking-wider mt-0.5 block">Years Experience</span>
            <span className="font-telugu text-[10px] text-[#991b1b] font-semibold block mt-0.5">12+ సంవత్సరాల అనుభవం</span>
          </div>

          <div className="bg-[#fffdfa]/95 backdrop-blur-md border border-amber-300 rounded-xl p-4 text-center shadow-lg">
            <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#b45309] block">1,500+</span>
            <span className="text-xs text-stone-800 font-bold uppercase tracking-wider mt-0.5 block">Grand Events Catered</span>
            <span className="font-telugu text-[10px] text-[#991b1b] font-semibold block mt-0.5">విజయవంతమైన శుభకార్యాలు</span>
          </div>

          <div className="bg-[#fffdfa]/95 backdrop-blur-md border border-amber-300 rounded-xl p-4 text-center shadow-lg">
            <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#b45309] block">5 Lakh+</span>
            <span className="text-xs text-stone-800 font-bold uppercase tracking-wider mt-0.5 block">Delighted Guests</span>
            <span className="font-telugu text-[10px] text-[#991b1b] font-semibold block mt-0.5">తృప్తి చెందిన అతిథులు</span>
          </div>

          <div className="bg-[#fffdfa]/95 backdrop-blur-md border border-amber-300 rounded-xl p-4 text-center shadow-lg">
            <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#15803d] block">100%</span>
            <span className="text-xs text-stone-800 font-bold uppercase tracking-wider mt-0.5 block">Pure Cow Ghee & Spices</span>
            <span className="font-telugu text-[10px] text-[#991b1b] font-semibold block mt-0.5">స్వచ్ఛమైన నాణ్యత</span>
          </div>
        </div>
      </div>
    </section>
  );
};
