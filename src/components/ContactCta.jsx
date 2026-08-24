import { CalendarCheck, MessageCircle, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { contactCta, business } from "../data/siteData";
import "./ContactCta.css";

export default function ContactCta() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <div className="cta-copy">
          <span className="eyebrow">Reserve Your Slot</span>
          <h2 className="cta-title">{contactCta.heading}</h2>
          <p className="cta-desc">{contactCta.description}</p>
        </div>

        <div className="cta-actions">
          <NavLink className="btn btn-gold" to="/book-appointment">
              <CalendarCheck size={16} />
              Book Now
          </NavLink>
          <a className="btn btn-outline-light" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a className="btn btn-outline-light" href={contactCta.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={16} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
