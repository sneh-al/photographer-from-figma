import Project1 from "@assets/images/Imageproject1.png";
import Project2 from "@assets/images/Imageproject2.png";
import Project3 from "@assets/images/Imageproject3.png";

export const siteConfig = {
  siteName: "DAMIEN",
  navLinks: [
    {
      id: 1,
      name: "Home",
      href: "/",
    },

    {
      id: 2,
      name: "About Me",
      href: "/aboutme",
    },
    {
      id: 3,
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 4,
      name: "Services",
      href: "/services",
    },

    {
      id: 5,
      name: "Contact Me",
      href: "/contactme",
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Faces of Resilience",
    time: "March 2022",
    image: Project1,
  },
  {
    id: 2,
    name: "A Wedding Tale",
    time: "January 2020",
    image: Project2,
  },
  {
    id: 3,
    name: "Product Elegance",
    time: "January 2020",
    image: Project3,
  },
];

export const faqs = [
  {
    id: 10,
    q: "What type of photography do you specialize in?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 11,

    q: "How can I book a photography session with you?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 12,

    q: "What equipment do you use for your photography?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 13,

    q: "Can I request a specific location for a ",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 14,

    q: "What is your editing process like?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 15,

    q: "Are digital files included in your photography packages?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 16,

    q: "Do you offer prints of your photographs?",
    a: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
  },
  {
    id: 17,

    q: "How long does it take to receive the edited photos after a session?",
    a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
];

export const reviews = [
  {
    name: "Emily Johnson",
    city: "USA, California",
    star: 5,
    info: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    name: "John Smith",
    city: "USA, California",
    star: 5,
    info: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
  },
  {
    name: "Samantha Davis",
    city: "USA, California",
    star: 5,
    info: "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories.",
  },
];

export const timeline = [
  {
    year: "Year - 2005",
    info: "In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.",
  },
  {
    year: "Year - 2010",
    info: "Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities.",
  },
  {
    year: "Year - 2012",
    info: "In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.",
  },
  {
    year: "Year - 2015",
    info: "Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.",
  },
  {
    year: "Year - 2017",
    info: "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world.",
  },
  {
    year: "Year - 2020",
    info: "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer.",
  },
];

export const services = [
  {
    name: "Portrait Photography",
    info: "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
    types: [
      {
        name: "Individual Session",
        fees: 250,
        outline: [
          "Ideal for capturing your unique personality and style.",
          "Includes a 2-hour photoshoot and 20 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
      {
        name: "Family Session",
        fees: 400,
        outline: [
          "Perfect for creating lasting memories with your loved ones.",
          "Includes a 3-hour photoshoot and 30 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
      {
        name: "Couple Session",
        fees: 300,
        outline: [
          "Celebrate your love story with an intimate photoshoot.",
          "Includes a 2.5-hour photoshoot and 25 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
    ],
  },
  {
    name: "Events Photography",
    info: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
    types: [
      {
        name: "Wedding Photography",
        fees: 1500,
        outline: [
          "Capture the magic of your special day.",
          "Includes full-day coverage, a second photographer, and 300+ professionally edited images.",
          "Customizable packages are available to suit your specific wedding needs.",
        ],
      },
      {
        name: "Party Coverage",
        fees: 800,
        outline: [
          "Preserve the fun and excitement of your event.",
          "Includes up to 4 hours of coverage and 150+ professionally edited images.",
          "Additional hours can be added at $150 per hour.",
        ],
      },
      {
        name: "Corporate Events",
        fees: "Custome Pricing",
        outline: [
          "Tailored solutions for corporate gatherings, conferences, and seminars.",
          "Includes a 2.5-hour photoshoot and 25 professionally edited images.",
          "Contact us for a personalized quote based on your event's requirements.",
        ],
      },
    ],
  },
  {
    name: "Commercial Photography",
    info: "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
    types: [
      {
        name: "Product Photography",
        fees: 500,
        outline: [
          "Showcase your products in the best light.",
          "Includes a half-day photoshoot, 20 professionally edited product images, and high-resolution files.",
          "Additional images can be purchased at $20 each.",
        ],
      },
      {
        name: "Real Estate Photography",
        fees: 700,
        outline: [
          "Highlight the beauty of your properties.",
          "Includes interior and exterior shots, a 2-hour photoshoot, and 25 professionally edited images.",
          "Additional images can be purchased at $20 each.",
        ],
      },
      {
        name: "Brand Photography",
        fees: "Custome Pricing",
        outline: [
          "Craft a visual narrative that aligns with your brand identity.",
          "Contact us to discuss your brand photography needs and receive a personalized quote.",
        ],
      },
    ],
  },
];
