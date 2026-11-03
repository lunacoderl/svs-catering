import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, CalendarCheck, ArrowUp } from 'lucide-react';
import { triggerFestiveConfetti } from './CelebrationEffects';

export const FloatingActionDock: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleBookingClick = () => {
    triggerFestiveConfetti();
    const el = document.getElementById('booking-quota');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-3 sm:right-5 z-50 flex flex-col items-center gap-2 sm:gap-2.5">
      {/* 1. Direct Call CTA */}
      <a
        href="tel:9032479193"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#991b1b] to-[#dc2626] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-150"
        aria-label="Call Santanosh & Naidu"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce [animation-duration:3s]" />
        <span className="pointer-events-none absolute right-14 hidden rounded-md bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-white shadow-md border border-red-500/40 whitespace-nowrap lg:group-hover:block">
          📞 1. 90324 79193 | 2. 90324 79194
        </span>
      </a>

      {/* 2. Direct WhatsApp CTA */}
      <a
        href="https://wa.me/919032479193?text=Namaskaram%20S.V.S.%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20our%20celebration."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#15803d] to-[#22c55e] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-150"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="pointer-events-none absolute right-14 hidden rounded-md bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-white shadow-md border border-emerald-500/40 whitespace-nowrap lg:group-hover:block">
          💬 WhatsApp Chat
        </span>
      </a>

      {/* 3. Book Menu Quota CTA */}
      <button
        onClick={handleBookingClick}
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d97706] via-[#f59e0b] to-[#d97706] text-stone-900 shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
        aria-label="Book Menu Quota"
      >
        <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 text-stone-900" />
        <span className="pointer-events-none absolute right-14 hidden rounded-md bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-[#fde047] shadow-md border border-amber-400/40 whitespace-nowrap lg:group-hover:block">
          📋 Banquet Quota
        </span>
      </button>

      {/* 4. Scroll to Top CTA with smooth animation */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-[#78350f] border border-amber-300 shadow-md hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          <span className="pointer-events-none absolute right-12 hidden rounded-md bg-stone-900 px-2 py-0.5 text-[10px] font-medium text-stone-200 shadow-xs whitespace-nowrap lg:group-hover:block">
            Top
          </span>
        </button>
      )}
    </div>
  );
};
