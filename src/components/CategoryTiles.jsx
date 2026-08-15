import { Link } from "react-router-dom";
import { Sparkles, Droplets, Waves, Users } from "lucide-react";
import { services } from "../data/siteData";
import "./CategoryTiles.css";

import massageImage from "../assets/massage.png";
import bodyCareImage from "../assets/bodyCare.png";
import jacuzziImage from "../assets/jacuzzi.png";
import coupleGroupImage from "../assets/coupleGroup.png";

const CATEGORY_ICON = {
  "Massage Therapies": Sparkles,
  "Body Care": Droplets,
  "Jacuzzi": Waves,
  "Couple & Group Visits": Users,
};

const CATEGORY_IMAGES = {
  "Massage Therapies": massageImage,
  "Body Care": bodyCareImage,
  "Jacuzzi": jacuzziImage,
  "Couple & Group Visits": coupleGroupImage,
};

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

        {services.map((group) => {
          const Icon = CATEGORY_ICON[group.category] ;

          return (
            <Link
              to={`/services#${slugify(group.category)}`}
              className="tile"
              key={group.category}
              style={{
                backgroundImage: `url(${CATEGORY_IMAGES[group.category]})`,
              }}
            >
              <div className="tile-veil" />

              <div className="tile-content">
                <Icon
                  className="tile-icon"
                  size={30}
                  strokeWidth={1.2}
                />

                <h3>{group.category}</h3>

                <span className="tile-count">
                  {group.items.length} therapies
                </span>

                <span className="btn btn-outline-light tile-btn">
                  Know More
                </span>
              </div>
            </Link>
          );
        })}

        {/* COUPLE & GROUP */}
        <Link
          to="/contact"
          className="tile tile-cta"
          style={{
            backgroundImage: `url(${coupleGroupImage})`,
          }}
        >
          <div className="tile-veil" />

          <div className="tile-content">
            <Users
              className="tile-icon"
              size={30}
              strokeWidth={1.2}
            />

            <h3>Couple &amp; Group Visits</h3>

            <span className="tile-count">
              Book together
            </span>

            <span className="btn btn-outline-light tile-btn">
              Know More
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}