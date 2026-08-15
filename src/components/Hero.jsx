import { hero, business, contactCta } from "../data/siteData";
import "./Hero.css";
import logo from "../assets/logo.png";

import {
  Phone,
  MessageCircle,
  Flower2,
  Clock3,
  Sparkles,
  MapPin
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" aria-hidden="true" />

      <div className="container hero-inner">

        {/* ================= LEFT SIDE ================= */}
        <div className="hero-media">

          <div className="hero-logo-glow" />

          {/* Decorative flower */}
          {/* <Flower2
            className="hero-media-motif"
            strokeWidth={0.5}
            aria-hidden="true"
          /> */}

          {/* Gold circular frame */}
          <div className="hero-logo-ring">
            <div className="hero-logo-circle">
              <img
                src={logo}
                alt="Serenity Salon and Wellness Spa"
                className="hero-logo"
              />
            </div>
          </div>

          {/* Small floating business card */}
          <div className="hero-media-chip">
            <span className="hero-media-chip-title">
              {business.name}
            </span>

            <span className="hero-media-chip-sub">
              {business.tagline}
            </span>
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hero-copy">

          <span className="eyebrow eyebrow-light">
            {hero.subheading}
          </span>

          <h1 className="hero-heading">
            Go from Tired
            <br />
            to <em>Revitalized.</em>
          </h1>

          <p className="hero-desc">
            {hero.description}
          </p>

          <div className="hero-actions">

            <a
              className="btn btn-gold"
              href={contactCta.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              Book Your Spa Now
            </a>

            <a
              className="btn btn-outline-light"
              href={`tel:+91${business.phone}`}
            >
              <Phone size={17} />
              Call {business.phone}
            </a>

          </div>

          {/* Quick facts */}
          <div className="hero-quickfacts">

  <div className="hero-fact">
    <Clock3 className="hero-fact-icon" size={28} strokeWidth={1.5} />

    <div className="hero-fact-content">
      <span className="hero-quickfacts-num">
        10AM–9PM
      </span>

      <span className="hero-quickfacts-label">
        Open Daily
      </span>
    </div>
  </div>

  <div className="hero-quickfacts-divider" />

  <div className="hero-fact">
    <Sparkles className="hero-fact-icon" size={28} strokeWidth={1.5} />

    <div className="hero-fact-content">
      <span className="hero-quickfacts-num">
        6+
      </span>

      <span className="hero-quickfacts-label">
        Signature Therapies
      </span>
    </div>
  </div>

  <div className="hero-quickfacts-divider" />

  <div className="hero-fact">
    <MapPin className="hero-fact-icon" size={28} strokeWidth={1.5} />

    <div className="hero-fact-content">
      <span className="hero-quickfacts-num">
        Bilaspur
      </span>

      <span className="hero-quickfacts-label">
        Old Bus Stand
      </span>
    </div>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}