import { Sparkles, Droplets, Waves, Users } from "lucide-react";
import { services } from "../data/siteData";
import "./CategoryTiles.css";

const CATEGORY_ICON = {
  "Massage Therapies": Sparkles,
  "Body Care": Droplets,
  Jacuzzi: Waves,
};

// Gradient tone per tile so each photo-style panel reads distinctly
const TILE_TONE = [
  "linear-gradient(160deg, #6b4429, #2a1a12)",
  "linear-gradient(160deg, #8a5a34, #3a2417)",
  "linear-gradient(160deg, #4d301f, #1f130d)",
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function CategoryTiles() {
  return (
    <section className="tiles">
      <div className="tiles-heading">
        <h2>Holistic Wellness Services</h2>
      </div>

      <div className="tiles-grid">
        {services.map((group, i) => {
          const Icon = CATEGORY_ICON[group.category] ?? Sparkles;
          return (
            <a
              href={`#${slugify(group.category)}`}
              className="tile"
              key={group.category}
              style={{ background: TILE_TONE[i % TILE_TONE.length] }}
            >
              <div className="tile-veil" />
              <Icon className="tile-icon" size={30} strokeWidth={1.2} />
              <h3>{group.category}</h3>
              <span className="tile-count">{group.items.length} therapies</span>
              <span className="btn btn-outline-light tile-btn">Know More</span>
            </a>
          );
        })}

        <a href="#contact" className="tile tile-cta">
          <div className="tile-veil" />
          <Users className="tile-icon" size={30} strokeWidth={1.2} />
          <h3>Couple &amp; Group Visits</h3>
          <span className="tile-count">Book together</span>
          <span className="btn btn-outline-light tile-btn">Know More</span>
        </a>
      </div>
    </section>
  );
}
