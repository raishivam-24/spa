import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import CategoryTiles from "../components/CategoryTiles";
import AboutSplit from "../components/AboutSplit";
import ServicesPreview from "../components/ServicesPreview";
import GalleryPreview from "../components/GalleryPreview";
import ContactCta from "../components/ContactCta";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSplit/>
      <TrustStrip />
      <ServicesPreview />
      <CategoryTiles />
      <GalleryPreview />
      <ContactCta />
    </Layout>
  );
}
