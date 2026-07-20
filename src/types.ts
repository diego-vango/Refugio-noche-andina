export interface Cabin {
  id: string;
  name: string;
  description: string;
  capacity: string;
  beds: string;
  pricePerNight: number;
  features: string[];
  mainImage: string;
  airbnbLink: string;
  bookingLink: string;
  secondaryDescription: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  image?: string;
}

export interface Constellation {
  id: string;
  name: string;
  spanishName: string;
  description: string;
  stars: string[];
  cx: number;
  cy: number;
  funFact: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  cabinName: string;
  avatarSeed: string;
  platform?: 'airbnb' | 'booking' | 'google' | 'direct';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'location' | 'amenities' | 'sustainability';
}
