import { PromotionPackage } from "../types";

export const promotionPackages: PromotionPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    features: [
      "Social media post (Instagram + X/Twitter)",
      "Featured in weekly newsletter",
      "Article mention (100 words)",
      "Basic analytics report",
      "7-day promotion period",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 299,
    features: [
      "Everything in Starter",
      "Dedicated article (500 words)",
      "Featured story placement",
      "Social media campaign (3 posts)",
      "Power Rankings consideration",
      "30-day promotion period",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 799,
    features: [
      "Everything in Growth",
      "Exclusive interview feature",
      "Homepage featured placement",
      "Social media campaign (10 posts)",
      "Guaranteed Power Rankings inclusion",
      "Video content creation",
      "90-day promotion period",
      "Dedicated account manager",
      "Custom promotion strategy",
    ],
  },
];

export const addOns = [
  {
    id: "video",
    name: "Video Content",
    price: 199,
    description: "Professional video content for social media",
  },
  {
    id: "playlist",
    name: "Playlist Placement",
    price: 149,
    description: "Featured in curated Spotify/Apple Music playlists",
  },
  {
    id: "interview",
    name: "Exclusive Interview",
    price: 399,
    description: "In-depth interview feature article",
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    price: 99,
    description: "Detailed performance analytics and insights",
  },
];

