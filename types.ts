
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'cafe' | 'reposteria' | 'brunch' | 'especiales';
}

export interface Recommendation {
  drink: string;
  pairing: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
