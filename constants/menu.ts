export interface MenuItem {
    title: string;
    href: string;
};

export interface Profile {
    profile_url: string;
    name: string;
}

export interface OurBlogItem {
    cover: string;
    title: string;
    sub_title: string;
    details: string;
    user: Profile;
    post_date: Date;
}

export interface OurTestimonialItem {
  details: string;
  profile_url: string;
  name: string;
}

export const menuItems: MenuItem[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Team",
        href: "/team"
    },
    {
        title: "Process",
        href: "/process"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Blog",
        href: "/blog"
    }
];

export interface PlanItem {
  title: string;
  sub_title: string;
  details: string;
  price: number;
}

export const blogData: OurBlogItem[] = [
  {
    cover: "/covers/1.png",
    title: "Weight Loss",
    sub_title: "The Benefits of Hydration for Weight Loss",
    details: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    user: {
      profile_url: "/profiles/1.png",
      name: "Emily Johnson",
    },
    post_date: new Date("2026-08-01"),
  },
  {
    cover: "/covers/2.png",
    title: "Mindful Eating",
    sub_title: "Cultivating a Healthy Relationship with Food",
    details: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    user: {
      profile_url: "/profiles/2.png",
      name: "Sarah Thompson",
    },
    post_date: new Date("2026-07-28"),
  },
  {
    cover: "/covers/3.png",
    title: "Understanding Macronutrients",
    sub_title: "Carbohydrates, Proteins, and Fats",
    details: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    user: {
      profile_url: "/profiles/3.png",
      name: "Mark Wilson",
    },
    post_date: new Date("2026-07-24"),
  },
  {
    cover: "/covers/4.png",
    title: "Healthy Snacks on the Go",
    sub_title: "Quick and Nutritious Options",
    details: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    user: {
      profile_url: "/profiles/4.png",
      name: "Emily Johnson",
    },
    post_date: new Date("2026-07-20"),
  },
];

export const testimonials: OurTestimonialItem[] = [
  {
    details:
      "The personalized nutrition plan has completely changed the way I think about food. I feel healthier and more energetic every day.",
    profile_url: "/profiles/1.png",
    name: "Sarah Johnson",
  },
  {
    details:
      "I love how simple and practical the recommendations are. It was easy to follow and fit perfectly into my daily routine.",
    profile_url: "/profiles/2.png",
    name: "Michael Carter",
  },
  {
    details:
      "The guidance helped me build better eating habits without feeling restricted. I have noticed a big improvement in my lifestyle.",
    profile_url: "/profiles/3.png",
    name: "Emily Davis",
  },
  {
    details:
      "Everything was explained clearly, and the nutrition advice was easy to understand. I would definitely recommend it to others.",
    profile_url: "/profiles/4.png",
    name: "Daniel Wilson",
  },
  {
    details:
      "I finally found a healthy eating plan that works for my lifestyle. The results have been amazing, and I feel much more confident.",
    profile_url: "/profiles/1.png",
    name: "Olivia Brown",
  },
  {
    details:
      "The personalized recommendations made healthy eating feel much easier. I now have more energy throughout the day.",
    profile_url: "/profiles/2.png",
    name: "James Miller",
  },
  {
    details:
      "I really enjoyed the experience. The advice was realistic, flexible, and easy to apply to my everyday meals.",
    profile_url: "/profiles/3.png",
    name: "Sophia Anderson",
  },
  {
    details:
      "The nutrition guidance helped me understand what my body really needs. I have developed healthier habits that I can maintain.",
    profile_url: "/profiles/4.png",
    name: "William Taylor",
  },
  {
    details:
      "A great experience from start to finish. The recommendations were personalized and helped me make better food choices.",
    profile_url: "/profiles/1.png",
    name: "Ava Martinez",
  },
  {
    details:
      "I appreciate how easy the program is to follow. Small changes in my diet have made a noticeable difference in how I feel.",
    profile_url: "/profiles/2.png",
    name: "Benjamin Thomas",
  },
];

export const planItems: PlanItem[] = [
  {
    title: "Basic Plan",
    sub_title: "Up to 50% off on Yearly Plan",
    details: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
    price: 49
  },
  {
    title: "Premium Plan",
    sub_title: "Up to 50% off on Yearly Plan",
    details: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
    price: 77
  },
  {
    title: "Ultimate Plan",
    sub_title: "Up to 50% off on Yearly Plan",
    details: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
    price: 99
  }
]