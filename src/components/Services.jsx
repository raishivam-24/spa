import { Clock, MessageCircle, Sparkles, Droplets, Waves } from "lucide-react";
import { services, business } from "../data/siteData";
import "./Services.css";

const CATEGORY_ICON = {
  "Massage Therapies": Sparkles,
  "Body Care": Droplets,
  Jacuzzi: Waves,
};

// Rotating gradient tones so each card's "photo" area feels distinct
const CARD_TONES = [
  "linear-gradient(155deg, #8a5a34, #3a2417)",
  "linear-gradient(155deg, #6b4429, #2a1a12)",
  "linear-gradient(155deg, #b08b57, #4d301f)",
  "linear-gradient(155deg, #4d301f, #1f130d)",
  "linear-gradient(155deg, #9c7231, #3a2417)",
  "linear-gradient(155deg, #6b4429, #4d301f)",
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function whatsappBookingLink(itemName) {
  const message = `Hi Serenity Salon and Wellness Spa, I'd like to book ${itemName}.`;
  return `https://wa.me/91${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-heading">
          <span className="eyebrow">Wellness Therapies</span>
          <h2 className="services-title">Services That Transform</h2>
          <p className="services-sub">
            Every therapy at Serenity is performed by trained hands, with premium oils and a
            quiet room built for one purpose — your calm.
          </p>
        </div>

        {services.map((group) => {
          const CategoryIcon = CATEGORY_ICON[group.category] ?? Sparkles;
          return (
            <div className="services-group" id={slugify(group.category)} key={group.category}>
              <h3 className="services-group-title">
                <CategoryIcon size={20} strokeWidth={1.5} />
                {group.category}
              </h3>

              <div className="services-grid">
                {group.items.map((item, i) => (
                  <div className="service-card" key={item.name}>
                    <div
                      className="service-card-photo"
                      style={{ background: CARD_TONES[i % CARD_TONES.length] }}
                    >
                      <span className="service-card-photo-tag">
                        From ₹{item.pricing[0].price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="service-card-body">
                      <h4 className="service-card-name">{item.name}</h4>
                      <p className="service-card-desc">{item.description}</p>

                      <div className="service-card-pricing">
                        {item.pricing.map((tier) => (
                          <span className="service-price-chip" key={tier.duration}>
                            <Clock size={11} strokeWidth={2} />
                            {tier.duration} · ₹{tier.price.toLocaleString("en-IN")}
                          </span>
                        ))}
                      </div>

                      <a
                        className="btn btn-dark service-card-cta"
                        href={whatsappBookingLink(item.name)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={15} />
                        Book Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
