import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#fffdfa] text-stone-700 border-t-2 border-amber-300 overflow-hidden pt-12 pb-8">
      {/* Decorative Traditional Rangoli / Temple Top Border Motif */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#78350f] via-[#eab308] to-[#78350f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-amber-200">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="S.V.S. Catering Logo"
                className="h-11 w-auto object-contain drop-shadow"
              />
              <div>
                <span className="font-royal text-base sm:text-lg font-extrabold text-[#78350f] tracking-wide block">
                  S.V.S. CATERING
                </span>
                <span className="font-telugu text-[11px] text-[#991b1b] font-bold block">
                  శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Celebrating 10+ years (2015-2025) of crafting authentic, soul-touching Andhra feasts for weddings, gruhapravesams, and grand banquets across Anakapalle and Visakhapatnam.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold">
              <Sparkles className="h-3 w-3 text-amber-600" />
              10th Anniversary Celebrated Milestone (2015 – 2025+)
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-royal text-xs font-bold text-[#451a03] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#b45309] transition-colors">✦ Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b45309] transition-colors">✦ 10 Yrs Heritage & Story</a>
              </li>
              <li>
                <a href="#food" className="hover:text-[#b45309] transition-colors">✦ Pure Veg & Non-Veg Menus</a>
              </li>
              <li>
                <a href="#booking-quota" className="hover:text-[#b45309] transition-colors text-[#b45309] font-bold">✦ Banquet Menu Quota</a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#b45309] transition-colors">✦ Occasions & Banquets</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#b45309] transition-colors">✦ Service Areas & Reach</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#b45309] transition-colors">✦ Contact & Venue Map</a>
              </li>
            </ul>
          </div>

          {/* Direct Owner Hotlines & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-royal text-xs font-bold text-[#451a03] uppercase tracking-wider">
              Direct Contact & Kitchen HQ
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-[#b45309] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:9032479193" className="text-stone-900 hover:text-[#b45309] font-bold block">
                    +91 90324 79193 <span className="font-normal text-stone-500 font-telugu">(సంతోష్ - Santanosh)</span>
                  </a>
                  <a href="tel:9032479194" className="text-stone-900 hover:text-[#b45309] font-bold block mt-0.5">
                    +91 90324 79194 <span className="font-normal text-stone-500 font-telugu">(నాయుడు - Naidu)</span>
                  </a>
                  <span className="text-[10px] text-stone-500 block mt-0.5">
                    Additional: +91 79892 96958 • +91 70136 66316
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#b45309] shrink-0" />
                <a href="mailto:svscatering.vizag@gmail.com" className="hover:text-[#b45309] transition-colors truncate">
                  svscatering.vizag@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#b45309] shrink-0 mt-0.5" />
                <span className="text-stone-600">
                  Sivanaidu Gardens, Karrivari Street, Gavarapalem, Anakapalli, Visakhapatnam – 531002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Blessing & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-stone-500">
          <p className="font-telugu text-[#991b1b] font-bold tracking-wide">
            అతిథి దేవో భవ • సర్వే జనాః సుఖినో భవంతు (శుభం భూయాత్)
          </p>
          <p>
            © {new Date().getFullYear()} S.V.S. Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
