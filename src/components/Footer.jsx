import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, } from "./SocialIcons";
import { business, services } from "../data/siteData";
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address + ", Bilaspur, Chhattisgarh"
)}`;
  return (
    <footer className="footer">
      <div className="footer-hero">
        <img
          src={logo}
          alt="Serenity Salon & Wellness Spa"
          className="footer-hero-logo"
        />

        <p className="footer-hero-title">
          Serenity
        </p>

        <p className="footer-hero-sub">
          Salon &amp; Wellness Spa
        </p>
      </div>

      <div className="container footer-top">
        <div className="footer-brand">
          <p className="footer-brand-desc">{business.tagline} — Bilaspur, Chhattisgarh.</p>
          <div className="footer-social">
            <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((group) => (
              <li key={group.category}>
                <Link to={`/services#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  {group.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={15} />

              <a
                href="https://maps.app.goo.gl/vsnRP8Y7hiQQYv5b9"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-address-link"
              >
                {business.address}
              </a>
            </li>
            <li>
              <Phone size={15} />
              <a href={`tel:+91${business.phone}`}>+91 {business.phone}</a>
            </li>
            <li>
              <Mail size={15} />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} {business.name}. All rights reserved.</span>
          <span className="footer-bottom-tag">Crafted with calm in Bilaspur.</span>
        </div>
      </div>
    </footer>
  );
}
