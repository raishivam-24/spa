import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { business, services } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-hero">
        <span className="footer-hero-mark">S</span>
        <p className="footer-hero-title">Serenity</p>
        <p className="footer-hero-sub">Salon &amp; Wellness Spa</p>
      </div>

      <div className="container footer-top">
        <div className="footer-brand">
          <p className="footer-brand-desc">{business.tagline} — Bilaspur, Chhattisgarh.</p>
          <div className="footer-social">
            <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">Wellbeing</a></li>
            <li><a href="#gallery">Visit Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((group) => (
              <li key={group.category}>
                <a href={`#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  {group.category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={15} />
              <span>{business.address}</span>
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
