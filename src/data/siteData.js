// siteData.js
// Centralized content for Serenity Salon and Wellness Spa website
// NOTE: Service pricing below is sourced from the "SAPASHA" Thai Spa menu the client shared.
// That menu header lists a Raigarh address/contact — please confirm with the client whether
// these exact services/prices apply to the Bilaspur branch before publishing.

export const business = {
  name: "Serenity Salon and Wellness Spa",
  tagline: "The Luxury Spa Lounge",
  address: "Old Bus Stand, Near Surya Hotel, Axis Bank, Bilaspur, Chhattisgarh",
  phone: "7222966868",
  whatsapp: "7222966868",
  email: "serenitywellnessspa10@gmail.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61588152586812",
    instagram: "", // TODO: confirm client's Instagram handle/link
    justdial: "", // TODO: confirm Justdial listing link
  },
  mapsUrl: "https://maps.app.goo.gl/PQUYQ3uHAxxernwo9",
};

export const hero = {
  heading: "Serenity Salon and Wellness Spa",
  subheading: business.tagline,
  description:
    "Step into a luxury salon and wellness retreat in the heart of Bilaspur, offering premium hair, skin, and spa therapies in a calm, elegant setting.",
};

export const gallery = [
  {
    id: "reception",
    title: "Reception & Lobby",
    category: "Interiors",
    image: "/assets/gallery/reception-counter.jpg", // sourced from client-provided photo
    alt: "Marble reception counter with backlit Serenity logo",
  },
  {
    id: "waiting-area",
    title: "Waiting Lounge",
    category: "Interiors",
    image: "/assets/gallery/waiting-lounge.jpg", // sourced from client-provided photo
    alt: "Teal velvet seating in the salon waiting area",
  },
  {
    id: "treatment-room",
    title: "Massage Treatment Room",
    category: "Interiors",
    image: "/assets/gallery/treatment-room.jpg",
    alt: "Private, dimly lit massage treatment room",
  },
  {
    id: "jacuzzi-suite",
    title: "Jacuzzi Suite",
    category: "Interiors",
    image: "/assets/gallery/jacuzzi-suite.jpg",
    alt: "Warm-lit jacuzzi suite",
  },
  {
    id: "aroma-therapy",
    title: "Aroma Therapy in Session",
    category: "Therapies",
    image: "/assets/gallery/aroma-therapy.jpg",
    alt: "Aroma oils and towels set up for a therapy session",
  },
  {
    id: "body-polishing",
    title: "Body Polishing Ritual",
    category: "Therapies",
    image: "/assets/gallery/body-polishing.jpg",
    alt: "Body polishing scrub ritual setup",
  },
  {
    id: "thai-massage",
    title: "Traditional Thai Massage",
    category: "Therapies",
    image: "/assets/gallery/thai-massage.jpg",
    alt: "Traditional Thai massage in progress",
  },
  {
    id: "storefront",
    title: "Storefront, Old Bus Stand",
    category: "Exteriors",
    image: "/assets/gallery/storefront.jpg",
    alt: "Serenity Salon and Wellness Spa storefront in Bilaspur",
  },
  // TODO: swap these elegant placeholder cards for real client photos —
  // drop files into public/assets/gallery/ using the image paths above.
];

// Services grouped by category, with duration-based pricing (in INR)
export const services = [
  {
    category: "Massage Therapies",
    items: [
      {
        name: "Traditional Thai Massage",
        description:
          "A traditional Thai massage influenced by yoga and traditional South East Asian medicine; a dry therapy that releases overall stress and blocked energy.",
        pricing: [
          { duration: "60 Minutes", price: 2500 },
          { duration: "90 Minutes", price: 3700 },
          { duration: "120 Minutes", price: 4800 },
        ],
      },
      {
        name: "Aroma Therapy (Relaxation)",
        description:
          "An aromatic massage using essential aroma oils with gentle pressure to relax the entire body and mind.",
        pricing: [
          { duration: "60 Minutes", price: 2600 },
          { duration: "90 Minutes", price: 3900 },
          { duration: "120 Minutes", price: 5000 },
        ],
      },
      {
        name: "Swedish Massage",
        description:
          "A circular-pressure massage technique that releases lactic acid from tissue, includes tapping and stretching to improve flexibility and release body pain.",
        pricing: [
          { duration: "60 Minutes", price: 2700 },
          { duration: "90 Minutes", price: 3900 },
          { duration: "120 Minutes", price: 5000 },
        ],
      },
      {
        name: "Balinese Massage",
        description:
          "Includes gentle stretch, acupressure, reflexology, and aroma therapy to stimulate blood flow, oxygen, and energy for wellness and calm.",
        pricing: [
          { duration: "60 Minutes", price: 2800 },
          { duration: "90 Minutes", price: 4000 },
          { duration: "120 Minutes", price: 5200 },
        ],
      },
      {
        name: "Deep Tissue (Muscle Pain Relief)",
        description:
          "An aroma oil massage with direct deep pressure on muscle tissues to relieve pain caused by tiredness and fatigue.",
        pricing: [
          { duration: "60 Minutes", price: 2900 },
          { duration: "90 Minutes", price: 4100 },
          { duration: "120 Minutes", price: 5200 },
        ],
      },
      {
        name: "Spasha Signature Body Massage",
        description:
          "A unique signature therapy for complete relaxation — stretching, acupressure, gentle palm pressure, and detoxification.",
        pricing: [
          { duration: "60 Minutes", price: 3000 },
          { duration: "90 Minutes", price: 4200 },
          { duration: "120 Minutes", price: 5600 },
        ],
      },
    ],
  },
  {
    category: "Body Care",
    items: [
      {
        name: "Body Polishing",
        description: "Removes body tan and dead skin.",
        pricing: [{ duration: "60 Minutes", price: 3000 }],
      },
      {
        name: "Body Polishing with Massage",
        description: "30-minute body scrub followed by a 90-minute aroma body massage.",
        pricing: [{ duration: "90 Minutes", price: 4500 }],
      },
      {
        name: "Luxury Body Care",
        description: "Includes body scrub, massage, body pack, and moisturizer.",
        pricing: [{ duration: "120 Minutes", price: 7000 }],
      },
    ],
  },
  {
    category: "Jacuzzi",
    items: [
      {
        name: "Jacuzzi Luxury",
        description: "Luxury jacuzzi session.", // TODO: confirm exact duration-to-price mapping with client
        pricing: [
          { duration: "Session", price: 8000 },
          { duration: "Session (extended)", price: 14000 },
        ],
      },
    ],
  },
];

// Content for the dedicated About Us page
export const about = {
  eyebrow: "Our Story",
  heading: "A Quiet Corner of Bilaspur, Built for Calm",
  intro:
    "Serenity Salon and Wellness Spa was founded on a simple idea: that everyone deserves a space to slow down. Tucked near the Old Bus Stand, our lounge blends traditional therapies with a calm, contemporary setting so you can step away from the noise of daily life, even if only for an hour.",
  story: [
    "We started Serenity because Bilaspur didn't have a wellness space that felt both premium and personal. Every therapy on our menu — from Traditional Thai to our Signature Spasha massage — is chosen because it works, not because it's trendy.",
    "Our therapists are trained in classical and contemporary techniques, and every room is kept quiet, warm, and unhurried, so your session is never rushed.",
  ],
  mission:
    "To make thoughtful, therapeutic self-care accessible in Bilaspur — one calm, unhurried session at a time.",
  values: [
    {
      title: "Trained Hands",
      description:
        "Every therapist is trained in classical and contemporary technique, so pressure, pacing and posture are always right.",
      icon: "badge",
    },
    {
      title: "Hygiene First",
      description:
        "Linens, tools and treatment rooms are reset and sanitised between every single guest.",
      icon: "sparkle",
    },
    {
      title: "Premium Ingredients",
      description:
        "We use researched aroma oils and body-care products chosen for therapeutic effect, not just fragrance.",
      icon: "droplet",
    },
    {
      title: "Unhurried Pace",
      description:
        "Rooms are quiet and sessions are never rushed — your hour is fully yours.",
      icon: "leaf",
    },
  ],
};

export const contactCta = {
  heading: "Book Your Appointment",
  description: "Call or WhatsApp us to reserve your slot at Serenity Salon and Wellness Spa, Bilaspur.",
  phone: business.phone,
  whatsappLink: `https://wa.me/91${business.whatsapp}`,
  mapsUrl: business.mapsUrl,
};

// Trust / feature strip shown under the hero
export const trustStrip = [
  { label: "Prime Bilaspur Location", icon: "map-pin" },
  { label: "Certified Therapists", icon: "badge" },
  { label: "Commitment to Hygiene", icon: "sparkle" },
  { label: "Premium Aroma Oils", icon: "droplet" },
  { label: "Quality Products", icon: "leaf" },
  { label: "Researched Therapies", icon: "book" },
];

// Short descriptions for the "category" tiles shown on the home page
export const categoryBlurbs = {
  "Massage Therapies": "Traditional Thai, Swedish, Balinese and more — pick your pressure and your calm.",
  "Body Care": "Scrubs, polishing and full-body rituals that leave skin renewed.",
  Jacuzzi: "Warm-water sessions to ease muscles before or after your therapy.",
};
