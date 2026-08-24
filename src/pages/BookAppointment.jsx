import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import BookingForm from "../components/BookingForm";
import "./BookAppointment.css";

export default function BookAppointment() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Reserve Your Slot"
        title="Book Your Appointment"
        description="Schedule your relaxing spa experience with us. Choose your preferred services and time slot, and we'll confirm over WhatsApp."
        crumb="Book Appointment"
      />

      <section className="book-appointment-page">
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </Layout>
  );
}