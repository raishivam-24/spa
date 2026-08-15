import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import "./Contact.css";

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Reserve Your Slot"
        title="Contact Us"
        description="Have a question, or ready to book? Send us an enquiry, call, or WhatsApp — our front desk in Bilaspur is happy to help."
        crumb="Contact Us"
      />

      <section className="contact-page">
        <div className="container contact-page-inner">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
    </Layout>
  );
}
