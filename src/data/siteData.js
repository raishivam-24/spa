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
  mapsUrl: "https://maps.app.goo.gl/jJ7fQaMons64zAXF6",
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
    image: "/assets/gallery/reception-counter.jpg", // sourced from client-provided photo
    alt: "Marble reception counter with backlit Serenity logo",
  },
  {
    id: "waiting-area",
    title: "Waiting Lounge",
    image: "/assets/gallery/waiting-lounge.jpg", // sourced from client-provided photo
    alt: "Teal velvet seating in the salon waiting area",
  },
  // TODO: add more interior/exterior/treatment photos once client shares them
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
  { label: "Quiet, Elegant Setting", icon: "leaf" },
  { label: "Researched Therapies", icon: "book" },
];

// Short descriptions for the "category" tiles shown on the home page
export const categoryBlurbs = {
  "Massage Therapies": "Traditional Thai, Swedish, Balinese and more — pick your pressure and your calm.",
  "Body Care": "Scrubs, polishing and full-body rituals that leave skin renewed.",
  Jacuzzi: "Warm-water sessions to ease muscles before or after your therapy.",
};
