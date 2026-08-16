import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from "lucide-react";
import { business, contactCta } from "../data/siteData";
import "./ContactDetails.css";

// Exact business listing for Serenity Salon and wellness spa (CID extracted from the
// Google Maps link you shared — this pins the precise business, not just a lat/lng guess)
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/MWjUprUBxdoukJEJA";
const CID = "6235356565141257614";

const mapEmbedSrc = `https://www.google.com/maps?cid=${CID}&output=embed`;

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="contact-details-card">
        <h3>Get In Touch</h3>

        <ul className="contact-details-list">
          <li>
            <MapPin size={18} strokeWidth={1.5} />
            <span>{business.address}</span>
          </li>
          <li>
            <Phone size={18} strokeWidth={1.5} />
            <a href={`tel:+91${business.phone}`}>+91 {business.phone}</a>
          </li>
          <li>
            <Mail size={18} strokeWidth={1.5} />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </li>
          <li>
            <Clock size={18} strokeWidth={1.5} />
            <span>Open Daily · 10:00 AM – 9:00 PM</span>
          </li>
        </ul>

        <div className="contact-details-actions">
          <a className="btn btn-gold" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a className="btn btn-outline-card" href={`tel:+91${business.phone}`}>
            <Phone size={16} />
            Call Now
          </a>
          <a className="btn btn-outline-card" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Serenity Salon and Wellness Spa location"
          src={mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}