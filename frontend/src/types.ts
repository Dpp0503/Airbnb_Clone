export interface Review {
  authorName: string;
  date: string;
  rating: number;
  reviewText: string;
}

export interface Metrics {
  overallRating: number;
  totalReviews: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface CoHost {
  name: string;
  avatarUrl: string;
}

export interface HostDetails {
  name: string;
  avatarUrl: string;
  yearsHosting: number;
  totalReviews: number;
  rating: number;
  responseRate: number;
  responseTime: string;
  coHosts: CoHost[];
}

export interface PropertyDetails {
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export interface Highlight {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Pricing {
  basePrice: number;
  currency: string;
  nights: number;
}

export interface Rule {
  title: string;
  description: string;
}

export interface SleepSpace {
  title: string;
  description: string;
  imageUrl: string;
}

export interface PhotoCategory {
  title: string;
  imageUrls: string[];
}

export interface ListingDTO {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  propertyDetails: PropertyDetails;
  hostDetails: HostDetails;
  highlights: Highlight[];
  description: string;
  photoTour: PhotoCategory[];
  sleepSpaces: SleepSpace[];
  amenities: string[];
  reviews: Review[];
  metrics: Metrics;
  cancellationPolicy: Rule[];
  houseRules: Rule[];
  safetyAndProperty: Rule[];
  pricing: Pricing;
}
