import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight,
  HeartHandshake,
  Compass,
  Briefcase,
  Users,
  Clock,
  Hash,
  Building2,
  Calendar,
  Layers,
  Search
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { DiyaIcon, GoldDivider, KundaliChartIcon } from '../components/VedicDecorativeElements';
import { clientConcerns } from '../data/concernsData';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';

import { locationsData, getLocationHierarchy, getChildLocations } from '../data/locationsData';
import { AppLocation } from '../types';

interface LocationPageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  location?: AppLocation;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onNavigate, locale = 'en', location }) => {
  const t = translations[locale] || translations.en;
  const [search, setSearch] = React.useState('');

  // If no location, this is the /locations root page (State/District picker)
  if (!location) {
    const states = locationsData.filter(l => l.level === 'state');
    const filtered = locationsData.filter(l => 
      l.slug.toLowerCase().includes(search.toLowerCase()) ||
      (l.village && l.village.toLowerCase().includes(search.toLowerCase())) ||
      (l.mandal && l.mandal.toLowerCase().includes(search.toLowerCase())) ||
      (l.district && l.district.toLowerCase().includes(search.toLowerCase()))
    ).slice(0, 10);

    return (
      <div>
        <SEOHead
          title="Astrology Consultation Locations | AP & Telangana"
          description="Find your location to see available Vedic astrology consultation services across Andhra Pradesh and Telangana. Sri Gayathri Astrology."
          canonicalPath={buildLocalizedPath('/locations', locale)}
          locale={locale}
        />
        <Breadcrumbs items={[{ label: 'Locations' }]} />
        
        <section className="py-16 sm:py-24 bg-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 font-heading">Find Your Location</h1>
            <p className="text-lg text-[#524B4B] mb-10">Select your state or search for your village/mandal to get started.</p>
            
            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C7A58]" />
              <input 
                type="text"
                placeholder="Search village, mandal, or district..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#E8DFC9] shadow-xs focus:ring-2 focus:ring-[#58111A] outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <div className="absolute top-full left-0 w-full bg-white border border-[#E8DFC9] rounded-xl mt-2 shadow-lg z-50 text-left overflow-hidden">
                  {filtered.length > 0 ? filtered.map(l => (
                    <button
                      key={l.id}
                      onClick={() => onNavigate(buildLocalizedPath(`/locations${l.path}`, locale))}
                      className="w-full px-4 py-3 hover:bg-[#FAF4E8] text-sm border-b border-[#F0E8D8] last:border-0 flex items-center justify-between"
                    >
                      <span>{[l.village, l.mandal, l.district, l.state].filter(Boolean).join(' → ')}</span>
                      <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                    </button>
                  )) : (
                    <div className="px-4 py-3 text-sm text-[#8C7A58]">No locations found</div>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {states.map(state => (
                <button
                  key={state.id}
                  onClick={() => onNavigate(buildLocalizedPath(`/locations${state.path}`, locale))}
                  className="p-8 rounded-2xl border-2 border-[#E8DFC9] hover:border-[#D4AF37] bg-[#FFFDF9] transition-all group"
                >
                  <MapPin className="w-10 h-10 text-[#58111A] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h2 className="text-2xl font-bold text-[#221F1F]">{state.state}</h2>
                  <p className="text-sm text-[#8C7A58] mt-2 font-semibold">View Districts & Mandals</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <CallToActionBanner
          headline="Astrology Guidance for All Regions"
          supportingText="Daily phone consultations are available for all districts of AP and Telangana."
          onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
        />
      </div>
    );
  }

  const activeLoc = location;
  const hierarchy = getLocationHierarchy(activeLoc);
  const children = getChildLocations(activeLoc.id);

  const locName = activeLoc.village || activeLoc.mandal || activeLoc.district || activeLoc.state;
  const fullHierarchyName = hierarchy.map(h => h.village || h.mandal || h.district || h.state).join(' • ');

  // Master Prompt #10, #14, #38, #52: Local Q&A Cluster
  const localFAQs = [
    {
      q: `Who is an astrologer in ${locName} for Vedic astrology consultation?`,
      a: `Sri Krishna Jyotish at Sri Gayathri Astrology provides personalized traditional Vedic astrology consultations for clients in ${locName}. You can call 88852 88817 directly to schedule or inquire.`
    },
    {
      q: `Where can I consult a Vedic astrologer in ${locName}?`,
      a: `You can consult Sri Gayathri Astrology by Sri Krishna Jyotish for services in ${locName}. Direct telephone consultation and appointment arrangements are available at 88852 88817.`
    },
    {
      q: `Where can I get Kundali matching in ${locName}?`,
      a: `Sri Krishna Jyotish provides comprehensive Kundali matching for residents of ${locName}, evaluating Ashtakoota Guna Milan, 7th house planetary factors, and overall chart compatibility.`
    }
  ];

  // Master Prompt #13: Location + Service Matrix (Location × Service)
  const localServiceMatrix = [
    {
      title: `Marriage Astrology in ${locName}`,
      slug: 'marriage-astrology',
      desc: `Traditional horoscope guidance for individuals and families in ${locName} considering marriage timing.`,
      icon: HeartHandshake,
      focus: 'Marriage Timing & Family Alignment'
    },
    {
      title: `Kundali Matching in ${locName}`,
      slug: 'kundali-matching',
      desc: `In-depth birth chart compatibility assessment for prospective brides, grooms, and families across ${locName}.`,
      icon: Users,
      focus: 'Compatibility & Ashtakoota Milan'
    },
    {
      title: `Horoscope Consultation in ${locName}`,
      slug: 'horoscope',
      desc: `Detailed Janma Kundali interpretation examining your Lagna, Rashi, and active Dasha periods for clear perspective.`,
      icon: Compass,
      focus: 'Janma Kundali & Dasha Periods'
    },
    {
      title: `Career Astrology in ${locName}`,
      slug: 'career-astrology',
      desc: `Astrological vocational alignment and career decision guidance based on your 10th house and Dasha cycles.`,
      icon: Briefcase,
      focus: 'Vocational Alignment & Timing'
    }
  ];

  const canonical = buildLocalizedPath(`/locations${activeLoc.path}`, locale);

  return (
    <div>
      {/* 46. SEO TITLE SYSTEM — Location Page format with phone number */}
      <SEOHead
        title={locale === 'te' 
          ? `${locName}లో జ్యోతిష్కులు | శ్రీ కృష్ణ జ్యోతిష్ | 88852 88817`
          : locale === 'hi'
          ? `${locName} में ज्योतिषी | श्री कृष्ण ज्योतिष | 88852 88817`
          : `Astrologer in ${locName} | Sri Krishna Jyotish | 88852 88817`}
        description={locale === 'te'
          ? `${locName}లో సాంప్రదాయ జ్యోతిష్య సలహా కోసం శ్రీ గాయత్రి జ్యోతిష్యాలయం (శ్రీ కృష్ణ జ్యోతిష్) సంప్రదించండి. కాల్ 88852 88817.`
          : locale === 'hi'
          ? `${locName} में प्रामाणिक वैदिक ज्योतिष परामर्श के लिए श्री गायत्री ज्योतिषालय से संपर्क करें। कॉल 88852 88817.`
          : `Looking for traditional astrology guidance in ${locName}? Sri Gayathri Astrology by Sri Krishna Jyotish offers personalized Vedic astrology consultation. Call 88852 88817.`}
        canonicalPath={canonical}
        schemaType="AboutPage"
        locale={locale}
        extraSchema={{
          '@type': 'Place',
          'name': locName,
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': activeLoc.district || activeLoc.state,
            'addressRegion': activeLoc.state,
            'addressCountry': 'IN'
          }
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t.nav.locations, href: buildLocalizedPath('/locations', locale) },
          ...hierarchy.map(h => ({
            label: h.village || h.mandal || h.district || h.state,
            href: buildLocalizedPath(`/locations${h.path}`, locale)
          }))
        ]}
      />

      {/* 12 & 18. Local Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Geographic Hierarchy Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{fullHierarchyName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            Vedic Astrology Consultation in {locName}
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Looking for traditional astrology guidance in {locName}? Sri Gayathri Astrology by Sri Krishna Jyotish provides personalized Vedic astrology consultation for marriage, career, business, and important life decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-md transition-all border border-[#7A1926]"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>{t.location.callBtn}</span>
            </a>

            <button
              onClick={() => onNavigate(buildLocalizedPath('/contact', locale))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#332E2E] font-semibold text-base border border-[#DDD3C2] transition-colors"
            >
              <span>{t.location.contactBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Sub-locations if any */}
      {children.length > 0 && (
        <section className="py-10 bg-[#FDFBF7] border-b border-[#E8DFC9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold text-[#8C7A58] uppercase tracking-widest mb-4">Explore More Areas in {locName}</h2>
            <div className="flex flex-wrap gap-2">
              {children.map(child => (
                <button
                  key={child.id}
                  onClick={() => onNavigate(buildLocalizedPath(`/locations${child.path}`, locale))}
                  className="px-4 py-2 rounded-lg bg-white border border-[#E8DFC9] text-xs font-semibold text-[#58111A] hover:border-[#D4AF37] transition-all"
                >
                  {child.village || child.mandal || child.district}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 51. LOCATION SUMMARY FORMAT (Master Prompt Requirement #51) */}
      <section className="py-14 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37]/40 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#58111A] uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Location Summary • {locName}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-4">
              Astrology Consultation in {locName} at a Glance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4A4242]">
              <div className="space-y-3">
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">What is the service?</strong>
                  <span>Personalized Vedic astrology (Jyotish Shastra) guidance grounded in traditional Panchanga, Janma Kundali, and Dasha principles.</span>
                </div>
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">Who provides the consultation?</strong>
                  <span>Sri Krishna Jyotish at Sri Gayathri Astrology.</span>
                </div>
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">Where is it located?</strong>
                  <span>{fullHierarchyName}, India (Primary Center: Kurnool).</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">What services are available in {locName}?</strong>
                  <span>Marriage astrology, Kundali matching, career guidance, horoscope reading, Muhurtham calculation, and numerology.</span>
                </div>
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">Who may benefit from contacting?</strong>
                  <span>Individuals and families in {locName} navigating marriage decisions, career shifts, or significant life milestones.</span>
                </div>
                <div>
                  <strong className="text-[#221F1F] block font-semibold mb-0.5">How can you connect?</strong>
                  <span>Direct phone consultation and inquiries at <a href="tel:8885288817" className="font-bold text-[#58111A] hover:underline">88852 88817</a>.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#E8DFC9]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{locName} FAQ Cluster</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] mb-2 font-heading">
            {locName} Astrology FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {localFAQs.map((faq, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base font-bold text-[#221F1F] mb-2 flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#554E4E] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/30">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 19. Location Page Client Concern Selector */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
            What Are You Looking for Guidance About in Kurnool?
          </h2>
          <p className="text-base sm:text-lg text-[#554E4E]">
            Clients from across Kurnool and Andhra Pradesh consult Sri Krishna Jyotish for traditional guidance in these key areas:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientConcerns.map((c) => (
            <button
              key={c.id}
              onClick={() => onNavigate(buildLocalizedPath(`/${c.targetSlug}`, locale))}
              className="p-5 rounded-xl bg-white hover:bg-[#FAF4E8] border border-[#E8DFC9] hover:border-[#D4AF37] text-left transition-all group flex flex-col justify-between shadow-2xs hover:shadow-xs"
            >
              <div>
                <span className="text-xs font-bold text-[#8C7A58] uppercase tracking-wider block mb-1">
                  {c.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#221F1F] group-hover:text-[#58111A] transition-colors mb-2">
                  {c.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#58111A]">
                <span>Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 13 & 30. LOCATION + SERVICE MATRIX (Kurnool × Service) */}
      <section className="py-16 sm:py-20 bg-[#F9F5EC] border-y border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Location × Service Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-3 font-heading">
              {t.location.matrixHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#5C5555]">
              {t.location.matrixSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localServiceMatrix.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-[#E8DFC9] flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#8C7A58] uppercase tracking-wider bg-[#FAF7F0] px-2 py-0.5 rounded">
                        Kurnool
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-1.5 font-heading">
                      {srv.title}
                    </h3>
                    
                    <div className="text-xs text-[#58111A] font-semibold mb-2">
                      {srv.focus}
                    </div>

                    <p className="text-xs sm:text-sm text-[#554E4E] leading-relaxed mb-4">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(buildLocalizedPath(`/${srv.slug}`, locale))}
                      className="text-xs font-bold text-[#58111A] hover:underline flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:8885288817"
                      className="text-xs font-bold text-[#C59B27] hover:text-[#58111A]"
                    >
                      88852 88817
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 21. Location Trust Section & Regional Context */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8DFC9] shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#58111A] text-[#F5E6AB] flex items-center justify-center mx-auto mb-4">
              <DiyaIcon className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
              Looking for an Astrologer in Kurnool?
            </h2>

            <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed mb-6">
              <strong className="text-[#221F1F]">Sri Gayathri Astrology</strong> by <strong className="text-[#221F1F]">Sri Krishna Jyotish</strong> offers authentic, personalized consultations for clients located in Kurnool and across Andhra Pradesh. We prioritize calm clarity, genuine Vedic Shastra methodologies, and direct phone accessibility without artificial claims or fear-based predictions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left my-8">
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#58111A] uppercase mb-1">Traditional Method</div>
                <div className="text-sm font-semibold text-[#221F1F]">Authentic Vedic Jyotish</div>
                <div className="text-xs text-[#665E5E] mt-1">Grounded in classical planetary and dasha principles.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#58111A] uppercase mb-1">Client First</div>
                <div className="text-sm font-semibold text-[#221F1F]">Personalized & Clear</div>
                <div className="text-xs text-[#665E5E] mt-1">Clear explanations without technical confusion or fear.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#58111A] uppercase mb-1">Easy Access</div>
                <div className="text-sm font-semibold text-[#221F1F]">Direct Phone Contact</div>
                <div className="text-xs text-[#665E5E] mt-1">Quick and convenient consultation at 88852 88817.</div>
              </div>
            </div>

            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-lg shadow-md transition-all"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
          </div>
        </div>
      </section>

      {/* 22 & 38. Kurnool Location Dedicated FAQs */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#E8DFC9]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Kurnool FAQ Cluster</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] mb-2 font-heading">
            Kurnool Astrology FAQs
          </h2>
          <p className="text-sm sm:text-base text-[#5C5555]">
            Frequently asked questions by clients seeking astrology consultation in Kurnool, Andhra Pradesh.
          </p>
        </div>

        <div className="space-y-4">
          {localFAQs.map((faq, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base font-bold text-[#221F1F] mb-2 flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#554E4E] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/30">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 23 & 45. Location Page NAP & Final Conversion CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#2D070D] rounded-2xl p-8 sm:p-12 text-white text-center border-2 border-[#D4AF37] shadow-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-4 text-white">
            Looking for Astrology Guidance in Kurnool?
          </h2>

          <div className="space-y-1 mb-6 text-sm sm:text-base text-[#F5E6AB]">
            <div className="font-bold text-lg text-white">Sri Gayathri Astrology</div>
            <div>Sri Krishna Jyotish</div>
            <div className="text-[#C8B8B0] flex items-center justify-center gap-1.5 pt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Kurnool, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="mb-6">
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-xl sm:text-2xl shadow-lg transition-transform active:scale-95"
            >
              <PhoneCall className="w-6 h-6 fill-current" />
              <span>88852 88817</span>
            </a>
          </div>

          <p className="text-xs text-[#B8A69E]">
            Call for Consultation • Traditional Vedic Astrology in Kurnool, Andhra Pradesh
          </p>
        </div>
      </section>
    </div>
  );
};
