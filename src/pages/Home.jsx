import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import CategoryTiles from "../components/CategoryTiles";
import Services from "../components/Services";
import AboutSplit from "../components/AboutSplit";
import VisitGallery from "../components/VisitGallery";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AboutSplit />
        <TrustStrip />
        <Services />
        <CategoryTiles />
        <VisitGallery />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
