import { Phone, MessageCircle, ImagePlus, Flower2 } from "lucide-react";
import { hero, business, contactCta } from "../data/siteData";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light">{hero.subheading}</span>
          <h1 className="hero-heading">
            Go from Tired
            <br />
            to <em>Revitalized.</em>
          </h1>
          <p className="hero-desc">{hero.description}</p>

          <div className="hero-actions">
            <a className="btn btn-gold" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              Book Your Spa Now
            </a>
            <a className="btn btn-outline-light" href={`tel:+91${business.phone}`}>
              <Phone size={16} />
              Call {business.phone}
            </a>
          </div>

          <div className="hero-quickfacts">
            <div>
              <span className="hero-quickfacts-num">10AM–9PM</span>
              <span className="hero-quickfacts-label">Open Daily</span>
            </div>
            <div className="hero-quickfacts-divider" />
            <div>
              <span className="hero-quickfacts-num">6+</span>
              <span className="hero-quickfacts-label">Signature Therapies</span>
            </div>
            <div className="hero-quickfacts-divider" />
            <div>
              <span className="hero-quickfacts-num">Bilaspur</span>
              <span className="hero-quickfacts-label">Old Bus Stand</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-frame">
            <Flower2 className="hero-media-motif" strokeWidth={0.5} aria-hidden="true" />
            <ImagePlus size={30} strokeWidth={1.3} />
            <p className="hero-media-title">Spa Photography</p>
            <p className="hero-media-sub">Add your interior / treatment photos here</p>
          </div>
          <div className="hero-media-chip">
            <span className="hero-media-chip-title">{business.name}</span>
            <span className="hero-media-chip-sub">{business.tagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}