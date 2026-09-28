import React from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PreparationChecklist } from '../components/PreparationChecklist';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { DiyaIcon, GoldDivider } from '../components/VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';

interface ServicePageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
  locale?: Locale;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate, locale = 'en' }) => {
  const t = translations[locale] || translations.en;
  const relatedServices = service.relatedServiceSlugs
    .map(slug => servicesData[slug])
    .filter(Boolean);

  const canonical = locale === 'en' ? `/${service.slug}` : `/${locale}/${service.slug}`;

  return (
    <div>
      {/* Inner-Page SEO with Title including Phone Number */}
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalPath={canonical}
        schemaType="Service"
        extraSchema={{
          '@type': 'Service',
          'name': service.title,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Sri Gayathri Astrology',
            'telephone': '+918885288817'
          },
          'areaServed': 'Kurnool, Andhra Pradesh',
          'description': service.summary
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t.nav.services, href: buildLocalizedPath('/services', locale), onClick: () => onNavigate(buildLocalizedPath('/services', locale)) },
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Gayathri Astrology • Kurnool</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#221F1F] font-heading mb-5 leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed max-w-3xl mx-auto mb-8">
            {service.heroSupportingText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-md transition-all border border-[#7A1926]"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817 for Consultation</span>
            </a>

            <a
              href={`https://wa.me/918885288817?text=Hello%20Sri%20Krishna%20Jyotish,%20I%20am%20interested%20in%20a%20consultation%20regarding%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#126b34] font-semibold text-base transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          <div className="mt-4 text-xs text-[#7A6F6F] font-medium flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Personalized Consultation in Kurnool, Andhra Pradesh</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. "Is This What You're Looking For?" */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="w-5 h-5 text-[#58111A]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                  Is This What You're Looking For?
                </h2>
              </div>
              <p className="text-sm text-[#5C5555] mb-5">
                Clients frequently reach out to Sri Krishna Jyotish with the following questions and situations:
              </p>
              <ul className="space-y-3">
                {service.isThisForYouQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#332E2E]">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. About This Consultation */}
            <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <div className="flex items-center gap-2.5 mb-4">
                <Sparkles className="w-5 h-5 text-[#58111A]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                  About This Consultation
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4D4545] leading-relaxed">
                {service.aboutContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 3. What We Discuss */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-4">
                What We Discuss During the Consultation
              </h2>
              <p className="text-sm text-[#5C5555] mb-5">
                Every consultation is tailored to your unique birth chart and questions. Common areas of discussion include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.whatWeDiscuss.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] flex items-start gap-2.5 text-xs sm:text-sm text-[#332E2E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58111A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. What You May Need */}
            <section className="bg-[#FAF6ED] rounded-2xl p-6 sm:p-8 border border-[#E2D6BC]">
              <div className="flex items-center gap-2.5 mb-4">
                <Calendar className="w-5 h-5 text-[#58111A]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                  What You May Need
                </h2>
              </div>
              <p className="text-sm text-[#5C5555] mb-4">
                To help Sri Krishna Jyotish evaluate your traditional Vedic charts, please have the following ready when you call:
              </p>
              <ul className="space-y-2.5">
                {service.whatYouMayNeed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#332E2E] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#58111A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. How It Works */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-6">
                How Your Consultation Works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#EDE4D4]">
                    <div className="text-xs font-bold text-[#58111A] font-heading mb-1">
                      Step {step.step}
                    </div>
                    <div className="text-sm font-bold text-[#221F1F] mb-1">
                      {step.title}
                    </div>
                    <div className="text-xs text-[#5C5555] leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-6">
                  {service.title} FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                      <h3 className="text-sm sm:text-base font-bold text-[#221F1F] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#554E4E] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Consultation Call Card & Related Services */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Call Action Box */}
            <div className="sticky top-24 bg-gradient-to-b from-[#58111A] to-[#3D0A11] rounded-2xl p-6 sm:p-7 text-white shadow-lg border border-[#7A1926]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <DiyaIcon className="w-7 h-7" />
              </div>

              <div className="text-xs font-bold text-[#F5E6AB] uppercase tracking-wider mb-1">
                Direct Astrologer Consultation
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">
                Sri Krishna Jyotish
              </h3>

              <p className="text-xs text-[#E8DCD4] leading-relaxed mb-6">
                Consult regarding {service.title.toLowerCase()} or other traditional Jyotish questions.
              </p>

              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base transition-all shadow-md active:scale-95"
              >
                <PhoneCall className="w-5 h-5 fill-current" />
                <span>Call 88852 88817</span>
              </a>

              <div className="mt-3 text-center text-[11px] text-[#D5C2BA]">
                Sri Gayathri Astrology • Kurnool, AP
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 space-y-2 text-xs text-[#E8DCD4]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Strictly confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Traditional Vedic principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>No fear-based predictions</span>
                </div>
              </div>
            </div>

            {/* Preparation helper */}
            <PreparationChecklist />

            {/* Related Services Internal Links */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFC9]">
                <h3 className="text-base font-bold text-[#221F1F] font-heading mb-4">
                  Related Consultations
                </h3>
                <div className="space-y-2.5">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onNavigate(buildLocalizedPath(`/${rel.slug}`, locale))}
                      className="w-full text-left p-3 rounded-lg bg-[#FAF7F0] hover:bg-[#FAF0DC] border border-[#EDE4D4] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#221F1F] group-hover:text-[#58111A]">
                          {rel.title}
                        </div>
                        <div className="text-[11px] text-[#665E5E] line-clamp-1">
                          {rel.shortTag}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform shrink-0" />
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0E8D8] text-center">
                  <button
                    onClick={() => onNavigate(buildLocalizedPath('/services', locale))}
                    className="text-xs font-bold text-[#58111A] hover:underline"
                  >
                    View All Services →
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Reusable Bottom CTA Banner */}
      <CallToActionBanner
        headline={`Discuss Your Questions with Sri Krishna Jyotish`}
        supportingText={`Whether you need guidance for ${service.title.toLowerCase()} or an auspicious timing window, Sri Krishna Jyotish is available to provide thoughtful perspective.`}
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
