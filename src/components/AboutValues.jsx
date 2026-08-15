import { BadgeCheck, Sparkles, Droplet, Leaf } from "lucide-react";
import { about } from "../data/siteData";
import "./AboutValues.css";

const ICONS = {
  badge: BadgeCheck,
  sparkle: Sparkles,
  droplet: Droplet,
  leaf: Leaf,
};

export default function AboutValues() {
  return (
    <section className="about-values">
      <div className="container">
        <div className="about-values-heading">
          <span className="eyebrow">What We Stand For</span>
          <h2 className="about-values-title">Our Values</h2>
        </div>

        <div className="about-values-grid">
          {about.values.map((value) => {
            const Icon = ICONS[value.icon] ?? Sparkles;
            return (
              <div className="about-value-card" key={value.title}>
                <div className="about-value-icon">
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="about-mission">
          <span className="eyebrow eyebrow-light">Our Mission</span>
          <p className="about-mission-text">&ldquo;{about.mission}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
