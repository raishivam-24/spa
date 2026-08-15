import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import HomeAbout from "../components/HomeAbout";
import AboutValues from "../components/AboutValues";
import TrustStrip from "../components/TrustStrip";
import ContactCta from "../components/ContactCta";
import { about } from "../data/siteData";

export default function About() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Serenity"
        title="A Quiet Corner of Bilaspur, Built for Calm"
        description={about.intro}
        crumb="About Us"
      />
      <TrustStrip />
      <HomeAbout/>
      <AboutValues />
      <ContactCta />
    </Layout>
  );
}
