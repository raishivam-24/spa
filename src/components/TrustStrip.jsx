import { MapPin, BadgeCheck, Sparkles, Droplet, Leaf, BookOpen } from "lucide-react";
import { trustStrip } from "../data/siteData";
import "./TrustStrip.css";

const ICONS = {
  "map-pin": MapPin,
  badge: BadgeCheck,
  sparkle: Sparkles,
  droplet: Droplet,
  leaf: Leaf,
  book: BookOpen,
};

const TILE_TONE = [
  "#5c3a22",
  "#6b4429",
  "#4d301f",
  "#8a5a34",
  "#3a2417",
  "#6b4429",
];

export default function TrustStrip() {
  return (
    <section className="trust">
      <h2 className="trust-heading">Elevate Your Spa Experience</h2>

      <div className="trust-inner">
        {trustStrip.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Sparkles;
          return (
            <div
              className="trust-item"
              key={item.label}
              style={{ background: TILE_TONE[i % TILE_TONE.length] }}
            >
              <div className="trust-item-veil" />
              <Icon size={24} strokeWidth={1.3} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
