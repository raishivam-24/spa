import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { contactCta, business } from "../data/siteData";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Wellbeing", href: "#about" },
  { label: "Visit Us", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} id="top">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo">
          <span className="navbar-logo-mark">S</span>
          <span className="navbar-logo-text">
            <span className="navbar-logo-title">Serenity</span>
            <span className="navbar-logo-sub">Salon &amp; Wellness Spa</span>
          </span>
        </a>

        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-cta">
          <a className="btn btn-outline-light navbar-cta-secondary" href={`tel:+91${business.phone}`}>
            <Phone size={15} />
            Request Callback
          </a>
          <a className="btn btn-gold" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            Book Now
          </a>
        </div>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-gold navbar-mobile-cta"
            href={contactCta.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
