import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../data/siteData";
import "./GalleryGrid.css";

export default function GalleryGrid() {
  const categories = useMemo(
    () => ["All", ...new Set(gallery.map((item) => item.category))],
    []
  );
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = active === "All" ? gallery : gallery.filter((item) => item.category === active);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function showRelative(delta) {
    setLightboxIndex((current) => {
      if (current === null) return current;
      const next = (current + delta + visible.length) % visible.length;
      return next;
    });
  }

  const activeItem = lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <section className="gallery-grid-section">
      <div className="container">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter ${active === category ? "gallery-filter-active" : ""}`}
              onClick={() => {
                setActive(category);
                setLightboxIndex(null);
              }}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((item, index) => (
            <figure className="gallery-grid-card" key={item.id}>
              <button
                type="button"
                className="gallery-grid-art"
                onClick={() => openLightbox(index)}
                aria-label={`View larger photo: ${item.title}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
              </button>
              <figcaption>
                <span className="gallery-grid-title">{item.title}</span>
                <span className="gallery-grid-category">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button
            className="gallery-lightbox-close"
            type="button"
            aria-label="Close"
            onClick={closeLightbox}
          >
            <X size={22} />
          </button>

          <button
            className="gallery-lightbox-nav gallery-lightbox-prev"
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showRelative(-1);
            }}
          >
            <ChevronLeft size={26} />
          </button>

          <figure className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.alt} />
            <figcaption>{activeItem.title}</figcaption>
          </figure>

          <button
            className="gallery-lightbox-nav gallery-lightbox-next"
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showRelative(1);
            }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}