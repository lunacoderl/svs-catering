import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  ChevronDown,
  MessageSquare
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hotlineDropdownOpen, setHotlineDropdownOpen] = useState(false);
  const [activeHotlineIdx, setActiveHotlineIdx] = useState(0);

  const hotlineRef = useRef<HTMLDivElement>(null);

  const hotlines = [
    { name: 'Santanosh', telugu: 'సంతోష్', number: '90324 79193', tel: '9032479193', role: 'Owner & Culinary Director' },
    { name: 'Naidu', telugu: 'నాయుడు', number: '90324 79194', tel: '9032479194', role: 'Owner & Operations Lead' },
  ];

  // Subtle auto-switch between Santanosh and Naidu every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHotlineIdx((prev) => (prev + 1) % hotlines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [hotlines.length]);

  // Handle scroll and auto-close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 50) {
        setHotlineDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hotlineRef.current && !hotlineRef.current.contains(event.target as Node)) {
        setHotlineDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Heritage', icon: Award, href: '#about' },
    { label: 'Feasts', icon: Utensils, href: '#food' },
    { label: 'Occasions', icon: Sparkles, href: '#occasions' },
    { label: 'Banquet Quota', icon: CalendarCheck, href: '#booking-quota', highlight: true },
    { label: 'Venues', icon: MapPin, href: '#locations' },
    { label: 'Reviews', icon: Star, href: '#testimonials', hideOnLg: true },
    { label: 'FAQ', icon: HelpCircle, href: '#faq', hideOnLg: true },
    { label: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm">
      {/* Sleek Top Announcement Strip (Slim, Non-Wrapping, Both Numbers Clearly on Screen) */}
      <div className="bg-gradient-to-r from-[#78350f] via-[#991b1b] to-[#78350f] text-amber-100 text-[11px] py-1 px-3 border-b border-amber-300/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Brand & Heritage */}
          <div className="flex items-center gap-1.5 truncate">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fde047] animate-ping shrink-0" />
            <span className="font-semibold truncate">
              🎉 10+ Yrs (2015-2025) • శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్
            </span>
          </div>

          {/* Desktop Dual Numbers Direct Display */}
          <div className="hidden md:flex items-center gap-3 text-[11px] font-semibold shrink-0">
            <a
              href="tel:9032479193"
              className="hover:text-white transition-colors flex items-center gap-1 group"
              title="Call Santanosh: +91 90324 79193"
            >
              <Phone className="h-2.5 w-2.5 text-[#fde047]" />
              <span className="text-amber-200 group-hover:text-white">Santanosh:</span>
              <strong className="text-white group-hover:underline">90324 79193</strong>
            </a>
            <span className="text-amber-400/40">|</span>
            <a
              href="tel:9032479194"
              className="hover:text-white transition-colors flex items-center gap-1 group"
              title="Call Naidu: +91 90324 79194"
            >
              <Phone className="h-2.5 w-2.5 text-[#fde047]" />
              <span className="text-amber-200 group-hover:text-white">Naidu (నాయుడు):</span>
              <strong className="text-white group-hover:underline">90324 79194</strong>
            </a>
          </div>

          {/* Mobile Hotlines Badge */}
          <div className="md:hidden flex items-center gap-1.5 text-[10px] font-bold text-amber-200 shrink-0">
            <a href="tel:9032479193" className="hover:text-white flex items-center gap-0.5">
              <span>సంతోష్:</span>
              <span className="text-white">90324 79193</span>
            </a>
            <span className="text-amber-400/40">•</span>
            <a href="tel:9032479194" className="hover:text-white flex items-center gap-0.5">
              <span>నాయుడు:</span>
              <span className="text-white">90324 79194</span>
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
          {/* Brand Logo & Compact Identity with Correct Telugu Full Form */}
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
              <span className="font-telugu text-[10px] text-[#991b1b] font-bold leading-tight">
                శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation (Uncluttered & Airy) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    link.hideOnLg ? 'hidden xl:flex' : 'flex'
                  } ${
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

          {/* Quick Header Actions: Unique Royal Hotline Capsule + Menu Quota */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Menu Quota Button */}
            <a
              href="#booking-quota"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-400 bg-amber-50 hover:bg-amber-100 text-[#78350f] text-xs font-bold transition-all shadow-2xs"
            >
              <CalendarCheck className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Menu Quota</span>
            </a>

            {/* UNIQUE ROYAL HOTLINE CAPSULE (Compact, Non-Clumsy, Auto-Rotating Ticker & Dropdown) */}
            <div className="relative" ref={hotlineRef}>
              <button
                type="button"
                onClick={() => setHotlineDropdownOpen(!hotlineDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-gradient-to-r from-[#881337] via-[#9a3412] to-[#78350f] text-white text-[11px] sm:text-xs font-bold shadow-xs hover:shadow-md transition-all border border-amber-400/50 hover:border-amber-300 cursor-pointer active:scale-95"
                aria-label="Direct Hotlines for Santanosh and Naidu"
                title="Click to view direct owner hotlines"
              >
                {/* Glowing Live Indicator Icon */}
                <div className="relative flex items-center justify-center shrink-0">
                  <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#fde047]" />
                  <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Vertical Auto-Rotating Ticker Showing BOTH Santanosh and Naidu */}
                <div className="h-4 overflow-hidden text-left min-w-[125px] sm:min-w-[145px]">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${activeHotlineIdx * 100}%)` }}
                  >
                    {hotlines.map((h) => (
                      <div key={h.name} className="h-4 flex items-center gap-1 leading-none">
                        <span className="text-amber-200 font-semibold">{h.name}:</span>
                        <span className="text-white font-extrabold tracking-wide">{h.number}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dropdown Chevron */}
                <ChevronDown
                  className={`h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-300 transition-transform duration-200 shrink-0 ${
                    hotlineDropdownOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {/* ROYAL HOTLINE POP-OVER CLOCHE (Opens on click for 1-tap dialling) */}
              {hotlineDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-[#fffdfa] border-2 border-amber-300 shadow-2xl p-4 z-50 text-stone-800 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Cloche Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-amber-100">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <h4 className="font-royal text-xs font-bold text-[#78350f]">
                        ROYAL HOTLINES • సంప్రదించండి
                      </h4>
                    </div>
                    <span className="text-[9px] text-amber-800 bg-amber-100 font-semibold px-2 py-0.5 rounded-full">
                      24/7 Booking
                    </span>
                  </div>

                  <p className="text-[10px] text-stone-600 mt-1 mb-3 font-telugu">
                    శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్ • ఆర్డర్స్ & ముహూర్తం తేదీ కోటా
                  </p>

                  {/* Founder 1: Santanosh */}
                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 mb-2 flex items-center justify-between gap-2 hover:bg-amber-100/70 transition-colors">
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs text-stone-900">Santanosh</span>
                        <span className="text-[10px] text-[#991b1b] font-telugu font-bold">(సంతోష్)</span>
                      </div>
                      <p className="text-[9px] text-stone-500 font-medium">Founder & Catering Director</p>
                      <p className="text-xs font-extrabold text-[#78350f] mt-0.5">+91 90324 79193</p>
                    </div>
                    <a
                      href="tel:9032479193"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#991b1b] to-[#b91c1c] text-white text-[11px] font-bold shadow-xs hover:scale-105 active:scale-95 transition-all"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call</span>
                    </a>
                  </div>

                  {/* Founder 2: Naidu */}
                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 mb-3 flex items-center justify-between gap-2 hover:bg-amber-100/70 transition-colors">
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs text-stone-900">Naidu</span>
                        <span className="text-[10px] text-[#991b1b] font-telugu font-bold">(నాయుడు)</span>
                      </div>
                      <p className="text-[9px] text-stone-500 font-medium">Founder & Operations Lead</p>
                      <p className="text-xs font-extrabold text-[#78350f] mt-0.5">+91 90324 79194</p>
                    </div>
                    <a
                      href="tel:9032479194"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#b45309] to-[#d97706] text-white text-[11px] font-bold shadow-xs hover:scale-105 active:scale-95 transition-all"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call</span>
                    </a>
                  </div>

                  {/* Instant WhatsApp Option */}
                  <a
                    href="https://wa.me/919032479193?text=Namaskaram%20S.V.S.%20Catering%20(Santanosh%20&%20Naidu%20Garu),%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20our%20celebration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs font-bold shadow-xs transition-transform active:scale-98"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp Inquiry (Instant Response)</span>
                  </a>
                </div>
              )}
            </div>

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
                    <p className="text-[9px] text-[#991b1b] font-telugu font-bold">శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్</p>
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

            {/* Quick Contacts Footer with Both Santanosh & Naidu with their numbers */}
            <div className="mt-4 pt-3 border-t border-amber-100 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-center">
                <a
                  href="tel:9032479193"
                  className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold"
                >
                  <Phone className="h-3 w-3 mx-auto mb-0.5 text-[#b45309]" />
                  <span>Santanosh (సంతోష్)</span>
                  <span className="block text-[10px] text-red-700 font-extrabold">90324 79193</span>
                </a>
                <a
                  href="tel:9032479194"
                  className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold"
                >
                  <Phone className="h-3 w-3 mx-auto mb-0.5 text-[#b45309]" />
                  <span>Naidu (నాయుడు)</span>
                  <span className="block text-[10px] text-red-700 font-extrabold">90324 79194</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
