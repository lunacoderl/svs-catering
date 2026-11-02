import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Home, 
  Award, 
  Utensils, 
  Calendar, 
  CalendarCheck, 
  MapPin, 
  Image as ImageIcon, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Clock,
  HeartHandshake,
  Baby,
  Cake,
  Users
} from 'lucide-react';
import { triggerFestiveConfetti } from './CelebrationEffects';

// Custom Banquet Cloche Icon matching reference design
const ClocheIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5V3" />
    <circle cx="12" cy="3" r="1" fill="currentColor" />
    <path d="M4 18h16" />
    <path d="M4 18a8 8 0 0 1 16 0" />
    <path d="M2 19h20" />
  </svg>
);

interface OccasionSubItem {
  label: string;
  telugu?: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const OCCASION_ITEMS: OccasionSubItem[] = [
  { label: 'Weddings (Pelli Vindu)', icon: HeartHandshake, href: '#occasions' },
  { label: 'Gruhapravesam', icon: Home, href: '#occasions' },
  { label: 'Sreemantham / Seemantham', icon: Baby, href: '#occasions' },
  { label: 'Birthday & Half-Saree', icon: Cake, href: '#occasions' },
  { label: 'Corporate Events', icon: Users, href: '#occasions' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [occasionsDropdownOpen, setOccasionsDropdownOpen] = useState(false);
  const [mobileOccasionsExpanded, setMobileOccasionsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'food', 'occasions', 'locations', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOccasionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleActionClick = (targetId: string) => {
    triggerFestiveConfetti();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setOccasionsDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. TOP BAR (Announcement & Contact Strip exactly as in reference image) */}
      <div className="bg-[#5a0d14] text-amber-100 text-[11px] py-1.5 px-3 sm:px-6 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left/Center: Contact Hotlines with Dividers & WhatsApp Inquiry */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-stone-200 text-[11px]">
            {/* Santanosh */}
            <a
              href="tel:9032479193"
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="Call Santanosh: +91 90324 79193"
            >
              <Phone className="h-3 w-3 text-[#fde047]" />
              <span className="hidden xs:inline text-amber-200">Santanosh:</span>
              <strong className="text-white font-bold">+91 90324 79193</strong>
            </a>

            <span className="text-amber-300/40">|</span>

            {/* Naidu */}
            <a
              href="tel:9032479194"
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="Call Naidu: +91 90324 79194"
            >
              <Phone className="h-3 w-3 text-[#fde047]" />
              <span className="hidden xs:inline text-amber-200">Naidu:</span>
              <strong className="text-white font-bold">+91 90324 79194</strong>
            </a>

            <span className="text-amber-300/40">|</span>

            {/* WhatsApp Inquiry */}
            <a
              href="https://wa.me/919032479193?text=Namaskaram%20S.V.S.%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20our%20celebration."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors text-emerald-300 font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="h-3 w-3 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Inquiry</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Right: 24/7 Booking Pill Badge (as in reference image) */}
          <div className="shrink-0 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fff4dd] text-[#5a0d14] text-[10px] sm:text-[11px] font-bold border border-amber-300 shadow-2xs">
            <Clock className="h-3 w-3 text-[#5a0d14]" />
            <span>24/7 Booking</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR BAR */}
      <header
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#fffdf9]/98 backdrop-blur-md shadow-md border-b border-amber-200/80 py-1.5'
            : 'bg-[#fffdf9]/95 backdrop-blur-sm py-2 border-b border-amber-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Typography (as in reference image) */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <img
              src="/logo.png"
              alt="S.V.S. Catering Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-royal font-black text-sm sm:text-base text-[#5a0d14] tracking-wide leading-none">
                S.V.S. CATERING
              </span>
              <span className="font-telugu text-[10px] sm:text-[11px] text-[#80141c] font-bold leading-tight mt-0.5">
                శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్
              </span>
            </div>
          </a>

          {/* 3. DESKTOP NAVIGATION LINKS (Matches Full View in image) */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold text-stone-700">
            
            {/* Home (Solid Maroon Pill when active) */}
            <a
              href="#hero"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all text-xs font-bold ${
                activeSection === 'hero'
                  ? 'bg-[#80141c] text-white shadow-xs'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </a>

            {/* Heritage */}
            <a
              href="#about"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'about'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <Award className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Heritage</span>
            </a>

            {/* Feasts */}
            <a
              href="#food"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'food'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <Utensils className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Feasts</span>
            </a>

            {/* Occasions with Interactive Dropdown (Exactly matching image layout) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setOccasionsDropdownOpen(true)}
              onMouseLeave={() => setOccasionsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOccasionsDropdownOpen(!occasionsDropdownOpen)}
                className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                  occasionsDropdownOpen || activeSection === 'occasions'
                    ? 'bg-amber-100 text-[#80141c] font-bold'
                    : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
                }`}
                aria-expanded={occasionsDropdownOpen}
              >
                <Calendar className="h-3.5 w-3.5 text-[#b45309]" />
                <span>Occasions</span>
                <ChevronDown
                  className={`h-3 w-3 text-stone-500 transition-transform duration-200 ${
                    occasionsDropdownOpen ? 'rotate-180 text-[#80141c]' : ''
                  }`}
                />
              </button>

              {/* OCCASIONS FLOATING DROPDOWN CARD (Matches mockup in image) */}
              {occasionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-60 rounded-2xl bg-[#fffdfa] border border-amber-300 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-0.5">
                    {OCCASION_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setOccasionsDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors group"
                        >
                          <Icon className="h-4 w-4 text-[#b45309] group-hover:scale-110 transition-transform" />
                          <span>{item.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Venues */}
            <a
              href="#locations"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'locations'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <MapPin className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Venues</span>
            </a>

            {/* Gallery */}
            <a
              href="#food"
              className="px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-stone-700 hover:text-[#80141c] hover:bg-amber-50 transition-colors"
            >
              <ImageIcon className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Gallery</span>
            </a>

            {/* Reviews */}
            <a
              href="#testimonials"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'testimonials'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <Star className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Reviews</span>
            </a>

            {/* FAQ */}
            <a
              href="#faq"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'faq'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5 text-[#b45309]" />
              <span>FAQ</span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                activeSection === 'contact'
                  ? 'text-[#80141c] font-bold bg-amber-50'
                  : 'text-stone-700 hover:text-[#80141c] hover:bg-amber-50'
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-[#b45309]" />
              <span>Contact</span>
            </a>
          </nav>

          {/* 4. RIGHT ACTION BUTTONS (Menu Quote + Book Now as in image) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Menu Quote Button (Cloche Icon + Cream background + Gold border) */}
            <button
              onClick={() => handleActionClick('booking-quota')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#fff8ea] border-2 border-amber-300 hover:border-amber-400 hover:bg-amber-100 text-[#78350f] text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <ClocheIcon className="h-4 w-4 text-[#b45309]" />
              <span className="whitespace-nowrap">Menu Quote</span>
            </button>

            {/* Book Now Button (Calendar Icon + Maroon fill) */}
            <button
              onClick={() => handleActionClick('booking-quota')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-[#651016] to-[#80141c] hover:from-[#80141c] hover:to-[#991b1b] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              <span className="whitespace-nowrap">Book Now</span>
            </button>

            {/* Mobile / Tablet Hamburger Menu Button (Solid maroon square with white icon) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-[#80141c] hover:bg-[#651016] text-white focus:outline-none shadow-xs transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 5. MOBILE NAVBAR DRAWER (Menu Open - Exactly matching the smartphone mockup in reference image) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Container (Right side slide-out) */}
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#fffdfa] border-l-2 border-amber-300 p-5 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Top Header (Logo + Brand + Close Button) */}
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-200">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="S.V.S. Catering Logo" className="h-8 w-auto object-contain" />
                  <div>
                    <h3 className="font-royal text-xs font-bold text-[#5a0d14]">S.V.S. CATERING</h3>
                    <p className="text-[9px] text-[#80141c] font-telugu font-bold">శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్</p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-[#80141c] text-white hover:bg-[#651016] transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Items (Matches Mobile Drawer in image) */}
              <div className="mt-4 flex flex-col gap-1.5">
                {/* 1. Home (Highlighted Soft Peach Pill as in image) */}
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#ffedd5] text-[#80141c] font-bold text-xs shadow-2xs"
                >
                  <Home className="h-4 w-4 text-[#80141c]" />
                  <span>Home</span>
                </a>

                {/* 2. Heritage */}
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <Award className="h-4 w-4 text-[#b45309]" />
                  <span>Heritage</span>
                </a>

                {/* 3. Feasts */}
                <a
                  href="#food"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <Utensils className="h-4 w-4 text-[#b45309]" />
                  <span>Feasts</span>
                </a>

                {/* 4. Occasions (Accordion Toggle with Chevron) */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileOccasionsExpanded(!mobileOccasionsExpanded)}
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-[#b45309]" />
                      <span>Occasions</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-stone-500 transition-transform duration-200 ${
                        mobileOccasionsExpanded ? 'rotate-180 text-[#80141c]' : ''
                      }`}
                    />
                  </button>

                  {/* Occasions Sub-items */}
                  {mobileOccasionsExpanded && (
                    <div className="ml-5 mt-1 space-y-1 pl-3 border-l-2 border-amber-200">
                      {OCCASION_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-stone-600 hover:text-[#80141c] hover:bg-amber-50 transition-colors"
                          >
                            <Icon className="h-3.5 w-3.5 text-[#b45309]" />
                            <span>{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 5. Venues */}
                <a
                  href="#locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <MapPin className="h-4 w-4 text-[#b45309]" />
                  <span>Venues</span>
                </a>

                {/* 6. Gallery */}
                <a
                  href="#food"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <ImageIcon className="h-4 w-4 text-[#b45309]" />
                  <span>Gallery</span>
                </a>

                {/* 7. Reviews */}
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <Star className="h-4 w-4 text-[#b45309]" />
                  <span>Reviews</span>
                </a>

                {/* 8. FAQ */}
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <HelpCircle className="h-4 w-4 text-[#b45309]" />
                  <span>FAQ</span>
                </a>

                {/* 9. Contact */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-[#80141c] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#b45309]" />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Drawer Bottom Actions & Direct Hotlines (Matches reference image) */}
            <div className="mt-5 pt-4 border-t border-amber-200 space-y-3">
              
              {/* Dual Action Buttons Row: Menu Quote & Book Now */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleActionClick('booking-quota')}
                  className="py-2.5 px-3 rounded-xl bg-[#fff8ea] border-2 border-amber-300 text-[#78350f] text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
                >
                  <ClocheIcon className="h-3.5 w-3.5 text-[#b45309]" />
                  <span>Menu Quote</span>
                </button>

                <button
                  onClick={() => handleActionClick('booking-quota')}
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#651016] to-[#80141c] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  <span>Book Now</span>
                </button>
              </div>

              {/* Direct Hotlines Display */}
              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80 space-y-1.5">
                <a
                  href="tel:9032479193"
                  className="flex items-center justify-between text-xs font-bold text-stone-800 hover:text-[#80141c]"
                >
                  <span className="flex items-center gap-1.5 text-stone-600 font-semibold">
                    <Phone className="h-3 w-3 text-[#b45309]" />
                    Santanosh:
                  </span>
                  <span className="text-[#80141c] font-extrabold">+91 90324 79193</span>
                </a>

                <a
                  href="tel:9032479194"
                  className="flex items-center justify-between text-xs font-bold text-stone-800 hover:text-[#80141c]"
                >
                  <span className="flex items-center gap-1.5 text-stone-600 font-semibold">
                    <Phone className="h-3 w-3 text-[#b45309]" />
                    Naidu:
                  </span>
                  <span className="text-[#80141c] font-extrabold">+91 90324 79194</span>
                </a>
              </div>

              {/* Bright Green WhatsApp Inquiry Full-Width Pill (as in reference image) */}
              <a
                href="https://wa.me/919032479193?text=Namaskaram%20S.V.S.%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20our%20celebration."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-transform active:scale-98"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Inquiry</span>
              </a>

              {/* Light Cream 24/7 Booking Full-Width Pill (as in reference image) */}
              <div className="w-full py-2 px-4 rounded-full bg-[#fff4dd] border border-amber-300 text-[#5a0d14] font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs">
                <Clock className="h-3.5 w-3.5 text-[#5a0d14]" />
                <span>24/7 Booking</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
