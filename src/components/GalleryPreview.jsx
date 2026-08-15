import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { gallery } from "../data/siteData";
import "./VisitGallery.css";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  const preview = gallery.slice(0, 4);

  return (
    <section className="visit gallery-preview" id="gallery">
      <div className="container">
        <div className="visit-heading">
          <span className="eyebrow">Inside The Lounge</span>
          <h2 className="visit-title">A Space Built For Calm</h2>
        </div>

        <div className="visit-grid gallery-preview-grid">
          {preview.map((item) => (
            <div className="visit-card" key={item.id}>
              <div className="visit-card-art">
                <ImageIcon size={30} strokeWidth={1.2} />
              </div>
              <p className="visit-card-title">{item.title}</p>
            </div>
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
