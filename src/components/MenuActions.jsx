import { FileText, Download, BookOpenText } from "lucide-react";
import "./MenuActions.css";

const MENU_PDF_PATH = "/assets/serenity-menu.pdf";

export default function MenuActions({ align = "left", surface = "dark" }) {
  const outlineClass = surface === "light" ? "btn-outline-card" : "btn-outline-light";

  return (
    <div className={`menu-callout menu-callout-${surface} menu-callout-${align}`}>
      <div className="menu-callout-icon">
        <BookOpenText size={22} strokeWidth={1.4} />
      </div>

      <div className="menu-callout-copy">
        <h3 className="menu-callout-title">Prefer a Printable Menu?</h3>
        <p className="menu-callout-desc">
          Get our full price list as a PDF — view it here, or download a copy to save,
          print or share.
        </p>
      </div>

      <div className="menu-callout-actions">
        
        <a className={`btn ${outlineClass} menu-callout-btn`}
          href={MENU_PDF_PATH}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={16} />
          View Menu
        </a>
        
        <a className="btn btn-gold menu-callout-btn"
          href={MENU_PDF_PATH}
          download="Serenity-Salon-Wellness-Spa-Menu.pdf"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>
    </div>
  );
}