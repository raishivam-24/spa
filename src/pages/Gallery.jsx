import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import ContactCta from "../components/ContactCta";
import TrustStrip from "../components/TrustStrip";

export default function Gallery() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Take a Look Inside"
        title="A Space Built For Calm"
        description="A glimpse of the lounge, treatment rooms and therapies at Serenity Salon and Wellness Spa, Bilaspur."
        crumb="Gallery"
      />
      <TrustStrip />
      <GalleryGrid />
      <ContactCta />
    </Layout>
  );
}
