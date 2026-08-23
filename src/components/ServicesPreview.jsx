import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { services } from "../data/siteData";
import MenuActions from "./MenuActions";
import "./Services.css";
import "./ServicesPreview.css";

import traditionalThaiMassage from "../assets/services/traditional-thai-massage.png";
import bodyCare from "../assets/services/luxury-body-care.png";
import jacuzzi from "../assets/services/jacuzzi.png";

// One representative image per category
const IMAGES = {
  "Massage Therapies": traditionalThaiMassage,
  "Body Care": bodyCare,
  "Jacuzzi": jacuzzi,
};

export default function ServicesPreview() {
  const featured = services.map((group) => ({
    group: group.category,
    item: group.items[0],
  }));

  return (
    <section className="services services-preview">
      <div className="container">

        <div className="services-heading">
          <span className="eyebrow">
            Wellness Therapies
          </span>

          <h2 className="services-title">
            Services That Transform
          </h2>

          <p className="services-sub">
            A taste of the menu — massage therapies, body care and
            jacuzzi sessions, every one performed by trained hands
            in a quiet room built for your calm.
          </p>
        </div>

        <div className="services-grid">

          {featured.map(({ group, item }) => (

            <div
              className="service-card"
              key={item.name}
            >

              {/* IMAGE */}
              <div className="service-card-image">
                <img
                  src={IMAGES[group]}
                  alt={item.name}
                />
              </div>

              {/* CONTENT */}
              <div className="service-card-body">

                <h4 className="service-card-name">
                  {item.name}
                </h4>

                <p className="service-card-desc">
                  {item.description}
                </p>

                <div className="service-card-pricing">

                  <span className="service-price-chip">
                    <Clock
                      size={11}
                      strokeWidth={2}
                    />

                    From {item.pricing[0].duration}
                    {" · "}
                    ₹{item.pricing[0].price.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="services-preview-cta">
          <Link
            className="btn btn-gold"
            to="/services"
          >
            View Full Menu &amp; Pricing
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}