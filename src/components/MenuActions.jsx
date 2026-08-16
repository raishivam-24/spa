import { FileText, Download } from "lucide-react";
// import "./MenuActions.css";

const MENU_PDF_PATH = "/assets/serenity-menu.pdf";

export default function MenuActions({ align = "left", surface = "dark" }) {
  // "dark" = sitting on a brown/gold background (needs a light-colored outline button)
  // "light" = sitting on a cream background (needs the dark card-style outline button)
  const outlineClass = surface === "light" ? "btn-outline-card" : "btn-outline-light";

  return (
    <div className={`menu-actions menu-actions-${align}`}>
      
    <a className={`btn ${outlineClass} menu-actions-btn`}
        href={MENU_PDF_PATH}
        target="_blank"
        rel="noreferrer"
      >
        <FileText size={16} />
        View Menu
      </a>
      
    <a className="btn btn-gold menu-actions-btn"
        href={MENU_PDF_PATH}
        download="Serenity-Salon-Wellness-Spa-Menu.pdf"
      >
        <Download size={16} />
        Download Menu (PDF)
      </a>
    </div>
  );
}