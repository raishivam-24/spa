import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import ContactCta from "../components/ContactCta";
import TrustStrip from "../components/TrustStrip";
import MenuActions from "../components/MenuActions";
import "./Services.css";

export default function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Menu"
        title="Services & Pricing"
        description="Massage therapies, body care rituals and jacuzzi sessions — every treatment performed by trained hands, with premium oils, in a quiet room built for your calm."
        crumb="Services"
      />
      <TrustStrip />
      <Services />
      {/* <div className="container services-page-actions">
        <MenuActions align="center" />
      </div> */}
      <ContactCta />
    </Layout>
  );
}
