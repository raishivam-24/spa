import { Flower2, ImagePlus } from "lucide-react";
import { about, contactCta } from "../data/siteData";
import "./AboutSplit.css";
import receptionImage from "../assets/reception.png";

export default function AboutSplit() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-heading">
          <span className="eyebrow">With Serenity</span>
          <h2 className="about-title">Prioritise Your Wellbeing</h2>
        </div>

        <div className="about-visual">
          <Flower2 className="about-visual-motif" strokeWidth={0.4} aria-hidden="true" />

          <div className="about-decor" aria-hidden="true" />

          <div className="about-image">
            <img
              src={receptionImage}
              alt="Serenity Spa Reception"
            />
          </div>

          <div className="about-card">
            {about.story.map((paragraph) => (
              <p className="about-desc" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}

            <a className="btn btn-outline-card about-cta" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
              Book a Spa Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
