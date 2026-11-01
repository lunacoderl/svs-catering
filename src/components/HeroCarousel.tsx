import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CalendarCheck, Phone, Sparkles, UtensilsCrossed, Award } from 'lucide-react';
import { HERO_SLIDES } from '../data/cateringData';
import { triggerFestiveConfetti } from './CelebrationEffects';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#090d0a]"
      style={{ backgroundColor: '#090d0a' }}
    >
      {/* Permanent deep base layer: Prevents ANY white flash during crossfade transitions */}
      <div className="absolute inset-0 bg-[#090d0a] z-0 pointer-events-none" />

      {/* Background Slides with Fixed Parallax (Seamless Crossfade with Zero White Flash) */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-fixed-parallax transition-opacity duration-1000 ease-in-out will-change-[opacity] ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundColor: '#090d0a',
            }}
          >
            {/* Contrast overlay for vivid image and crisp readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          </div>
        );
      })}

      {/* Floating Aromatic Steam Visual FX */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6 pointer-events-none opacity-60">
        <div className="h-8 w-1.5 rounded-full bg-amber-300 animate-steam" />
        <div className="h-12 w-2 rounded-full bg-amber-400 animate-steam [animation-delay:0.7s]" />
        <div className="h-9 w-1.5 rounded-full bg-amber-300 animate-steam [animation-delay:1.4s]" />
      </div>

      {/* Content Container (Sits on top and scrolls over the fixed background image) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center flex flex-col items-center">
        {/* Festive Anniversary Badge */}
        <div
          onClick={triggerFestiveConfetti}
          className="cursor-pointer inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#fde047] shadow-sm hover:scale-105 transition-all mb-3"
        >
          <Award className="h-3.5 w-3.5 text-[#fde047]" />
          <span>10+ Years of Feasts (2015 – 2025+)</span>
          <Sparkles className="h-3.5 w-3.5 text-[#fde047]" />
        </div>

        {/* Telugu Title */}
        <p className="font-telugu text-base sm:text-xl text-[#fde047] font-bold tracking-wide drop-shadow mb-1.5">
          {HERO_SLIDES[currentSlide].teluguTitle}
        </p>

        {/* Main Royal Heading */}
        <h1 className="font-royal text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
          S.V.S. CATERING
          <span className="block text-lg sm:text-2xl md:text-3xl text-amber-200 font-serif-display font-medium mt-1 italic">
            {HERO_SLIDES[currentSlide].title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs sm:text-sm text-stone-200 font-medium leading-relaxed drop-shadow">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Highlight Pills */}
        <div className="mt-3.5 flex flex-wrap justify-center gap-1.5 text-xs text-amber-100 font-semibold bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/40">
          <UtensilsCrossed className="h-3.5 w-3.5 text-amber-300" />
          <span>{HERO_SLIDES[currentSlide].highlight}</span>
        </div>

        {/* Clean Call to Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#booking-quota"
            onClick={triggerFestiveConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] px-6 py-2.5 text-xs sm:text-sm font-bold text-stone-900 shadow-md hover:brightness-110 hover:scale-105 transition-all"
          >
            <CalendarCheck className="h-4 w-4 text-stone-900" />
            Check Menu Quota
          </a>

          <a
            href="#food"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-300/80 bg-black/50 hover:bg-black/70 px-5 py-2.5 text-xs sm:text-sm font-semibold text-amber-100 backdrop-blur-md transition-all hover:scale-105"
          >
            Explore Feasts
          </a>

          <a
            href="tel:9032479193"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#991b1b] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#dc2626] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Santanosh & Nayudu
          </a>
        </div>

        {/* Location tag */}
        <p className="mt-6 text-[11px] text-amber-200/90 tracking-wide font-medium">
          📍 Sivanaidu Gardens, Karrivari St, Gavarapalem, Anakapalle • Vizag & AP
        </p>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-amber-600/80 text-white backdrop-blur-md border border-amber-400/40 transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-amber-600/80 text-white backdrop-blur-md border border-amber-400/40 transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 z-30 flex items-center gap-1.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? 'w-6 bg-[#fde047]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
