import { ClientConcern } from '../types';

export const clientConcerns: ClientConcern[] = [
  {
    id: 'marriage',
    category: 'Marriage',
    icon: 'HeartHandshake',
    title: 'Marriage & Kundali Matching',
    description: 'Traditional horoscope and compatibility guidance for people considering marriage.',
    ctaText: 'Marriage Astrology',
    targetSlug: 'marriage-astrology',
    commonQuestions: [
      "I'm considering marriage.",
      "I want Kundali matching for a proposal.",
      "I have questions about delay in marriage.",
      "I want to check compatibility between two charts."
    ]
  },
  {
    id: 'love',
    category: 'Love',
    icon: 'Heart',
    title: 'Love & Relationship Guidance',
    description: 'Traditional horoscope-based guidance for relationship and compatibility questions.',
    ctaText: 'Relationship Astrology',
    targetSlug: 'love-astrology',
    commonQuestions: [
      "I have questions about my relationship.",
      "I want to understand our mutual emotional compatibility.",
      "I am wondering about family acceptance."
    ]
  },
  {
    id: 'career',
    category: 'Career',
    icon: 'Briefcase',
    title: 'Career & Job Guidance',
    description: 'Traditional astrology guidance for career direction, professional decisions and job-related questions.',
    ctaText: 'Career Astrology',
    targetSlug: 'career-astrology',
    commonQuestions: [
      "I'm unsure about my career direction.",
      "I'm considering a job change or transfer.",
      "I want to know favorable periods for career growth."
    ]
  },
  {
    id: 'business',
    category: 'Business',
    icon: 'Building2',
    title: 'Business & Professional Decisions',
    description: 'Traditional Jyotish guidance relating to business direction, partnerships and timing.',
    ctaText: 'Business Astrology',
    targetSlug: 'business-astrology',
    commonQuestions: [
      "I'm starting a new business.",
      "I want partner compatibility guidance.",
      "I need auspicious timing for launching my enterprise."
    ]
  },
  {
    id: 'horoscope',
    category: 'Horoscope',
    icon: 'Compass',
    title: 'Understand Your Horoscope',
    description: 'Personalized interpretation of Janma Kundali, Rashi, Nakshatra and other traditional birth-chart factors.',
    ctaText: 'Horoscope Consultation',
    targetSlug: 'horoscope',
    commonQuestions: [
      "I want to understand my complete horoscope.",
      "What is my Lagna, Rashi, and active Dasha?",
      "I want an overview of my life chapters."
    ]
  },
  {
    id: 'family',
    category: 'Family',
    icon: 'Home',
    title: 'Family & Personal Life',
    description: 'Traditional astrology guidance for important family and personal situations.',
    ctaText: 'Family Astrology',
    targetSlug: 'family-astrology',
    commonQuestions: [
      "I have important family decisions to make.",
      "I want guidance on domestic harmony.",
      "We are planning family property transitions."
    ]
  },
  {
    id: 'education',
    category: 'Education',
    icon: 'GraduationCap',
    title: 'Education & Student Guidance',
    description: 'Traditional horoscope-based guidance relating to education and learning.',
    ctaText: 'Education Astrology',
    targetSlug: 'education-astrology',
    commonQuestions: [
      "We are choosing an academic stream for our child.",
      "I'm preparing for higher studies or competitive exams.",
      "I want to understand academic strengths in the chart."
    ]
  },
  {
    id: 'muhurtham',
    category: 'Muhurtham',
    icon: 'Clock',
    title: 'Auspicious Time Consultation',
    description: 'Traditional Muhurtham guidance for important occasions and beginnings.',
    ctaText: 'Muhurtham',
    targetSlug: 'muhurtham',
    commonQuestions: [
      "I need an auspicious time for our wedding.",
      "I need a Griha Pravesh (Housewarming) date.",
      "I need a Sumuhurtham for a business opening or ceremony."
    ]
  },
  {
    id: 'numerology',
    category: 'Numerology',
    icon: 'Hash',
    title: 'Numerology',
    description: 'Traditional numerological interpretation based on relevant birth-date or name information.',
    ctaText: 'Numerology',
    targetSlug: 'numerology',
    commonQuestions: [
      "I want an auspicious name for a newborn baby.",
      "I want to evaluate my name vibration or business name.",
      "I want to understand my Destiny and Life Path numbers."
    ]
  },
  {
    id: 'dosha',
    category: 'Traditional Dosha',
    icon: 'ShieldAlert',
    title: 'Dosha Analysis',
    description: 'Objective, calm analysis of Kuja, Rahu, or Ketu configurations with classical cancellations.',
    ctaText: 'Dosha Analysis',
    targetSlug: 'dosha-analysis',
    commonQuestions: [
      "I want to understand a traditional Dosha.",
      "I want to verify if Kuja Dosha applies to my chart.",
      "I need an ethical, fear-free explanation."
    ]
  }
];

export const clientQuestionsList = [
  { question: "I'm considering marriage.", slug: "marriage-astrology" },
  { question: "I want Kundali matching.", slug: "kundali-matching" },
  { question: "I have questions about my relationship.", slug: "love-astrology" },
  { question: "I'm unsure about my career direction.", slug: "career-astrology" },
  { question: "I'm considering a job change.", slug: "career-astrology" },
  { question: "I'm starting a business.", slug: "business-astrology" },
  { question: "I want to understand my horoscope.", slug: "horoscope" },
  { question: "I need an auspicious time for an important event.", slug: "muhurtham" },
  { question: "I want to understand a traditional Dosha.", slug: "dosha-analysis" },
  { question: "I want numerology guidance.", slug: "numerology" },
  { question: "I have another personal question.", slug: "contact" }
];
