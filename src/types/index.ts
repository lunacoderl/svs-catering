export interface FoodItem {
  id: string;
  name: string;
  teluguName?: string;
  category: 'veg' | 'non-veg' | 'live' | 'sweets';
  description: string;
  image: string;
  tags: string[];
  spiceLevel?: 'Mild' | 'Medium' | 'Royal Spicy';
  isPopular?: boolean;
}

export interface OccasionItem {
  id: string;
  title: string;
  teluguTitle: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface MenuPackage {
  id: string;
  name: string;
  teluguName: string;
  badge: string;
  type: 'veg' | 'non-veg' | 'premium';
  suitability: string;
  highlight: string;
  courses: {
    welcome: string[];
    main: string[];
    riceAndBreads: string[];
    accompaniments: string[];
    desserts: string[];
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  event: string;
  date: string;
  quote: string;
  teluguQuote?: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
