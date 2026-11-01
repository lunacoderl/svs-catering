import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  CalendarCheck, 
  Utensils, 
  MapPin, 
  Star, 
  HelpCircle,
  Award,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Heritage', icon: Award, href: '#about' },
    { label: 'Menus', icon: Utensils, href: '#food' },
    { label: 'Occasions', icon: Sparkles, href: '#occasions' },
    { label: 'Banquet Quota', icon: CalendarCheck, href: '#booking-quota', highlight: true },
    { label: 'Venues', icon: MapPin, href: '#locations' },
    { label: 'Reviews', icon: Star, href: '#testimonials' },
    { label: 'FAQ', icon: HelpCircle, href: '#faq' },
    { label: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm">
      {/* Sleek Top Announcement Strip (Slim & Compact) */}
      <div className="bg-gradient-to-r from-[#881337] via-[#9a3412] to-[#881337] text-amber-100 text-[11px] py-1 px-3 border-b border-amber-300/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fde047] animate-ping shrink-0" />
            <span className="font-semibold truncate">
              🎉 10+ Yrs Milestone (2015-2025) • Anakapalle & Visakhapatnam
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold shrink-0">
            <a href="tel:9032479193" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="h-2.5 w-2.5 text-[#fde047]" />
              <span className="hidden sm:inline">Santanosh:</span> 90324 79193
            </a>
            <span className="hidden md:inline text-amber-200/40">|</span>
            <a href="tel:9032479194" className="hidden md:flex hover:text-white transition-colors items-center gap-1">
              <Phone className="h-2.5 w-2.5 text-[#fde047]" />
              <span>Nayudu:</span> 90324 79194
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Body */}
      <header
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#fffdf9]/95 backdrop-blur-md shadow-md border-b border-amber-200/80 py-1.5'
            : 'bg-[#fffdf9]/92 backdrop-blur-sm py-2 border-b border-amber-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 flex items-center justify-between gap-2">
          {/* Brand Logo & Compact Identity */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <img
              src="/logo.png"
              alt="S.V.S. Catering"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-royal font-bold text-sm sm:text-base text-[#78350f] tracking-wide leading-none">
                  S.V.S. CATERING
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold uppercase hidden xs:inline-block">
                  10 Yrs
                </span>
              </div>
              <span className="font-telugu text-[10px] text-[#991b1b] font-medium leading-tight">
                శ్రీ వెంకటేశ్వర స్వామి క్యాటరింగ్
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    link.highlight
                      ? 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white shadow-xs hover:brightness-110'
                      : 'text-stone-700 hover:text-[#b45309] hover:bg-amber-50'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${link.highlight ? 'text-amber-200' : 'text-[#b45309]'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#booking-quota"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-400 bg-amber-50 hover:bg-amber-100 text-[#78350f] text-xs font-bold transition-all shadow-2xs"
            >
              <CalendarCheck className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Menu Quota</span>
            </a>

            <a
              href="tel:9032479193"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#991b1b] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#dc2626] text-white text-xs font-bold shadow-xs transition-transform active:scale-95"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden xs:inline">Call</span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 hover:bg-amber-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer (100% Mobile Responsive) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-[#fffdfa] border-l border-amber-200 p-5 flex flex-col justify-between overflow-y-auto shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                  <div>
                    <h3 className="font-royal text-xs font-bold text-[#78350f]">S.V.S. CATERING</h3>
                    <p className="text-[9px] text-[#991b1b] font-telugu">అనకాపల్లి & వైజాగ్</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full bg-amber-100 text-stone-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Items with Icons */}
              <div className="mt-4 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        link.highlight
                          ? 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white shadow-xs'
                          : 'text-stone-700 hover:bg-amber-50 hover:text-[#991b1b]'
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${link.highlight ? 'text-amber-200' : 'text-[#b45309]'}`} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Contacts Footer */}
            <div className="mt-4 pt-3 border-t border-amber-100 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-center">
                <a
                  href="tel:9032479193"
                  className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold"
                >
                  <Phone className="h-3 w-3 mx-auto mb-0.5 text-[#b45309]" />
                  <span>Santanosh</span>
                  <span className="block text-[9px] text-stone-500 font-normal">90324 79193</span>
                </a>
                <a
                  href="tel:9032479194"
                  className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold"
                >
                  <Phone className="h-3 w-3 mx-auto mb-0.5 text-[#b45309]" />
                  <span>Nayudu</span>
                  <span className="block text-[9px] text-stone-500 font-normal">90324 79194</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
