import { Sofa, DoorOpen, Image as ImageIcon } from "lucide-react";
import { gallery, business, contactCta } from "../data/siteData";
import "./VisitGallery.css";

const FALLBACK_ICONS = [Sofa, DoorOpen, ImageIcon];

export default function VisitGallery() {
  return (
    <section className="visit" id="gallery">
      <div className="container">
        <div className="visit-heading">
          <span className="eyebrow">Inside The Lounge</span>
          <h2 className="visit-title">A Space Built For Calm</h2>
        </div>

        <div className="visit-grid">
          {gallery.map((item, i) => {
            const Icon = FALLBACK_ICONS[i % FALLBACK_ICONS.length];
            return (
              <div className="visit-card" key={item.id}>
                <div className="visit-card-art">
                  <Icon size={30} strokeWidth={1.2} />
                </div>
                <p className="visit-card-title">{item.title}</p>
              </div>
            );
          })}

          <div className="visit-card visit-card-map">
            <div className="visit-card-art">
              <DoorOpen size={30} strokeWidth={1.2} />
            </div>
            <p className="visit-card-title">Find Us in Bilaspur</p>
            <p className="visit-card-address">{business.address}</p>
            <a className="visit-card-link" href={contactCta.mapsUrl} target="_blank" rel="noreferrer">
              Open in Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
