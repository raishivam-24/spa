import { Link } from "react-router-dom";
import { ArrowRight, Flower2 } from "lucide-react";
import { about } from "../data/siteData";
import "./HomeAbout.css";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container home-about-inner">
        <div className="home-about-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="home-about-title">{about.heading}</h2>
          <p className="home-about-desc">{about.intro}</p>
          <Link className="btn btn-outline-card home-about-cta" to="/about">
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="home-about-visual">
          <Flower2 className="home-about-motif" strokeWidth={0.5} aria-hidden="true" />
          <p className="home-about-quote">
            &ldquo;{about.mission}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
