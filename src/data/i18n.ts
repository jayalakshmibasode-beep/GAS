export type Locale = 'en' | 'te' | 'hi' | 'ta' | 'kn' | 'ml' | 'mr' | 'bn' | 'gu' | 'pa' | 'or' | 'as';

export interface LanguageConfig {
  language_code: Locale;
  language_name: string;
  native_name: string;
  direction: 'ltr' | 'rtl';
  enabled: boolean;
  indexable: boolean;
  translation_status: 'complete' | 'review' | 'draft';
}

export const languageConfig: LanguageConfig[] = [
  { language_code: 'en', language_name: 'English', native_name: 'English', direction: 'ltr', enabled: true, indexable: true, translation_status: 'complete' },
  { language_code: 'te', language_name: 'Telugu', native_name: 'తెలుగు', direction: 'ltr', enabled: true, indexable: true, translation_status: 'complete' },
  { language_code: 'hi', language_name: 'Hindi', native_name: 'हिन्दी', direction: 'ltr', enabled: true, indexable: true, translation_status: 'complete' },
  { language_code: 'ta', language_name: 'Tamil', native_name: 'தமிழ்', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'kn', language_name: 'Kannada', native_name: 'ಕನ್ನಡ', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'ml', language_name: 'Malayalam', native_name: 'മലയാളം', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'mr', language_name: 'Marathi', native_name: 'मराठी', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'bn', language_name: 'Bengali', native_name: 'বাংলা', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'gu', language_name: 'Gujarati', native_name: 'ગુજરાતી', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'pa', language_name: 'Punjabi', native_name: 'ਪੰਜਾਬੀ', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'or', language_name: 'Odia', native_name: 'ଓଡ଼ିଆ', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
  { language_code: 'as', language_name: 'Assamese', native_name: 'অসমীয়া', direction: 'ltr', enabled: false, indexable: false, translation_status: 'draft' },
];

export const getEnabledLanguages = () => languageConfig.filter(l => l.enabled);
export const getIndexableLanguages = () => languageConfig.filter(l => l.indexable);
export const getActiveLocales = () => getEnabledLanguages().map(l => l.language_code);

export interface TranslationData {
  nav: {
    home: string;
    services: string;
    marriage: string;
    kundali: string;
    horoscope: string;
    career: string;
    business: string;
    numerology: string;
    muhurtham: string;
    kurnool: string;
    locations: string;
    faq: string;
    about: string;
    contact: string;
    guides: string;
    callNow: string;
    switchLang: string;
  };
  home: {
    eyebrow: string;
    h1: string;
    p: string;
    callBtn: string;
    findConsultationBtn: string;
    trust1: string;
    trust2: string;
    trust3: string;
    aiAnswerTitle: string;
    aiAnswerHeading: string;
    aiAnswerBody: string;
    locLabel: string;
    locVal: string;
    astrologerLabel: string;
    astrologerVal: string;
    phoneLabel: string;
    quickAnswersHeading: string;
    quickAnswersSubtitle: string;
    kurnoolCardBadge: string;
    kurnoolCardHeading: string;
    kurnoolCardText: string;
    kurnoolCardBtn: string;
    popularServicesHeading: string;
    popularServicesSubtitle: string;
    regionBadge: string;
    regionHeading: string;
    regionSubtitle: string;
    apHeading: string;
    tgHeading: string;
    regionCallText: string;
  };
  location: {
    heroBadge: string;
    h1: string;
    p: string;
    callBtn: string;
    contactBtn: string;
    summaryBadge: string;
    summaryHeading: string;
    matrixHeading: string;
    matrixSubtitle: string;
    trustHeading: string;
    trustText: string;
    faqHeading: string;
    faqSubtitle: string;
    ctaHeading: string;
    ctaSubtext: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    locationTitle: string;
    locationDesc: string;
  };
}

export const translations: Partial<Record<Locale, TranslationData>> & { en: TranslationData } = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      marriage: 'Marriage',
      kundali: 'Kundali Matching',
      horoscope: 'Horoscope',
      career: 'Career',
      business: 'Business',
      numerology: 'Numerology',
      muhurtham: 'Muhurtham',
      kurnool: 'Kurnool',
      locations: 'Locations',
      faq: 'FAQ',
      about: 'About',
      contact: 'Contact',
      guides: 'Guides',
      callNow: 'Call 88852 88817',
      switchLang: 'Language'
    },
    home: {
      eyebrow: 'SRI GAYATHRI ASTROLOGY • ANDHRA PRADESH & TELANGANA',
      h1: 'Traditional Vedic Astrology Guidance for Andhra Pradesh & Telangana',
      p: 'Consult Sri Krishna Jyotish for personalized traditional Vedic astrology guidance across Andhra Pradesh & Telangana for marriage, Kundali matching, career, business, education, family matters, horoscope, Muhurtham and important life decisions.',
      callBtn: 'Call 88852 88817',
      findConsultationBtn: 'Find Your Consultation',
      trust1: 'Personalized Jyotish Guidance',
      trust2: 'Classical Vedic Shastra',
      trust3: 'Serving Andhra Pradesh & Telangana',
      aiAnswerTitle: 'Entity Overview & AI Summary',
      aiAnswerHeading: 'About Sri Gayathri Astrology (AP & Telangana)',
      aiAnswerBody: 'Sri Gayathri Astrology is a traditional Vedic astrology consultation service led by Sri Krishna Jyotish, serving families and individuals across Andhra Pradesh and Telangana (with head consultation center in Kurnool, AP). The service provides authentic Jyotish guidance for marriage matching, career decisions, business success, horoscope analysis, auspicious Muhurtham, and numerology.',
      locLabel: 'Coverage',
      locVal: 'Andhra Pradesh & Telangana (Base: Kurnool)',
      astrologerLabel: 'Astrologer',
      astrologerVal: 'Sri Krishna Jyotish',
      phoneLabel: 'Primary Phone',
      quickAnswersHeading: 'Quick Answers for Telugu States',
      quickAnswersSubtitle: 'Concise answers to primary questions about our Vedic astrology consultation service across AP & Telangana.',
      kurnoolCardBadge: 'Dedicated Kurnool Location Page',
      kurnoolCardHeading: 'Visiting or Located in Kurnool, Andhra Pradesh?',
      kurnoolCardText: 'For detailed Kurnool local consultation information, localized marriage and Kundali matching questions, and in-person visit details, visit our dedicated Kurnool city page.',
      kurnoolCardBtn: 'Open Kurnool Page',
      popularServicesHeading: 'Vedic Astrology Consultations',
      popularServicesSubtitle: 'Explore individual consultation topics to prepare your details and understand how Sri Krishna Jyotish can assist you.',
      regionBadge: 'Telugu States Coverage',
      regionHeading: 'Serving Families Across Andhra Pradesh & Telangana',
      regionSubtitle: 'Whether you reside in Telangana or Andhra Pradesh, Sri Krishna Jyotish provides direct phone and in-person Vedic consultations adhering strictly to authentic Telugu Panchangam and classical Jyotish principles.',
      apHeading: 'Andhra Pradesh Consultations',
      tgHeading: 'Telangana Consultations',
      regionCallText: 'Direct telephone consultations available daily for all districts of AP and Telangana. Call 88852 88817 to consult.'
    },
    location: {
      heroBadge: 'Kurnool City • Kurnool District • Andhra Pradesh, India',
      h1: 'Vedic Astrology Consultation in Kurnool',
      p: 'Looking for traditional astrology guidance in Kurnool? Sri Gayathri Astrology by Sri Krishna Jyotish provides personalized Vedic astrology consultation for people seeking guidance about marriage, relationships, career, business, education, horoscope, Muhurtham, numerology and other traditional Jyotish matters.',
      callBtn: 'Call 88852 88817',
      contactBtn: 'Contact Sri Krishna Jyotish',
      summaryBadge: 'Location Summary • Kurnool',
      summaryHeading: 'Astrology Consultation in Kurnool at a Glance',
      matrixHeading: 'Personalized Vedic Consultations in Kurnool',
      matrixSubtitle: 'Natural, client-first astrology consultations grounded in classical Jyotish Shastra for residents of Kurnool.',
      trustHeading: 'Looking for an Astrologer in Kurnool?',
      trustText: 'Sri Gayathri Astrology by Sri Krishna Jyotish offers authentic, personalized consultations for clients located in Kurnool and across Andhra Pradesh. We prioritize calm clarity, genuine Vedic Shastra methodologies, and direct phone accessibility without artificial claims or fear-based predictions.',
      faqHeading: 'Kurnool Astrology FAQs',
      faqSubtitle: 'Frequently asked questions by clients seeking astrology consultation in Kurnool, Andhra Pradesh.',
      ctaHeading: 'Looking for Astrology Guidance in Kurnool?',
      ctaSubtext: 'Call for Consultation • Traditional Vedic Astrology in Kurnool, Andhra Pradesh'
    },
    seo: {
      homeTitle: 'Sri Gayathri Astrology | Vedic Astrology for Andhra Pradesh & Telangana',
      homeDesc: 'Sri Gayathri Astrology by Sri Krishna Jyotish offers personalized Vedic astrology guidance across Andhra Pradesh & Telangana for marriage, relationships, career, business, horoscope, numerology and Muhurtham. Call 88852 88817.',
      locationTitle: 'Astrologer in Kurnool | Sri Krishna Jyotish | 88852 88817',
      locationDesc: 'Looking for traditional astrology guidance in Kurnool? Sri Gayathri Astrology by Sri Krishna Jyotish offers personalized Vedic astrology consultation. Call 88852 88817.'
    }
  },
  te: {
    nav: {
      home: 'ముఖ్యాంశం',
      services: 'సేవలు',
      marriage: 'వివాహ జ్యోతిష్యం',
      kundali: 'కుండలి గుణమేళనం',
      horoscope: 'జన్మ కుండలి',
      career: 'ఉద్యోగ జ్యోతిష్యం',
      business: 'వ్యాపార జ్యోతిష్యం',
      numerology: 'సంఖ్యాశాస్త్రం',
      muhurtham: 'శుభ ముహూర్తం',
      kurnool: 'కర్నూలు',
      locations: 'ప్రాంతాలు',
      faq: 'ప్రశ్నోత్తరాలు',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి',
      guides: 'మార్గదర్శిని',
      callNow: 'కాల్ 88852 88817',
      switchLang: 'భాష'
    },
    home: {
      eyebrow: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం • ఆంధ్రప్రదేశ్ & తెలంగాణ',
      h1: 'ఆంధ్రప్రదేశ్ & తెలంగాణ ప్రజల కొరకు సాంప్రదాయ వైదిక జ్యోతిష్య మార్గదర్శనం',
      p: 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ అంతటా వివాహం, కుండలి గుణమేళనం, ఉద్యోగం, వ్యాపారం, చదువు, కుటుంబ విషయాలు, జన్మ కుండలి, శుభ ముహూర్తం మరియు ముఖ్యమైన జీవిత నిర్ణయాల కొరకు శ్రీ కృష్ణ జ్యోతిష్ గారిని సంప్రదించండి.',
      callBtn: 'కాల్ చేయండి 88852 88817',
      findConsultationBtn: 'సేవలను పరిశీలించండి',
      trust1: 'వ్యక్తిగత జ్యోతిష్య సంప్రదింపులు',
      trust2: 'ప్రాచీన వైదిక జ్యోతిష శాస్త్రం',
      trust3: 'ఆంధ్రప్రదేశ్ & తెలంగాణ అంతటా సేవలు',
      aiAnswerTitle: 'సంస్థ వివరాలు & సారాంశం',
      aiAnswerHeading: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం (ఏపీ & తెలంగాణ)',
      aiAnswerBody: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం అనేది శ్రీ కృష్ణ జ్యోతిష్ గారిచే నిర్వహించబడుతున్న ప్రామాణిక వైదిక జ్యోతిష్య సేవా సంస్థ. కర్నూలు కేంద్రంగా ఆంధ్రప్రదేశ్ మరియు తెలంగాణలోని రెండు తెలుగు రాష్ట్రాల ప్రజలకు వివాహ మేళనం, ఉద్యోగ, వ్యాపార, జాతక పరిశీలన, ముహూర్తాలపై స్పష్టమైన మార్గదర్శనం అందిస్తుంది.',
      locLabel: 'సేవా పరిధి',
      locVal: 'ఆంధ్రప్రదేశ్ & తెలంగాణ (కేంద్రం: కర్నూలు)',
      astrologerLabel: 'జ్యోతిష్కులు',
      astrologerVal: 'శ్రీ కృష్ణ జ్యోతిష్',
      phoneLabel: 'ఫోన్ నంబర్',
      quickAnswersHeading: 'రెండు తెలుగు రాష్ట్రాల కోసం సత్వర సమాధానాలు',
      quickAnswersSubtitle: 'ఏపీ మరియు తెలంగాణ ప్రజలకు మా వైదిక జ్యోతిష్య సేవల గురించి ప్రముఖ ప్రశ్నలకు స్పష్టమైన వివరాలు.',
      kurnoolCardBadge: 'కర్నూలు ప్రత్యేక పేజీ',
      kurnoolCardHeading: 'కర్నూలు నగరంలో లేదా చుట్టుపక్కల ఉన్నారా?',
      kurnoolCardText: 'కర్నూలు స్థానిక జ్యోతిష్య సంప్రదింపుల సమాచారం, ప్రత్యక్ష దర్శనం మరియు స్థానిక సంప్రదింపు వివరాల కోసం మా ప్రత్యేక కర్నూలు పేజీని చూడండి.',
      kurnoolCardBtn: 'కర్నూలు పేజీ చూడండి',
      popularServicesHeading: 'వైదిక జ్యోతిష్య సేవలు',
      popularServicesSubtitle: 'శ్రీ కృష్ణ జ్యోతిష్ గారిని సంప్రదించడానికి వివిధ జ్యోతిష్య విభాగాలను పరిశీలించండి.',
      regionBadge: 'తెలుగు రాష్ట్రాల సేవా పరిధి',
      regionHeading: 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ అంతటా కుటుంబాలకు నమ్మకమైన జ్యోతిష్య సేవలు',
      regionSubtitle: 'హైదరాబాద్, వరంగల్, కర్నూలు, విజయవాడ, విశాఖపట్నం, తిరుపతి సహా రెండు రాష్ట్రాల ప్రజలకు తెలుగు పంచాంగ పద్ధతిలో స్పష్టమైన ఫోన్ మరియు ప్రత్యక్ష సంప్రదింపులు.',
      apHeading: 'ఆంధ్రప్రదేశ్ జిల్లాలు',
      tgHeading: 'తెలంగాణ జిల్లాలు',
      regionCallText: 'రెండు రాష్ట్రాల ప్రజలు సంప్రదింపుల కొరకు నేరుగా 88852 88817 నంబరుకు కాల్ చేయవచ్చు.'
    },
    location: {
      heroBadge: 'కర్నూలు నగరం • కర్నూలు జిల్లా • ఆంధ్రప్రదేశ్, భారతదేశం',
      h1: 'కర్నూలులో ప్రామాణిక వైదిక జ్యోతిష్య సంప్రదింపులు',
      p: 'కర్నూలులో నమ్మకమైన జ్యోతిష్య సంప్రదింపుల కోసం చూస్తున్నారా? శ్రీ గాయత్రి జ్యోతిష్యాలయం (శ్రీ కృష్ణ జ్యోతిష్) వివాహం, సంబంధాలు, ఉద్యోగ, వ్యాపార, జన్మ జాతక, ముహూర్త విషయాలపై స్పష్టమైన వైదిక జ్యోతిష్య సలహాలను అందిస్తుంది.',
      callBtn: 'కాల్ చేయండి 88852 88817',
      contactBtn: 'శ్రీ కృష్ణ జ్యోతిష్ గారిని సంప్రదించండి',
      summaryBadge: 'కర్నూలు సమాచారం',
      summaryHeading: 'కర్నూలులో జ్యోతిష్య సేవల సంక్షిప్త వివరణ',
      matrixHeading: 'కర్నూలులో అందించే ప్రముఖ జ్యోతిష్య సేవలు',
      matrixSubtitle: 'కర్నూలు మరియు ఆంధ్రప్రదేశ్ ప్రజల కోసం సాంప్రదాయ జ్యోతిష శాస్త్ర ఆధారిత సంప్రదింపులు.',
      trustHeading: 'కర్నూలులో అనుభవజ్ఞులైన జ్యోతిష్కుల కోసం వెతుకుతున్నారా?',
      trustText: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం కర్నూలు నగరంలో ప్రజలకు ఎలాంటి భయభ్రాంతులకు గురిచేయకుండా, నిజాయితీతో కూడిన శాస్త్రీయ జ్యోతిష్య పరిష్కారాలను అందిస్తుంది.',
      faqHeading: 'కర్నూలు జ్యోతిష్య ప్రశ్నోత్తరాలు',
      faqSubtitle: 'కర్నూలులో జ్యోతిష్య సంప్రదింపుల గురించి తరచుగా అడిగే ప్రశ్నలు మరియు సమాధానాలు.',
      ctaHeading: 'కర్నూలులో జ్యోతిష్య సలహా కొరకు సంప్రదించండి',
      ctaSubtext: 'ప్రత్యక్ష ఫోన్ సంప్రదింపులు • 88852 88817 • కర్నూలు, ఆంధ్రప్రదేశ్'
    },
    seo: {
      homeTitle: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం | ఆంధ్రప్రదేశ్ & తెలంగాణలో వైదిక జ్యోతిష్యం',
      homeDesc: 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ ప్రజలకు వివాహం, కుండలి మేళనం, ఉద్యోగం, వ్యాపారం, జాతక పరిశీలన, ముహూర్తం కొరకు శ్రీ కృష్ణ జ్యోతిష్ గారిని సంప్రదించండి. కాల్ 88852 88817.',
      locationTitle: 'కర్నూలులో జ్యోతిష్కులు | శ్రీ కృష్ణ జ్యోతిష్ | 88852 88817',
      locationDesc: 'కర్నూలులో సాంప్రదాయ జ్యోతిష్య సలహా కోసం శ్రీ గాయత్రి జ్యోతిష్యాలయం (శ్రీ కృష్ణ జ్యోతిష్) సంప్రదించండి. కాల్ 88852 88817.'
    }
  },
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      services: 'सेवाएं',
      marriage: 'विवाह ज्योतिष',
      kundali: 'कुंडली मिलान',
      horoscope: 'जन्म कुंडली',
      career: 'करियर ज्योतिष',
      business: 'व्यापार ज्योतिष',
      numerology: 'अंकशास्त्र',
      muhurtham: 'शुभ मुहूर्त',
      kurnool: 'कुरनूल',
      locations: 'स्थान',
      faq: 'एफएक्यू',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      guides: 'गाइड',
      callNow: 'कॉल 88852 88817',
      switchLang: 'भाषा'
    },
    home: {
      eyebrow: 'श्री गायत्री ज्योतिषालय • आंध्र प्रदेश और तेलंगाना',
      h1: 'आंध्र प्रदेश एवं तेलंगाना हेतु प्रामाणिक वैदिक ज्योतिषीय मार्गदर्शन',
      p: 'आंध्र प्रदेश और तेलंगाना में विवाह, कुंडली मिलान, करियर, व्यापार, शिक्षा, परिवार, जन्म कुंडली, अंकशास्त्र और शुभ मुहूर्त के लिए श्री कृष्ण ज्योतिष से वैदिक ज्योतिषीय परामर्श प्राप्त करें।',
      callBtn: 'कॉल करें 88852 88817',
      findConsultationBtn: 'सेवाएं देखें',
      trust1: 'व्यक्तिगत ज्योतिषीय परामर्श',
      trust2: 'प्रामाणिक वैदिक ज्योतिष',
      trust3: 'आंध्र प्रदेश व तेलंगाना में समर्पित सेवाएं',
      aiAnswerTitle: 'संस्थान विवरण व सारांश',
      aiAnswerHeading: 'श्री गायत्री ज्योतिषालय (आंध्र प्रदेश व तेलंगाना)',
      aiAnswerBody: 'श्री गायत्री ज्योतिषालय, श्री कृष्ण ज्योतिष के मार्गदर्शन में आंध्र प्रदेश और तेलंगाना के सभी क्षेत्रों में विवाह मिलान, करियर, व्यापार, जन्म पत्रिका, मुहूर्त और अंकशास्त्र पर परंपरागत वैदिक मार्गदर्शन प्रदान करता है।',
      locLabel: 'सेवा क्षेत्र',
      locVal: 'आंध्र प्रदेश व तेलंगाना (मुख्य केंद्र: कुरनूल)',
      astrologerLabel: 'ज्योतिषी',
      astrologerVal: 'श्री कृष्ण ज्योतिष',
      phoneLabel: 'प्राथमिक फोन',
      quickAnswersHeading: 'त्वरित उत्तर (AP & Telangana)',
      quickAnswersSubtitle: 'आंध्र प्रदेश व तेलंगाना के लोगों के लिए हमारी वैदिक ज्योतिष सेवाओं के बारे में प्रमुख उत्तर।',
      kurnoolCardBadge: 'कुरनूल विशेष पृष्ठ',
      kurnoolCardHeading: 'क्या आप कुरनूल या आसपास के क्षेत्र में हैं?',
      kurnoolCardText: 'कुरनूल में स्थानीय ज्योतिषीय परामर्श, विवाह कुंडली मिलान एवं प्रत्यक्ष मुलाकात के लिए हमारे समर्पित कुरनूल पृष्ठ को देखें।',
      kurnoolCardBtn: 'कुरनूल पृष्ठ खोलें',
      popularServicesHeading: 'वैदिक ज्योतिष परामर्श सेवाएं',
      popularServicesSubtitle: 'श्री कृष्ण ज्योतिष से संपर्क करने के लिए विभिन्न ज्योतिष विषयों की जानकारी लें।',
      regionBadge: 'तेलुगु राज्य कवरेज',
      regionHeading: 'आंध्र प्रदेश एवं तेलंगाना के परिवारों के लिए वैदिक परामर्श',
      regionSubtitle: 'हैदराबाद, वारंगल, कुरनूल, विजयवाड़ा, विशाखापट्टनम सहित दोनों राज्यों में प्रामाणिक पंचांग आधारित फोन व प्रत्यक्ष परामर्श उपलब्ध है।',
      apHeading: 'आंध्र प्रदेश के प्रमुख क्षेत्र',
      tgHeading: 'तेलंगाना के प्रमुख क्षेत्र',
      regionCallText: 'परामर्श के लिए प्रतिदिन 88852 88817 पर सीधे कॉल करें।'
    },
    location: {
      heroBadge: 'कुरनूल शहर • कुरनूल जिला • आंध्र प्रदेश, भारत',
      h1: 'कुरनूल में प्रामाणिक वैदिक ज्योतिष परामर्श',
      p: 'कुरनूल में पारंपरिक ज्योतिषीय मार्गदर्शन की तलाश है? श्री गायत्री ज्योतिषालय (श्री कृष्ण ज्योतिष) विवाह, रिश्ते, करियर, व्यवसाय, शिक्षा, जन्म कुंडली, मुहूर्त और अंकशास्त्र पर व्यक्तिगत वैदिक ज्योतिष परामर्श प्रदान करता है।',
      callBtn: 'कॉल करें 88852 88817',
      contactBtn: 'श्री कृष्ण ज्योतिष से संपर्क करें',
      summaryBadge: 'स्थान सारांश • कुरनूल',
      summaryHeading: 'कुरनूल में ज्योतिष परामर्श: एक नज़र में',
      matrixHeading: 'कुरनूल में व्यक्तिगत वैदिक परामर्श',
      matrixSubtitle: 'कुरनूल और आंध्र प्रदेश के निवासियों के लिए शास्त्रीय ज्योतिष आधारित स्पष्ट मार्गदर्शन।',
      trustHeading: 'कुरनूल में ज्योतिषी की तलाश है?',
      trustText: 'श्री गायत्री ज्योतिषालय (श्री कृष्ण ज्योतिष) कुरनूल में बिना किसी भय-आधारित दावों के, शांत और स्पष्ट वैदिक सिद्धांतों पर आधारित वास्तविक मार्गदर्शन प्रदान करता है।',
      faqHeading: 'कुरनूल ज्योतिष एफएक्यू',
      faqSubtitle: 'कुरनूल में ज्योतिष परामर्श के संबंध में अक्सर पूछे जाने वाले प्रश्न।',
      ctaHeading: 'कुरनूल में ज्योतिषीय मार्गदर्शन के लिए संपर्क करें',
      ctaSubtext: 'परामर्श के लिए कॉल करें • 88852 88817 • कुरनूल, आंध्र प्रदेश'
    },
    seo: {
      homeTitle: 'श्री गायत्री ज्योतिषालय | आंध्र प्रदेश और तेलंगाना में वैदिक ज्योतिष',
      homeDesc: 'आंध्र प्रदेश और तेलंगाना में विवाह, कुंडली मिलान, करियर, व्यापार, जन्म पत्रिका, अंकशास्त्र और मुहूर्त हेतु श्री कृष्ण ज्योतिष से परामर्श लें। कॉल 88852 88817.',
      locationTitle: 'कुरनूल में ज्योतिषी | श्री कृष्ण ज्योतिष | 88852 88817',
      locationDesc: 'कुरनूल में प्रामाणिक वैदिक ज्योतिष परामर्श के लिए श्री गायत्री ज्योतिषालय से संपर्क करें। कॉल 88852 88817.'
    }
  }
};

export const parsePathLocale = (pathname: string): { locale: Locale; purePath: string } => {
  let normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  let detectedLocale: Locale = 'en';

  const activeLocales = getActiveLocales().filter(l => l !== 'en');

  // Check for locale prefix
  for (const loc of activeLocales) {
    if (normalized === `/${loc}` || normalized.startsWith(`/${loc}/`)) {
      detectedLocale = loc;
      normalized = normalized.replace(new RegExp(`^\\/${loc}(\\/|$)`), '/');
      break;
    }
  }

  // Clean up legacy paths if any
  if (normalized.startsWith('/locations/')) {
    normalized = normalized.replace('/locations/', '/');
  }

  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  normalized = normalized.replace(/\/+$/, '') || '/';

  return { locale: detectedLocale, purePath: normalized };
};

export const buildLocalizedPath = (path: string, targetLocale?: Locale | string): string => {
  const activeLocales = getActiveLocales();
  const effectiveLocale: Locale = activeLocales.includes(targetLocale as Locale) ? (targetLocale as Locale) : 'en';
  
  const { purePath } = parsePathLocale(path);
  let clean = purePath.replace(/\/+$/, '') || '/';
  
  // Ensure clean path starts with /
  if (!clean.startsWith('/')) clean = '/' + clean;

  if (clean === '/') {
    return effectiveLocale === 'en' ? '/' : `/${effectiveLocale}/`;
  }

  if (effectiveLocale === 'en') {
    return clean;
  }
  
  // Localized path construction
  return `/${effectiveLocale}${clean}`;
};
