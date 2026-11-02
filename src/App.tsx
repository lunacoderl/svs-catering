import { PreLoader } from './components/PreLoader';
import { FloatingPetals } from './components/CelebrationEffects';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { FoodSection } from './components/FoodSection';
import { OccasionsSection } from './components/OccasionsSection';
import { BookingMenuQuota } from './components/BookingMenuQuota';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionDock } from './components/FloatingActionDock';
import { SectionDivider } from './components/SectionDivider';

export function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#1c1917] overflow-x-clip selection:bg-[#eab308] selection:text-[#0f172a]">
      {/* 1. Cultural Pre-Loader Animation */}
      <PreLoader onLoaded={() => {}} />

      {/* 2. Floating Celebratory Golden Sparks & Petals */}
      <FloatingPetals />

      {/* 3. Sticky Festive Header & Mobile Drawer */}
      <Navbar />

      {/* 4. Main Content Sections with Unique Section Transition Gaps */}
      <main>
        {/* Hero Section */}
        <HeroCarousel />

        {/* Transition Gap 1 */}
        <SectionDivider 
          title="12+ Years Experience & Trust" 
          telugu="12+ సంవత్సరాల అనుభవం & విశ్వసనీయత • సంప్రదాయ విందు వైభవం" 
        />

        {/* About Section */}
        <AboutSection />

        {/* Transition Gap 2 */}
        <SectionDivider 
          title="Authentic Andhra Feasts" 
          telugu="స్వచ్ఛమైన ఆవు నెయ్యి • ఘుమఘుమలాడే తెలుగు రుచులు" 
          icon="utensils"
        />

        {/* Food Section */}
        <FoodSection />

        {/* Transition Gap 3 */}
        <SectionDivider 
          title="Grand Auspicious Occasions" 
          telugu="పెళ్లిళ్లు, గృహప్రవేశాలు & ప్రతి శుభకార్యానికి ప్రత్యేక విందు" 
        />

        {/* Occasions Section */}
        <OccasionsSection />

        {/* Transition Gap 4 */}
        <SectionDivider 
          title="Royal Banquet Menu & Quota" 
          telugu="రాయల్ విందు పత్రిక • తక్షణ తేదీ కోటా లెక్కింపు" 
          icon="utensils"
        />

        {/* Booking Quota Section (Styled like a Menu) */}
        <BookingMenuQuota />

        {/* Transition Gap 5 */}
        <SectionDivider 
          title="Anakapalle & Vizag Service Network" 
          telugu="సమయపాలన • విస్తృత సేవా రవాణా నెట్‌వర్క్" 
        />

        {/* Locations Section */}
        <LocationsSection />

        {/* Transition Gap 6 */}
        <SectionDivider 
          title="Cherished Family Testimonials" 
          telugu="వేలమంది అతిథుల ప్రశంసలు • కస్టమర్ల అమూల్యమైన ప్రేమ" 
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Transition Gap 7 */}
        <SectionDivider 
          title="Questions & Helpful Answers" 
          telugu="ఆర్డర్లు & సేవల సమాచారం • సందేహాలు - సమాధానాలు" 
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Transition Gap 8 */}
        <SectionDivider 
          title="Direct Contact & Sivanaidu Gardens Kitchen" 
          telugu="మీ శుభకార్యానికి ఆహ్వానం • సంప్రదించండి" 
          icon="utensils"
        />

        {/* Contact Section (Exact Reference Image Replica) */}
        <ContactSection />
      </main>

      {/* Festive Telugu Royal Footer */}
      <Footer />

      {/* Persistent Floating Action Dock (Call, WhatsApp, Menu Quota, Scroll-Top) */}
      <FloatingActionDock />
    </div>
  );
}

export default App;
