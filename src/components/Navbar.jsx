import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CalendarCheck, Phone } from "lucide-react";
import { business } from "../data/siteData";
import "./Navbar.css";
import logo from "../assets/logo.png"
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
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
        <NavLink to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Serenity Salon & Wellness Spa"
            className="navbar-logo-image"
          />

          <span className="navbar-logo-text">
            <span className="navbar-logo-title">
              Serenity
            </span>

            <span className="navbar-logo-sub">
              Salon &amp; Wellness Spa
            </span>
          </span>
        </NavLink>

        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "navbar-link-active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-cta">
          <a className="btn btn-outline-light navbar-cta-secondary" href={`tel:+91${business.phone}`}>
            <Phone size={15} />
            Request Callback
          </a>
          <NavLink className="btn btn-gold" to="/book-appointment">
            <CalendarCheck size={16} />
            Book Now
          </NavLink>
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
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "navbar-link-active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            className="btn btn-gold navbar-mobile-cta"
            to="/book-appointment"
            onClick={() => setOpen(false)}
          >
            <CalendarCheck size={16} />
            Book Now
          </NavLink>
        </div>
      )}
    </header>
  );
}