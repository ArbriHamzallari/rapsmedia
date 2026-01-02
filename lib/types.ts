export type Category =
  | "music"
  | "news"
  | "interviews"
  | "rising-stars"
  | "culture"
  | "lifestyle"
  | "entertainment"
  | "sports"
  | "power-rankings";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  coverImage: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  contentSections: ContentSection[];
  featured?: boolean;
  trending?: boolean;
  views?: number;
}

export interface ContentSection {
  type: "heading" | "paragraph" | "image" | "instagram" | "quote";
  content?: string;
  imageUrl?: string;
  instagramUrl?: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  instagram: string;
  genre: string;
  city: string;
  monthlyListeners: number;
  verified: boolean;
  rankPoints: number;
  movement?: "up" | "down" | "new" | null;
  previousRank?: number;
}

export interface Ranking {
  month: string;
  year: number;
  artists: Artist[];
}

export interface PromotionPackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

