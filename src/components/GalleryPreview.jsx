import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gallery } from "../data/siteData";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  const preview = gallery.slice(0, 4);

  return (
    <section className="gallery-preview" id="gallery">
      <div className="container">
        <div className="gallery-preview-heading">
          <span className="eyebrow">Inside The Lounge</span>
          <h2 className="gallery-preview-title">A Space Built For Calm</h2>
        </div>

        <div className="gallery-preview-grid">
          {preview.map((item) => (
            <Link className="gallery-preview-card" to="/gallery" key={item.id}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span className="gallery-preview-card-title">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="gallery-preview-cta">
          <Link className="btn btn-outline-light" to="/gallery">
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}