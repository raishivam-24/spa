import { MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon,} from "./SocialIcons";
import { business } from "../data/siteData";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">

        <div className="topbar-left">
          <a
            className="topbar-item topbar-location"
            href="https://maps.app.goo.gl/vsnRP8Y7hiQQYv5b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={13} strokeWidth={1.8} />
            {business.address}
          </a>
        </div>

        <div className="topbar-right">

          <a
            className="topbar-item topbar-link"
            href={`tel:+91${business.phone}`}
          >
            <Phone size={13} strokeWidth={1.8} />
            +91 {business.phone}
          </a>

          <span className="topbar-social">

            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Serenity on Facebook"
            >
              <FacebookIcon size={13} strokeWidth={1.8} />
            </a>

            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Serenity on Instagram"
            >
              <InstagramIcon size={13} strokeWidth={1.8} />
            </a>
          </span>

        </div>

      </div>
    </div>
  );
}