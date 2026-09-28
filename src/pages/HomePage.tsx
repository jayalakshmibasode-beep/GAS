import React from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  HeartHandshake, 
  Compass, 
  Briefcase, 
  Building2, 
  Clock, 
  Hash, 
  ShieldCheck,
  UserCheck,
  HelpCircle,
  BookOpen,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConcernSelector } from '../components/ConcernSelector';
import { ConsultationProcessSection } from '../components/ConsultationProcessSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { RegionalReachSection } from '../components/RegionalReachSection';
import { DiyaIcon, GoldDivider, KundaliChartIcon } from '../components/VedicDecorativeElements';
import { masterFAQs } from '../data/faqData';
import { servicesData } from '../data/servicesData';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  const popularConsultationKeys = [
    'marriage-astrology',
    'kundali-matching',
    'horoscope',
    'career-astrology',
    'love-astrology',
    'business-astrology',
    'muhurtham',
    'numerology'
  ];

  const homepageFAQs = masterFAQs.slice(0, 8);

  const canonical = locale === 'en' ? '/' : `/${locale}/`;

  const heroWhatsAppUrl = getWhatsAppUrl({
    path: '/',
    locale: locale as Locale,
    customTopic: locale === 'te' 
      ? 'ఆంధ్రప్రదేశ్ & తెలంగాణ ప్రజల కొరకు వైదిక జ్యోతిష్య సలహా' 
      : locale === 'hi' 
      ? 'आंध्र प्रदेश व तेलंगाना हेतु वैदिक ज्योतिष परामर्श' 
      : 'Vedic Astrology Consultation (AP & Telangana)'
  });

  return (
    <div>
      {/* Homepage SEO - Rule: Title MUST NOT contain phone number */}
      <SEOHead
        title={t.seo.homeTitle}
        description={t.seo.homeDesc}
        canonicalPath={canonical}
        schemaType="WebSite"
        locale={locale}
      />

      {/* HOMEPAGE HERO — AP & Telangana Brand & Client Quest Intent */}
      <section className="relative bg-gradient-to-b from-[#FDFBF7] via-[#FAF5EC] to-[#F7EFE2] pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9] overflow-hidden">
        
        {/* Subtle decorative Vedic accents */}
        <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-8 opacity-10 hidden lg:block pointer-events-none">
          <KundaliChartIcon className="w-48 h-48" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
            <DiyaIcon className="w-4 h-4" />
            <span>Traditional Vedic Astrology Consultation</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#221F1F] tracking-tight leading-[1.15] mb-6 font-heading">
            Vedic Astrology Consultant in Andhra Pradesh & Telangana
          </h1>

          {/* Supporting Headline */}
          <div className="text-lg sm:text-2xl font-bold text-[#58111A] mb-4">
            Traditional Vedic Astrology Consultation by Sri Krishna Jyotish
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Sri Gayathri Astrology provides traditional astrology consultations for people seeking personalized horoscope and Jyotish guidance across Andhra Pradesh and Telangana.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 border border-[#7A1926]"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>

            <button
              onClick={() => onNavigate(buildLocalizedPath('/contact', locale))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Request a Consultation</span>
            </button>

            <button
              onClick={() => onNavigate(buildLocalizedPath('/services', locale))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#332E2E] font-semibold text-base border border-[#DDD3C2] hover:border-[#D4AF37] shadow-2xs transition-all"
            >
              <span>Explore Astrology Services</span>
              <ArrowRight className="w-4 h-4 text-[#8C827A]" />
            </button>
          </div>

          {/* Small text / Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#7A6F6F] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.home.trust1}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.home.trust2}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59B27]" />
              <span>{t.home.trust3}</span>
            </span>
          </div>
        </div>
      </section>

      {/* HOMEPAGE AI ANSWER BLOCK (Master Prompt Requirement #6) */}
      <section className="py-12 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37]/50 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#58111A] uppercase tracking-wider mb-2">
              <DiyaIcon className="w-4 h-4" />
              <span>{t.home.aiAnswerTitle}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-4">
              {t.home.aiAnswerHeading}
            </h2>

            <p className="text-base sm:text-lg text-[#3D3636] leading-relaxed mb-6">
              {t.home.aiAnswerBody}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DFC9] text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">{t.home.locLabel}</div>
                <div className="font-semibold text-[#221F1F] mt-0.5">{t.home.locVal}</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">{t.home.astrologerLabel}</div>
                <div className="font-semibold text-[#221F1F] mt-0.5">{t.home.astrologerVal}</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">{t.home.phoneLabel}</div>
                <a href="tel:8885288817" className="font-bold text-[#58111A] hover:underline mt-0.5 block">
                  88852 88817
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED ANDHRA PRADESH & TELANGANA REGIONAL REACH */}
      <RegionalReachSection 
        locale={locale} 
        onNavigateKurnool={() => onNavigate(buildLocalizedPath('/astrologer/kurnool', locale))} 
      />

      {/* HOMEPAGE "QUICK ANSWERS" (Master Prompt Requirement #7) */}
      <section className="py-14 sm:py-18 bg-[#FDFBF7] px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-2">
              {t.home.quickAnswersHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              {t.home.quickAnswersSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Who is Sri Krishna Jyotish?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/40">
                Sri Krishna Jyotish is the traditional Vedic astrologer at Sri Gayathri Astrology, providing personalized consultations across Andhra Pradesh and Telangana.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Can I consult by phone from Telangana (Hyderabad, Warangal, etc.)?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/40">
                Yes. Daily telephone consultations are conducted for families and individuals residing in Hyderabad, Warangal, Karimnagar, Nizamabad, and across all districts of Telangana and Andhra Pradesh.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>What services are available for Telugu families?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/40">
                Traditional Vedic astrology consultation relating to marriage matching (Telugu Gothram & Nakshatra Porutham), Janma Kundali analysis, career, business, education, auspicious Muhurtham calculation, Dosha analysis and numerology.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Where is the physical consultation center located?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/40">
                The primary physical consultation center of Sri Gayathri Astrology is based in Kurnool, Andhra Pradesh, with remote phone consultations serving all of AP & Telangana.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>How can I schedule a consultation?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/40">
                Call <a href="tel:8885288817" className="font-bold text-[#58111A] hover:underline">88852 88817</a> directly to connect with Sri Krishna Jyotish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT CONCERN SELECTOR & QUESTION SECTION */}
      <ConcernSelector onNavigate={(slug) => onNavigate(buildLocalizedPath(`/${slug}`, locale))} />

      {/* CONSULTATION PROCESS */}
      <ConsultationProcessSection />

      {/* WHY SRI GAYATHRI ASTROLOGY */}
      <WhyChooseUs onNavigateContact={() => onNavigate(buildLocalizedPath('/contact', locale))} />

      {/* HOMEPAGE QUICK SERVICE SECTION (Master Prompt Requirement #5) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Traditional Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
            Astrology Consultation Services
          </h2>
          <p className="text-base sm:text-lg text-[#5C5555]">
            Explore individual consultation topics to prepare your details and understand how Sri Krishna Jyotish can assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { key: 'horoscope', title: 'Vedic Astrology Consultation' },
            { key: 'janma-kundali', title: 'Kundali Reading' },
            { key: 'horoscope', title: 'Horoscope Analysis' },
            { key: 'marriage-astrology', title: 'Marriage Astrology' },
            { key: 'kundali-matching', title: 'Kundali Matching' },
            { key: 'career-astrology', title: 'Career Astrology' },
            { key: 'business-astrology', title: 'Business Astrology' },
            { key: 'education-astrology', title: 'Education Astrology' },
            { key: 'love-astrology', title: 'Relationship Astrology' },
            { key: 'family-astrology', title: 'Family Astrology' },
            { key: 'muhurtham', title: 'Muhurtham' },
            { key: 'numerology', title: 'Numerology' },
            { key: 'dosha-analysis', title: 'Dosha Analysis' },
          ].map((item, idx) => {
            const service = servicesData[item.key];
            if (!service) return null;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(buildLocalizedPath(`/${service.slug}`, locale))}
                className="group bg-[#FFFDF9] rounded-xl p-6 border border-[#E8DFC9] hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#221F1F] mb-2 group-hover:text-[#58111A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5555] leading-relaxed mb-4 line-clamp-3">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between text-xs font-bold text-[#58111A]">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C59B27]" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate(buildLocalizedPath('/services', locale))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FAF4E8] hover:bg-[#F2E8D2] text-[#58111A] font-bold text-sm border border-[#E3D4B6] transition-colors"
          >
            <span>View All Astrology Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* DISTINCT LOCATION CALLOUT (Connecting to the dedicated Kurnool page) */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FAF5EC] to-[#F5ECE0] border-y border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E0D5BE] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.home.kurnoolCardBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading">
                {t.home.kurnoolCardHeading}
              </h2>
              <p className="text-sm sm:text-base text-[#554E4E] leading-relaxed">
                {t.home.kurnoolCardText}
              </p>
              <div className="pt-2">
                <button
                   onClick={() => onNavigate(buildLocalizedPath('/astrologer/kurnool', locale))}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t.home.kurnoolCardBtn}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-72 bg-[#FAF7F0] p-6 rounded-xl border border-[#E8DFC9] text-center shrink-0">
              <div className="text-xs font-bold text-[#8C7A58] uppercase mb-1">Direct Consultation</div>
              <div className="text-lg font-bold text-[#221F1F] font-heading mb-2">Sri Krishna Jyotish</div>
              <p className="text-xs text-[#665E5E] mb-4">In-person visits in Kurnool or daily phone consultations across AP & Telangana</p>
              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>88852 88817</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE FAQs */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              Clear answers to common questions about Vedic astrology consultation with Sri Krishna Jyotish.
            </p>
          </div>

          <div className="space-y-4">
            {homepageFAQs.map((faq) => (
              <div
                key={faq.id}
                className="p-6 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9] hover:border-[#D4AF37] transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-3 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58111A] mt-2 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/50">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate(buildLocalizedPath('/faq', locale))}
              className="text-sm font-bold text-[#58111A] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Bottom CTA Banner */}
      <CallToActionBanner
        headline="Looking for Clarity on Important Life Questions?"
        supportingText="Connect with Sri Krishna Jyotish to discuss marriage, career, business, or auspicious Muhurtham across Andhra Pradesh & Telangana."
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
