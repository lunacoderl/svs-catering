import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Calendar, 
  MessageSquare, 
  Send, 
  Utensils, 
  Users, 
  ShieldCheck, 
  Truck, 
  Leaf 
} from 'lucide-react';
import { triggerFestiveConfetti } from './CelebrationEffects';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Wedding / Reception (వివాహం)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerFestiveConfetti();
    setSubmitted(true);

    const text = `*New Catering Enquiry for S.V.S. Catering (Santanosh & Nayudu)*:%0A` +
      `👤 *Name:* ${name || 'Valued Guest'}%0A` +
      `📞 *Mobile:* ${mobile}%0A` +
      `📧 *Email:* ${email || 'N/A'}%0A` +
      `🎉 *Event Type:* ${eventType}%0A` +
      `💬 *Requirements:* ${message || 'Please contact for full details.'}%0A` +
      `📍 *Location:* Anakapalle / Visakhapatnam, AP`;

    window.open(`https://wa.me/919032479193?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-16 px-3 sm:px-6 lg:px-8 bg-[#092419] text-white overflow-hidden">
      {/* Background Emerald Texture & Golden Swirl Elements (Exact Image Match) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#072418] via-[#0b3322] to-[#041910]" />
      
      {/* Top-Right Decorative Buffet Atmosphere */}
      <div 
        className="absolute top-0 right-0 w-full md:w-3/5 h-72 bg-cover bg-right-top opacity-35 pointer-events-none"
        style={{ backgroundImage: `url('/hero-section-bg.png')` }}
      />
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-72 bg-gradient-to-l from-transparent via-[#092419]/70 to-[#092419] pointer-events-none" />

      {/* Golden Wave Divider Graphic */}
      <div className="absolute -top-12 -left-20 w-80 h-80 rounded-full border-t-8 border-r-8 border-[#ca8a04]/25 blur-xs pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full border border-[#fde047]/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Header: Brand Logo & Tagline (Matches Reference Image Top-Left) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 mb-10">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="S.V.S. Catering Logo"
                className="h-13 w-auto object-contain drop-shadow-[0_4px_12px_rgba(234,179,8,0.4)]"
              />
              <div>
                <span className="font-royal text-xl sm:text-2xl font-extrabold tracking-wide text-white block">
                  S.V.S. Caterers
                </span>
                <span className="text-[11px] text-[#fef08a] font-telugu block -mt-0.5">
                  శ్రీ వెంకటేశ్వర స్వామి క్యాటరింగ్
                </span>
              </div>
            </div>
            <p className="mt-1 text-xs text-stone-200 tracking-wider font-medium">
              Traditional Flavors | Grand Events | Complete Catering
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-[#ca8a04]/40 text-[#fde047] text-xs font-semibold backdrop-blur-md">
            <span>🎉 10th Anniversary Celebrated (2015 – 2025+)</span>
          </div>
        </div>

        {/* 3-Column Core Grid Matching Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column (4 cols): Get in Touch with Us & Contact Badges */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Get in Touch <br />
                <span className="text-[#fde047] italic font-serif">with Us</span>
              </h2>
              <p className="mt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
                Plan your special event with S.V.S. Caterers. We're here to make it grand, delicious and hassle-free!
              </p>
            </div>

            {/* Contact Items with Rounded Golden Circular Icons */}
            <div className="space-y-3 pt-1">
              {/* Phone 1: Santanosh */}
              <a
                href="tel:9032479193"
                className="group flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#eab308] to-[#ca8a04] flex items-center justify-center text-[#1c1917] shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#fde047] transition-colors block">
                    +91 90324 79193
                  </span>
                  <span className="text-[10px] text-stone-300">Santanosh (సంతోష్) • Owner</span>
                </div>
              </a>

              {/* Phone 2: Nayudu */}
              <a
                href="tel:9032479194"
                className="group flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#eab308] to-[#ca8a04] flex items-center justify-center text-[#1c1917] shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#fde047] transition-colors block">
                    +91 90324 79194
                  </span>
                  <span className="text-[10px] text-stone-300">Nayudu (నాయుడు) • Owner</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:svscatering.vizag@gmail.com"
                className="group flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#eab308] to-[#ca8a04] flex items-center justify-center text-[#1c1917] shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#fde047] transition-colors truncate block">
                    svscatering.vizag@gmail.com
                  </span>
                  <span className="text-[10px] text-stone-300">Official Inquiries & Bookings</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 p-1.5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#eab308] to-[#ca8a04] flex items-center justify-center text-[#1c1917] shadow-md shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Anakapalli & Visakhapatnam, Andhra Pradesh
                  </span>
                  <span className="text-[11px] text-stone-300 block mt-0.5">
                    Sivanaidu Gardens, Karrivari St, Gavarapalem, Anakapalli – 531002
                  </span>
                  <span className="text-[10px] text-[#fde047] block mt-0.5 italic">
                    (Service available across Andhra Pradesh & India)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column (5 cols): Floating Ivory Cloche Form ("Send Us a Query") */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Cloche Icon Floating on Top Border (Exact replica from reference image) */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="h-12 w-12 rounded-full bg-gradient-to-b from-[#fde047] to-[#ca8a04] p-1 shadow-lg flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-[#1b3d2b] flex items-center justify-center text-[#fde047]">
                  <Utensils className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Ivory / Cream Form Card */}
            <div className="relative rounded-2xl bg-[#fbf8f0] text-[#1c1917] p-5 sm:p-7 pt-9 shadow-2xl border border-amber-300/60">
              <div className="text-center mb-4">
                <h3 className="font-serif-display text-xl font-bold text-[#1e293b]">
                  Send Us a Query
                </h3>
                <div className="flex items-center justify-center gap-1.5 mt-0.5">
                  <span className="h-px w-8 bg-[#ca8a04]/60" />
                  <span className="text-[#ca8a04] text-[10px]">❖</span>
                  <span className="h-px w-8 bg-[#ca8a04]/60" />
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-6 space-y-2">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <h4 className="font-bold text-sm text-emerald-900">Enquiry Forwarded!</h4>
                  <p className="text-xs text-stone-600">
                    Your details are sent to Santanosh & Nayudu via WhatsApp. They will contact you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#991b1b] underline font-bold mt-1"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Your Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#ca8a04]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#ca8a04]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#ca8a04]"
                    />
                  </div>

                  {/* Event Type Dropdown */}
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#ca8a04] appearance-none"
                    >
                      <option>Wedding / Reception (వివాహం)</option>
                      <option>Gruhapravesam (గృహప్రవేశం)</option>
                      <option>Sreemantham (సీమంతం)</option>
                      <option>Birthday / Family Party</option>
                      <option>Corporate Gathering</option>
                      <option>Other Auspicious Occasion</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                    <textarea
                      rows={2}
                      placeholder="Your Message / Requirements"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#ca8a04] resize-none"
                    />
                  </div>

                  {/* Maroon Pill Button exactly as in image */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#651016] hover:bg-[#80141c] text-white py-2.5 px-5 text-xs sm:text-sm font-bold shadow-md transition-transform active:scale-98 cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (3 cols): 3 Diamond/Curved Slanted Framed Photos */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center gap-3 py-2">
            {/* Photo 1: Banquet Hall */}
            <div className="relative w-40 sm:w-48 h-24 sm:h-28 rounded-xl overflow-hidden border-2 border-[#fde047]/90 shadow-md transform hover:rotate-1 transition-transform">
              <img
                src="/corporategatherings.png"
                alt="Banquet Seating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Photo 2: Wedding Mandap */}
            <div className="relative w-44 sm:w-52 h-28 sm:h-32 rounded-xl overflow-hidden border-2 border-[#fde047] shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
              <img
                src="/wedding.png"
                alt="Wedding Mandap Decor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Photo 3: Banana Leaf Feast */}
            <div className="relative w-40 sm:w-48 h-24 sm:h-28 rounded-xl overflow-hidden border-2 border-[#fde047]/90 shadow-md transform hover:-rotate-1 transition-transform">
              <img
                src="/vegfeast.png"
                alt="Banana Leaf Feast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip: 6 Ivory Pill Cards (Exact replica of attached image ribbon) */}
        <div className="mt-12 rounded-2xl bg-[#fbf8f0] text-[#1c1917] p-3 shadow-lg border border-[#ca8a04]/40">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <Calendar className="h-5 w-5 text-[#1c1917] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Event Planning Support
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <Utensils className="h-5 w-5 text-[#1c1917] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Customized Menus
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <Users className="h-5 w-5 text-[#1c1917] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Experienced Team
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <ShieldCheck className="h-5 w-5 text-[#1c1917] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Hygienic & Safe Preparation
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <Truck className="h-5 w-5 text-[#1c1917] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Timely Service
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-amber-100/60 transition-colors">
              <Leaf className="h-5 w-5 text-[#166534] mb-1" />
              <span className="text-[11px] font-bold text-[#1c1917] leading-tight">
                Eco-Friendly Practices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
