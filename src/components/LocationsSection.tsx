import React from 'react';
import { MapPin, Navigation, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section 
      id="locations" 
      className="relative min-h-[80vh] py-20 px-3 sm:px-6 lg:px-8 bg-fixed-parallax overflow-hidden"
      style={{ backgroundImage: `url('/corporategatherings.png')` }}
    >
      {/* Semi-transparent dark overlay for fixed background scrolling effect */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#fde047] mb-2 backdrop-blur-md">
            <MapPin className="h-3 w-3 text-amber-300" /> Service Areas • సేవా ప్రాంతాలు
          </div>
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-white tracking-tight drop-shadow">
            Serving Anakapalle, Vizag & <span className="text-amber-300">Across Andhra Pradesh</span>
          </h2>
          <p className="font-telugu text-sm sm:text-base text-amber-200 font-bold mt-1 drop-shadow">
            అనకాపల్లి నుండి విశాఖపట్నం వరకు అన్ని ప్రధాన వేదికలకు మా సేవలు
          </p>
          <p className="mt-1.5 text-stone-200 text-xs sm:text-sm max-w-lg mx-auto">
            From luxury wedding convention centers to intimate family homes, our insulated hot-carriers deliver steaming feasts right on time.
          </p>
        </div>

        {/* 2-Column Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Hubs Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Hub: Anakapalle */}
            <div className="rounded-2xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-amber-100 flex items-center justify-center text-[#b45309]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-royal text-base sm:text-lg font-bold text-[#451a03]">Anakapalle Central Hub</h3>
                    <p className="text-[11px] text-stone-500 font-telugu">హెడ్ క్వార్టర్స్ & సెంట్రల్ కిచెన్</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-bold">
                  Primary Base
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong>Address:</strong> Sivanaidu Gardens, Karrivari Street, Gavarapalem, Anakapalli, Visakhapatnam – 531002.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                {['Gavarapalem', 'Sarada Colony', 'Ring Road Function Halls', 'NTPC Simhadri Environs', 'Munagapaka & Chodavaram'].map((area) => (
                  <span key={area} className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-stone-700">
                    ✓ {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Hub: Visakhapatnam City */}
            <div className="rounded-2xl bg-[#fffdfb]/95 backdrop-blur-md border border-amber-300 p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-amber-100 flex items-center justify-center text-[#b45309]">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-royal text-base sm:text-lg font-bold text-[#451a03]">Visakhapatnam (Vizag) City</h3>
                    <p className="text-[11px] text-stone-500 font-telugu">విశాఖ నగర పరిసరాలు</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-300 text-blue-800 text-[10px] font-bold">
                  Daily Fleets
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                Serving all major convention centers, beach resorts, kalyana mandapams, and community halls across Vizag.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                {['Gajuwaka', 'Steel Plant Township', 'Kurmannapalem', 'MVP Colony', 'Beach Road Resorts', 'Madhurawada', 'Pendurthi'].map((area) => (
                  <span key={area} className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-stone-700">
                    ✓ {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Fleet Guarantees (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#fffdf8]/95 backdrop-blur-md border border-amber-300 p-5 sm:p-6 shadow-xl space-y-4">
            <h3 className="font-royal text-lg sm:text-xl font-bold text-[#451a03]">
              The S.V.S. <span className="text-[#b45309]">Logistics Promise</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Truck className="h-4 w-4 text-[#b45309] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#451a03]">Insulated Hot-Carriers</h4>
                  <p className="text-stone-600 text-xs mt-0.5">Dishes reach your venue at perfect steaming serving temperature.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#451a03]">Complete On-Site Setup</h4>
                  <p className="text-stone-600 text-xs mt-0.5">We bring brass chafing dishes, buffet tables, tablecloths, and waste management.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#b45309] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#451a03]">Punctuality Guarantee</h4>
                  <p className="text-stone-600 text-xs mt-0.5">Our team reaches the venue 2 hours prior to Muhurtham or banquet start.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-200">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] text-white py-2.5 text-xs font-bold shadow-xs hover:brightness-105 transition-all"
              >
                <MapPin className="h-3.5 w-3.5" />
                Get Directions & Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
