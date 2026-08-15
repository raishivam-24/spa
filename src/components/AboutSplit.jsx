import { Flower2, ImagePlus } from "lucide-react";
import { contactCta } from "../data/siteData";
import "./AboutSplit.css";

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
            <ImagePlus size={28} strokeWidth={1.3} />
            <p className="about-image-title">Spa Interior</p>
            <p className="about-image-sub">Add a treatment-room photo here</p>
          </div>

          <div className="about-card">
            <p className="about-desc">
              The daily grind of work and personal takes a toll on your body and mind. A
              regular spa helps you unwind, relax and re-energise. Choose from across the
              signature massages &amp; therapies, or go for the good old Deep Tissue massage,
              Swedish massage or Balinese massage.
            </p>
            <p className="about-desc">
              Serenity Salon and Wellness Spa therapies will help keep your body running
              smoothly, so you can meet that half marathon or that full day of meetings.
            </p>

            <a className="btn btn-outline-card about-cta" href={contactCta.whatsappLink} target="_blank" rel="noreferrer">
              Book a Spa Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}