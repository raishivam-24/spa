import { Link } from "react-router-dom";
import { ChevronRight, Flower2 } from "lucide-react";
import "./PageHeader.css";

export default function PageHeader({ eyebrow, title, description, crumb }) {
  return (
    <section className="page-header">
      <Flower2 className="page-header-motif" strokeWidth={0.4} aria-hidden="true" />
      <div className="container page-header-inner">
        <nav className="page-header-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} strokeWidth={2} />
          <span>{crumb}</span>
        </nav>

        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1 className="page-header-title">{title}</h1>
        {description && <p className="page-header-desc">{description}</p>}
      </div>
    </section>
  );
}
