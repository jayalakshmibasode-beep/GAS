import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { LocationPage } from './pages/LocationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AllServicesPage } from './pages/AllServicesPage';
import { FAQPage } from './pages/FAQPage';
import { GuidesPage } from './pages/GuidesPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AstrologyConsultationPage } from './pages/AstrologyConsultationPage';
import { servicesData } from './data/servicesData';
import { guideArticles } from './data/guidesData';
import { parsePathLocale } from './data/i18n';

import { locationsData, getLocationByPath } from './data/locationsData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    let cleanPath = path;
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const { locale, purePath } = parsePathLocale(currentPath);

  // Route Resolution based on purePath
  const renderCurrentPage = () => {
    const normalizedPath = purePath.toLowerCase().replace(/\/+$/, '') || '/';

    // 1. Home (/, /te/, /hi/)
    if (normalizedPath === '/') {
      return <HomePage onNavigate={navigateTo} locale={locale} />;
    }

    // 2. About (/about, /te/about, /hi/about)
    if (normalizedPath === '/about') {
      return <AboutPage onNavigate={navigateTo} locale={locale} />;
    }

    // 2.5 Astrology Consultation (/astrology-consultation)
    if (normalizedPath === '/astrology-consultation') {
      return <AstrologyConsultationPage onNavigate={navigateTo} locale={locale} />;
    }

    // 3. Dynamic Hierarchical Locations
    if (normalizedPath.startsWith('/locations/')) {
      const locPath = normalizedPath.replace('/locations', '');
      const loc = getLocationByPath(locPath);
      if (loc) {
        return <LocationPage location={loc} onNavigate={navigateTo} locale={locale} />;
      }
    }

    // Legacy Location Redirects/Matches
    if (
      normalizedPath === '/astrologer/kurnool' ||
      normalizedPath === '/locations/astrologer-kurnool' ||
      normalizedPath === '/astrologer-kurnool'
    ) {
      const kurnoolLoc = getLocationByPath('/andhra-pradesh/kurnool');
      if (kurnoolLoc) {
        return <LocationPage location={kurnoolLoc} onNavigate={navigateTo} locale={locale} />;
      }
    }

    if (normalizedPath === '/locations') {
       // Just show the state picker or main location page
       return <LocationPage onNavigate={navigateTo} locale={locale} />;
    }

    // 4. Contact (/contact)
    if (normalizedPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} locale={locale} />;
    }

    // 5. Services Hub (/services, /astrology-services, /astrology-consultation, /vedic-astrology)
    if (
      normalizedPath === '/services' ||
      normalizedPath === '/astrology-services' ||
      normalizedPath === '/astrology-consultation' ||
      normalizedPath === '/vedic-astrology'
    ) {
      return <AllServicesPage onNavigate={navigateTo} locale={locale} />;
    }

    // 6. FAQ (/faq)
    if (normalizedPath === '/faq') {
      return <FAQPage onNavigate={navigateTo} locale={locale} />;
    }

    // 7. Guides Hub (/guides)
    if (normalizedPath === '/guides') {
      return <GuidesPage onNavigate={navigateTo} locale={locale} />;
    }

    // 8. Individual Guide Detail (/guides/:slug)
    if (normalizedPath.startsWith('/guides/')) {
      const guideSlug = normalizedPath.replace('/guides/', '');
      const article = guideArticles.find((a) => a.slug === guideSlug);
      if (article) {
        return <GuideDetailPage article={article} onNavigate={navigateTo} />;
      }
    }

    // 9. Legal Pages (/privacy-policy, /terms-disclaimer)
    if (normalizedPath === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigateTo} locale={locale} />;
    }
    if (normalizedPath === '/terms-disclaimer') {
      return <LegalPage type="terms" onNavigate={navigateTo} locale={locale} />;
    }

    // 10. Service Pages (e.g. /marriage-astrology, /kundali-matching, /career-astrology, /business-astrology, /horoscope, /numerology, /muhurtham, /dosha-analysis)
    const cleanSlug = normalizedPath.replace(/^\//, '');
    if (servicesData[cleanSlug]) {
      return <ServicePage service={servicesData[cleanSlug]} onNavigate={navigateTo} locale={locale} />;
    }

    // 11. 404 Not Found
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#221F1F]">
      {/* Top Header with Multi-language support */}
      <Header currentPath={currentPath} onNavigate={navigateTo} locale={locale} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} locale={locale} />

      {/* Mobile Sticky Call CTA */}
      <MobileStickyCTA />
    </div>
  );
}
