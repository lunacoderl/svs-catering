import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/cateringData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section 
      id="faq" 
      className="relative min-h-[60vh] py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/carosel3.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <HelpCircle className="h-3 w-3 text-amber-300" /> Answers to Questions • సందేహాలు
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Frequently Asked <span className="text-amber-300">Questions</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            క్యాటరింగ్ ఆర్డర్లు మరియు సేవల గురించి ముఖ్యమైన సమాచారం
          </p>
        </div>

        {/* Accordion List (Luminous Ivory Cards scrolling over fixed background) */}
        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 overflow-hidden transition-all duration-200 shadow-lg"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-amber-50/70 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#451a03] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b45309]" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#b45309] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-amber-100 pt-2.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
