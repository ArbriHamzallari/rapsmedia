import { PromotionPackage } from "../types";

export const promotionPackages: PromotionPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    features: [
      "1 post + tag",
      "24h feature",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 89,
    features: [
      "Post + story + link",
      "24h feature",
      "Results snapshot included",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 129,
    features: [
      "Reel + story",
      "Priority slot",
      "Results snapshot included",
    ],
  },
];

export const addOns = [
  {
    id: "reel-edit",
    name: "Reel Edit",
    price: 25,
    description: "Professional reel editing service",
  },
  {
    id: "analytics-snapshot",
    name: "Analytics Snapshot",
    price: 10,
    description: "Detailed performance analytics and insights",
  },
  {
    id: "featured-spotlight",
    name: "Featured Artist Spotlight",
    price: 30,
    description: "Featured artist spotlight placement",
  },
];

