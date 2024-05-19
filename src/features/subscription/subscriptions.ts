import { ISubscription } from "@/shared/api/definitions";

export const monthlySubscriptions: ISubscription[] = [
  {
    title: "Basic Subscription",
    description: [
      "Access to exclusive content based on interests (e.g., cooking, fitness, travel).",
      "Ability to download videos for offline viewing.",
      "Additional features like participation in exclusive communities and forums.",
    ],
    price: "15",
  },
  {
    title: "Hobbyist Subscription",
    description: [
      "Exclusive content for hobbyists like cooking, fitness, and travel.",
      "Ability to download videos for offline viewing.",
      "Participation in exclusive hobbyist communities and forums.",
    ],
    price: "25",
  },
  {
    title: "Developer Subscription",
    description: [
      "Educational videos and courses on programming and development.",
      "Special workshops and webinars with industry experts.",
      "Access to source code projects and developer tools.",
    ],
    price: "30",
  },
];

export const yearlySubscriptions: ISubscription[] = [
  {
    title: "Basic Subscription",
    description: [
      "Access to exclusive content based on interests (e.g., cooking, fitness, travel).",
      "Ability to download videos for offline viewing.",
      "Additional features like participation in exclusive communities and forums.",
    ],
    price: "150",
  },
  {
    title: "Hobbyist Subscription",
    description: [
      "Exclusive content for hobbyists like cooking, fitness, and travel.",
      "Ability to download videos for offline viewing.",
      "Participation in exclusive hobbyist communities and forums.",
    ],
    price: "250",
  },
  {
    title: "Developer Subscription",
    description: [
      "Educational videos and courses on programming and development.",
      "Special workshops and webinars with industry experts.",
      "Access to source code projects and developer tools.",
    ],
    price: "300",
  },
];
