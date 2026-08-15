import { useMemo, useState } from "react";
import { ImageIcon } from "lucide-react";
import { gallery } from "../data/siteData";
import "./GalleryGrid.css";

export default function GalleryGrid() {
  const categories = useMemo(
    () => ["All", ...new Set(gallery.map((item) => item.category))],
    []
  );
  const [active, setActive] = useState("All");

  const visible = active === "All" ? gallery : gallery.filter((item) => item.category === active);

  return (
    <section className="gallery-grid-section">
      <div className="container">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter ${active === category ? "gallery-filter-active" : ""}`}
              onClick={() => setActive(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((item) => (
            <figure className="gallery-grid-card" key={item.id}>
              <div className="gallery-grid-art">
                <ImageIcon size={30} strokeWidth={1.2} />
                <span className="gallery-grid-hint">Photo coming soon</span>
              </div>
              <figcaption>
                <span className="gallery-grid-title">{item.title}</span>
                <span className="gallery-grid-category">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
