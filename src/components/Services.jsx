import {
  Clock,
  MessageCircle,
  Sparkles,
  Droplets,
  Waves,
} from "lucide-react";

import { services, business } from "../data/siteData";
import "./Services.css";

// ================================
// SERVICE IMAGES
// ================================

import traditionalThaiMassage from "../assets/services/traditional-thai-massage.png";
import aromaTherapy from "../assets/services/aroma-therapy.png";
import swedishMassage from "../assets/services/swedish-massage.png";
import balineseMassage from "../assets/services/balinese-massage.png";
import deepTissueMassage from "../assets/services/deep-tissue-massage.png";
import spashaSignatureMassage from "../assets/services/spasha-signature-massage.png";

import bodyPolishing from "../assets/services/body-polishing.png";
import bodyPolishingMassage from "../assets/services/body-polishing-massage.png";
import luxuryBodyCare from "../assets/services/luxury-body-care.png";

import jacuzzi from "../assets/services/jacuzzi.png";


// ================================
// IMAGE MAP
// ================================

const SERVICE_IMAGES = {
  "Traditional Thai Massage": traditionalThaiMassage,
  "Aroma Therapy (Relaxation)": aromaTherapy,
  "Swedish Massage": swedishMassage,
  "Balinese Massage": balineseMassage,
  "Deep Tissue (Muscle Pain Relief)": deepTissueMassage,
  "Spasha Signature Body Massage": spashaSignatureMassage,

  "Body Polishing": bodyPolishing,
  "Body Polishing with Massage": bodyPolishingMassage,
  "Luxury Body Care": luxuryBodyCare,

  "Jacuzzi Luxury": jacuzzi,
};


// ================================
// CATEGORY ICONS
// ================================

const CATEGORY_ICON = {
  "Massage Therapies": Sparkles,
  "Body Care": Droplets,
  Jacuzzi: Waves,
};


// ================================
// SLUGIFY
// ================================

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}


// ================================
// WHATSAPP
// ================================

function whatsappBookingLink(itemName) {
  const message =
    `Hi Serenity Salon and Wellness Spa, I'd like to book ${itemName}.`;

  return `https://wa.me/91${business.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}


// ================================
// SERVICES COMPONENT
// ================================

export default function Services() {
  return (
    <section className="services" id="services">

      <div className="container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="services-heading">

          <span className="eyebrow">
            Wellness Therapies
          </span>

          <h2 className="services-title">
            Services That Transform
          </h2>

          <p className="services-sub">
            Every therapy at Serenity is performed by trained
            hands, with premium oils and a quiet room built
            for one purpose — your calm.
          </p>

        </div>


        {/* ================================
            SERVICE GROUPS
        ================================= */}

        {services.map((group) => {

          const CategoryIcon =
            CATEGORY_ICON[group.category] ?? Sparkles;

          return (
            <div
              className="services-group"
              id={slugify(group.category)}
              key={group.category}
            >

              {/* CATEGORY TITLE */}

              <h3 className="services-group-title">

                <CategoryIcon
                  size={20}
                  strokeWidth={1.5}
                />

                {group.category}

              </h3>


              {/* SERVICE GRID */}

              <div className="services-grid">

                {group.items.map((item) => {

                  const serviceImage =
                    SERVICE_IMAGES[item.name];

                  return (
                    <div
                      className="service-card"
                      key={item.name}
                    >

                      {/* ==========================
                          IMAGE
                      =========================== */}

                      <div className="service-card-photo">

                        {serviceImage && (
                          <img
                            src={serviceImage}
                            alt={item.name}
                            className="service-card-image"
                          />
                        )}

                        <div className="service-card-photo-overlay" />

                        <span className="service-card-photo-tag">

                          From ₹
                          {item.pricing[0].price.toLocaleString(
                            "en-IN"
                          )}

                        </span>

                      </div>


                      {/* ==========================
                          BODY
                      =========================== */}

                      <div className="service-card-body">

                        <h4 className="service-card-name">
                          {item.name}
                        </h4>

                        <p className="service-card-desc">
                          {item.description}
                        </p>


                        {/* PRICING */}

                        <div className="service-card-pricing">

                          {item.pricing.map((tier) => (

                            <span
                              className="service-price-chip"
                              key={tier.duration}
                            >

                              <Clock
                                size={11}
                                strokeWidth={2}
                              />

                              {tier.duration}
                              {" · "}
                              ₹
                              {tier.price.toLocaleString(
                                "en-IN"
                              )}

                            </span>

                          ))}

                        </div>


                        {/* BOOK BUTTON */}

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
                  );

                })}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}