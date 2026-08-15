import {
  MapPin,
  BadgeCheck,
  Sparkles,
  Droplet,
  Leaf,
  BookOpen,
} from "lucide-react";

import { trustStrip } from "../data/siteData";
import "./TrustStrip.css";

// Add your images here
import locationImage from "../assets/trust/location.png";
import therapistImage from "../assets/trust/therapist.png";
import hygieneImage from "../assets/trust/hygiene.png";
import aromaImage from "../assets/trust/aroma.png";
import qualityImage from "../assets/trust/qualityProduct.png";
import therapyImage from "../assets/trust/therapy.png";

const ICONS = {
  "map-pin": MapPin,
  "badge": BadgeCheck,
  "sparkle": Sparkles,
  "droplet": Droplet,
  "book": BookOpen,
  "product": Leaf,
};

const TRUST_IMAGES = [
  locationImage,
  therapistImage,
  hygieneImage,
  aromaImage,
  qualityImage,
  therapyImage,
];

export default function TrustStrip() {
  return (
    <section className="trust">
      <h2 className="trust-heading">
        Elevate Your Spa Experience
      </h2>

      <div className="trust-inner">

        {trustStrip.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Sparkles;

          return (
            <div
              className="trust-item"
              key={item.label}
              style={{
                backgroundImage: `url(${TRUST_IMAGES[i]})`,
              }}
            >
              <div className="trust-item-veil" />

              <div className="trust-item-content">
                <Icon
                  className="trust-item-icon"
                  size={28}
                  strokeWidth={1.3}
                />

                <span>{item.label}</span>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}