import React, { useState } from 'react';
import { CalendarCheck, Users, Sparkles, Phone, MessageSquare, Utensils, ReceiptText, ShieldCheck } from 'lucide-react';
import { MENU_PACKAGES } from '../data/cateringData';
import { triggerFestiveConfetti } from './CelebrationEffects';

export const BookingMenuQuota: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState(MENU_PACKAGES[1].id);
  const [guestCount, setGuestCount] = useState(250);
  const [eventDate, setEventDate] = useState('');
  const [occasion, setOccasion] = useState('Wedding / Reception (వివాహం)');
  const [location, setLocation] = useState('Anakapalle (అనకాపల్లి)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [includeLiveDosa, setIncludeLiveDosa] = useState(true);
  const [includeLiveJalebi, setIncludeLiveJalebi] = useState(true);
  const [includeLiveChaat, setIncludeLiveChaat] = useState(false);

  const selectedPkg = MENU_PACKAGES.find((p) => p.id === selectedPackageId) || MENU_PACKAGES[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    triggerFestiveConfetti();

    const addOns = [];
    if (includeLiveDosa) addOns.push('Live Ghee Podi Dosa Stall');
    if (includeLiveJalebi) addOns.push('Live Bellam Jalebi Stall');
    if (includeLiveChaat) addOns.push('Live Pani Puri & Chaat Stall');

    const message = `*Namaskaram S.V.S. Catering (Santanosh & Naidu Garu)*,%0A%0A` +
      `I would like to check date quota and request catering quotation for our celebration:%0A` +
      `---------------------------------------%0A` +
      `👤 *Name:* ${clientName || 'Valued Guest'}%0A` +
      `📱 *Phone:* ${clientPhone || 'Shared via chat'}%0A` +
      `🎉 *Occasion:* ${occasion}%0A` +
      `📍 *Location:* ${location}%0A` +
      `📅 *Event Date:* ${eventDate || 'To be confirmed'}%0A` +
      `👥 *Guest Quota:* ${guestCount} Plates%0A` +
      `📋 *Selected Menu Package:* ${selectedPkg.name} (${selectedPkg.teluguName})%0A` +
      `🍲 *Optional Live Stalls:* ${addOns.length > 0 ? addOns.join(', ') : 'Standard Menu'}%0A` +
      `---------------------------------------%0A` +
      `Please let us know your date availability and share quotation from Sivanaidu Gardens. Dhanyavadamulu!`;

    window.open(`https://wa.me/919032479193?text=${message}`, '_blank');
  };

  return (
    <section 
      id="booking-quota" 
      className="relative min-h-screen py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/carosel1.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <ReceiptText className="h-3 w-3 text-amber-300" /> Banquet Menu & Quota Registry • విందు పత్రిక
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Royal Catering <span className="text-amber-300">Menu & Date Quota</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            మీ వేడుకకు నచ్చిన మెనూని ఎంచుకోండి • తక్షణ తేదీ కోటా లెక్కింపు
          </p>
          <p className="mt-1.5 text-stone-200 text-xs sm:text-sm max-w-lg mx-auto">
            Browse our royal banquet menu card, select course dishes and live stalls, set your guest quota, and request a personalized booking quotation.
          </p>
        </div>

        {/* The Royal Menu Booklet (Light Ivory Vintage Paper & Gold Filigree) */}
        <div className="rounded-2xl border-2 border-amber-300 bg-[#fffdfb] shadow-2xl overflow-hidden relative">
          {/* Filigree Corner Accents */}
          <div className="absolute top-2 left-2 h-6 w-6 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
          <div className="absolute top-2 right-2 h-6 w-6 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
          <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
          <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-amber-500 pointer-events-none" />

          {/* Menu Card Header */}
          <div className="bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#78350f] py-3.5 px-5 text-center flex flex-col sm:flex-row items-center justify-between gap-2.5 text-white">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-amber-200/20 border border-amber-300 flex items-center justify-center text-amber-200">
                <Utensils className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="font-royal text-sm sm:text-base font-bold tracking-wide block">
                  S.V.S. ROYAL BANQUET MENU
                </span>
                <span className="text-[10px] text-amber-100 font-telugu block -mt-0.5">
                  శ్రీ వెంకట సుబ్రహ్మణ్యం కేటరింగ్ • అనకాపల్లి & వైజాగ్
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/60 text-emerald-200 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-ping" />
              <span>Muhurtham Quota Open for 2025 – 2026</span>
            </div>
          </div>

          {/* Menu Booklet Body: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Menu Courses (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-amber-200 bg-[#fffdfb]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-royal text-sm sm:text-base font-bold text-[#451a03] flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#b45309]" />
                  Step 1: Select Your Feast Package
                </h3>
                <span className="text-xs text-[#991b1b] font-telugu font-bold">మెనూ ప్యాకేజీలు</span>
              </div>

              {/* Package Tiers Radio Tabs (NO PRICES) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                {MENU_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      selectedPackageId === pkg.id
                        ? 'border-amber-500 bg-amber-50 shadow-xs ring-1 ring-amber-400'
                        : 'border-amber-200 bg-white hover:border-amber-300'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold block w-fit mb-1">
                        {pkg.badge}
                      </span>
                      <h4 className="font-bold text-[#451a03] text-xs sm:text-sm leading-tight">
                        {pkg.name}
                      </h4>
                      <p className="font-telugu text-[10px] text-[#991b1b] font-medium mt-0.5">
                        {pkg.teluguName}
                      </p>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-amber-100 text-[10px] text-stone-500">
                      {pkg.type === 'veg' ? '🥬 Pure Vegetarian' : '🍗 Royal Non-Veg'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Authentic Menu Layout (Paper Menu Style) */}
              <div className="rounded-xl bg-[#fffcf5] text-stone-900 p-4 sm:p-5 border border-amber-200 shadow-inner">
                <div className="text-center pb-3 border-b border-amber-200">
                  <span className="font-royal text-xs font-bold tracking-widest text-[#78350f] uppercase">
                    — Course Menu Spread —
                  </span>
                  <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#451a03]">
                    {selectedPkg.name}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 italic">
                    {selectedPkg.highlight}
                  </p>
                </div>

                {/* Courses List */}
                <div className="mt-3.5 space-y-3 text-xs leading-relaxed">
                  <div>
                    <h5 className="font-bold text-[#78350f] uppercase tracking-wide text-[10px]">
                      ✦ Welcome Drinks & Starters:
                    </h5>
                    <p className="text-stone-700 pl-2 mt-0.5 font-medium">
                      {selectedPkg.courses.welcome.join(' • ')}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#78350f] uppercase tracking-wide text-[10px]">
                      ✦ Signature Main Curries:
                    </h5>
                    <p className="text-stone-700 pl-2 mt-0.5 font-medium">
                      {selectedPkg.courses.main.join(' • ')}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#78350f] uppercase tracking-wide text-[10px]">
                      ✦ Rice, Biryani & Breads:
                    </h5>
                    <p className="text-stone-700 pl-2 mt-0.5 font-medium">
                      {selectedPkg.courses.riceAndBreads.join(' • ')}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#78350f] uppercase tracking-wide text-[10px]">
                      ✦ Podis, Chutneys & Accompaniments:
                    </h5>
                    <p className="text-stone-700 pl-2 mt-0.5 font-medium">
                      {selectedPkg.courses.accompaniments.join(' • ')}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#78350f] uppercase tracking-wide text-[10px]">
                      ✦ Royal Sweets & Desserts:
                    </h5>
                    <p className="text-stone-700 pl-2 mt-0.5 font-medium">
                      {selectedPkg.courses.desserts.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-amber-200 text-center text-[10px] text-stone-500 italic">
                  * 100% Pure Cow Ghee and wood-pressed oils. Flavors tailored to your family taste.
                </div>
              </div>

              {/* Optional Live Counters (NO PRICES) */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-[#b45309]" />
                  Select Sizzling Live Stalls:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-stone-800 cursor-pointer hover:bg-amber-100">
                    <input
                      type="checkbox"
                      checked={includeLiveDosa}
                      onChange={(e) => setIncludeLiveDosa(e.target.checked)}
                      className="rounded accent-amber-600"
                    />
                    <span>Live Podi Dosa</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-stone-800 cursor-pointer hover:bg-amber-100">
                    <input
                      type="checkbox"
                      checked={includeLiveJalebi}
                      onChange={(e) => setIncludeLiveJalebi(e.target.checked)}
                      className="rounded accent-amber-600"
                    />
                    <span>Live Bellam Jalebi</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-stone-800 cursor-pointer hover:bg-amber-100">
                    <input
                      type="checkbox"
                      checked={includeLiveChaat}
                      onChange={(e) => setIncludeLiveChaat(e.target.checked)}
                      className="rounded accent-amber-600"
                    />
                    <span>Live Pani Puri / Chaat</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Date Quota, Guest Count & Quote Generator (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-7 bg-[#fefdfa] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-amber-100">
                  <h3 className="font-royal text-sm sm:text-base font-bold text-[#451a03] flex items-center gap-1.5">
                    <CalendarCheck className="h-4 w-4 text-[#b45309]" />
                    Step 2: Date Quota & Details
                  </h3>
                  <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                    Free Custom Quote
                  </span>
                </div>

                <form onSubmit={handleWhatsAppBooking} className="space-y-3.5">
                  {/* Guest Count Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-stone-700 font-semibold flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-[#b45309]" /> Guest Capacity Quota:
                      </span>
                      <span className="font-royal text-sm font-bold text-[#b45309]">
                        {guestCount} Plates
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="3000"
                      step="25"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-700"
                    />
                    <div className="flex justify-between text-[9px] text-stone-500 mt-0.5">
                      <span>50 (Intimate)</span>
                      <span>500 (Medium)</span>
                      <span>1500 (Grand)</span>
                      <span>3000+ (Mega)</span>
                    </div>
                  </div>

                  {/* Date & Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-700 mb-0.5">
                        Event Date (ముహూర్తం తేదీ):
                      </label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-amber-300 text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-700 mb-0.5">
                        Occasion Type:
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-amber-300 text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option>Wedding / Reception (వివాహం)</option>
                        <option>Gruhapravesam (గృహప్రవేశం)</option>
                        <option>Sreemantham (సీమంతం)</option>
                        <option>Birthday / Half-Saree</option>
                        <option>Corporate Banquet</option>
                      </select>
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-stone-700 mb-0.5">
                      Event Location:
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-amber-300 text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option>Anakapalle (అనకాపల్లి - Sivanaidu Gardens Region)</option>
                      <option>Visakhapatnam (Vizag City, Beach Rd, MVP Colony)</option>
                      <option>Gajuwaka & Steel Plant Township</option>
                      <option>Madhurawada & Rushikonda</option>
                      <option>Pendurthi & Chodavaram</option>
                      <option>Other AP Districts (Travel Fleet)</option>
                    </select>
                  </div>

                  {/* Client Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-700 mb-0.5">
                        Your Name:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Venkata Rao"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-amber-300 text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-700 mb-0.5">
                        Mobile Number:
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98480 12345"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-amber-300 text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Banquet Quota Summary Card (NO PRICES) */}
                  <div className="mt-3.5 rounded-xl bg-amber-50/80 border border-amber-200 p-3.5 space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-700">
                      <span>Selected Package:</span>
                      <span className="font-bold text-[#451a03]">{selectedPkg.name}</span>
                    </div>
                    <div className="flex justify-between text-stone-700">
                      <span>Guest Capacity:</span>
                      <span className="font-bold text-stone-900">{guestCount} Guests</span>
                    </div>
                    <div className="flex justify-between text-stone-700">
                      <span>Live Counters:</span>
                      <span className="text-amber-900 font-semibold">
                        {[
                          includeLiveDosa && 'Dosa',
                          includeLiveJalebi && 'Jalebi',
                          includeLiveChaat && 'Chaat',
                        ]
                          .filter(Boolean)
                          .join(', ') || 'None'}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-amber-200 flex justify-between items-center">
                      <span className="font-bold text-stone-900">Custom Quote:</span>
                      <span className="text-xs font-bold text-[#15803d] bg-emerald-100 px-2 py-0.5 rounded-md">
                        Personalized via WhatsApp
                      </span>
                    </div>

                    {/* Free Inclusions Badge */}
                    <div className="pt-2 border-t border-amber-200/60 flex items-start gap-1.5 text-[10px] text-emerald-800">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-600" />
                      <span>
                        <strong>Free Inclusions:</strong> Uniformed service boys, banana leaves/luxury crockery, chafing dishes, and pure RO water setup.
                      </span>
                    </div>
                  </div>

                  {/* Submit Button to WhatsApp */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#15803d] to-[#16a34a] hover:from-[#16a34a] hover:to-[#22c55e] text-white py-2.5 px-4 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Reserve Date Quota & Send to WhatsApp</span>
                  </button>
                </form>

                {/* Direct Hotline Strip */}
                <div className="mt-3 text-center">
                  <p className="text-[10px] text-stone-500">
                    Prefer calling? Speak directly with founders:
                  </p>
                  <div className="mt-0.5 flex items-center justify-center gap-2 text-xs text-[#b45309] font-bold">
                    <a href="tel:9032479193" className="hover:underline flex items-center gap-1">
                      <Phone className="h-2.5 w-2.5" /> 1. సంతోష్: 90324 79193
                    </a>
                    <span>•</span>
                    <a href="tel:9032479194" className="hover:underline flex items-center gap-1">
                      <Phone className="h-2.5 w-2.5" /> 2. నాయుడు: 90324 79194
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
