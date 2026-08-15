import { Link } from "react-router-dom";
import { Flower2, Home } from "lucide-react";
import Layout from "../components/Layout";
import "./NotFound.css";

export default function NotFound() {
  return (
    <Layout>
      <section className="not-found">
        <Flower2 className="not-found-motif" strokeWidth={0.4} aria-hidden="true" />
        <div className="container not-found-inner">
          <span className="eyebrow eyebrow-light">Lost Your Way?</span>
          <h1 className="not-found-title">404 — Page Not Found</h1>
          <p className="not-found-desc">
            The page you're looking for doesn't exist. Let's get you back to a calmer place.
          </p>
          <Link className="btn btn-gold" to="/">
            <Home size={16} />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
