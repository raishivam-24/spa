import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { business, contactCta } from "../data/siteData";
import "./ContactForm.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet — hand the enquiry off to WhatsApp instead,
    // pre-filled with what was entered, so it still reaches the front desk.
    const message = [
      `Hi Serenity Salon and Wellness Spa, I'd like to enquire.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Interested in: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${contactCta.whatsappLink}&text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form-success">
        <CheckCircle2 size={40} strokeWidth={1.3} />
        <h3>Enquiry Ready to Send</h3>
        <p>
          We've opened WhatsApp with your details filled in — just hit send and our team at
          Serenity will get back to you shortly.
        </p>
        <button className="btn btn-outline-card" type="button" onClick={() => setSubmitted(false)}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label className="contact-form-field">
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
          />
        </label>

        <label className="contact-form-field">
          <span>Phone Number</span>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder={`e.g. ${business.phone}`}
          />
        </label>
      </div>

      <label className="contact-form-field">
        <span>Interested In (optional)</span>
        <input
          type="text"
          name="service"
          value={form.service}
          onChange={handleChange}
          placeholder="e.g. Traditional Thai Massage"
        />
      </label>

      <label className="contact-form-field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us your preferred date, time, or any questions you have."
        />
      </label>

      <button className="btn btn-gold contact-form-submit" type="submit">
        <Send size={16} />
        Send Enquiry via WhatsApp
      </button>
      <p className="contact-form-note">
        Sending opens WhatsApp with your details filled in, so our front desk can reply directly.
      </p>
    </form>
  );
}
