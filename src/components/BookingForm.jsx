import { useMemo, useState } from "react";
import { CalendarCheck, CheckCircle2, Clock } from "lucide-react";
import { services, business, contactCta } from "../data/siteData";
import "./BookingForm.css";

// Flatten every service across all categories into one selectable list
function useAllServices() {
  return useMemo(
    () =>
      services.flatMap((group) =>
        group.items.map((item) => ({
          key: `${group.category}__${item.name}`,
          name: item.name,
          category: group.category,
          duration: item.pricing[0].duration,
          price: item.pricing[0].price,
        }))
      ),
    []
  );
}

// Half-hour slots across the business's stated opening hours (10:00 AM – 9:00 PM)
function useTimeSlots() {
  return useMemo(() => {
    const slots = [];
    for (let minutes = 10 * 60; minutes <= 20 * 60 + 30; minutes += 30) {
      const h24 = Math.floor(minutes / 60);
      const m = minutes % 60;
      const period = h24 >= 12 ? "PM" : "AM";
      const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
      slots.push(`${h12}:${m.toString().padStart(2, "0")} ${period}`);
    }
    return slots;
  }, []);
}

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  gender: "",
  notes: "",
  agree: false,
};

export default function BookingForm() {
  const allServices = useAllServices();
  const timeSlots = useTimeSlots();

  const [form, setForm] = useState(initialForm);
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function toggleService(key) {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setError("Please fill in all required personal details.");
      return;
    }
    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      return;
    }
    if (!form.date || !form.time) {
      setError("Please choose a preferred date and time.");
      return;
    }
    if (!form.agree) {
      setError("Please agree to the terms and conditions to continue.");
      return;
    }

    const chosenServices = allServices.filter((s) => selectedServices.includes(s.key));
    const serviceLines = chosenServices
      .map((s) => `  • ${s.name} (${s.duration} — ₹${s.price.toLocaleString("en-IN")})`)
      .join("\n");

    const message = [
      `Hi ${business.name}, I'd like to book an appointment.`,
      "",
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.gender && `Gender: ${form.gender}`,
      "",
      "Services:",
      serviceLines,
      "",
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${contactCta.whatsappLink}&text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
    setSubmitted(true);
  }

  function handleCancel() {
    setForm(initialForm);
    setSelectedServices([]);
    setError("");
  }

  if (submitted) {
    return (
      <div className="booking-form booking-form-success">
        <CheckCircle2 size={44} strokeWidth={1.3} />
        <h3>Your Appointment Request Is Ready</h3>
        <p>
          We've opened WhatsApp with your appointment details filled in — just hit send and
          our front desk will confirm your slot shortly.
        </p>
        <button
          className="btn btn-outline-card"
          type="button"
          onClick={() => {
            setSubmitted(false);
            handleCancel();
          }}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-section">
        <h3 className="booking-section-title">Personal Information</h3>

        <div className="booking-row">
          <label className="booking-field">
            <span>First Name *</span>
            <input type="text" name="firstName" value={form.firstName} onChange={updateField} placeholder="e.g. Priya" />
          </label>
          <label className="booking-field">
            <span>Last Name *</span>
            <input type="text" name="lastName" value={form.lastName} onChange={updateField} placeholder="e.g. Sharma" />
          </label>
        </div>

        <div className="booking-row">
          <label className="booking-field">
            <span>Email Address *</span>
            <input type="email" name="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
          </label>
          <label className="booking-field">
            <span>Phone Number *</span>
            <input type="tel" name="phone" value={form.phone} onChange={updateField} placeholder={`+91 XXXXXXXXXX`} />
          </label>
        </div>
      </div>

      <div className="booking-section">
        <h3 className="booking-section-title">Select Services</h3>
        <div className="booking-services-grid">
          {allServices.map((s) => {
            const checked = selectedServices.includes(s.key);
            return (
              <label
                key={s.key}
                className={`booking-service-card ${checked ? "booking-service-card-checked" : ""}`}
              >
                <input type="checkbox" checked={checked} onChange={() => toggleService(s.key)} />
                <span className="booking-service-check" aria-hidden="true">
                  {checked && <CheckCircle2 size={16} strokeWidth={2} />}
                </span>
                <span className="booking-service-info">
                  <span className="booking-service-name">{s.name}</span>
                  <span className="booking-service-meta">
                    <Clock size={12} strokeWidth={2} />
                    {s.duration} · ₹{s.price.toLocaleString("en-IN")}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="booking-section">
        <h3 className="booking-section-title">Select Date &amp; Time</h3>
        <div className="booking-row">
          <label className="booking-field">
            <span>Preferred Date *</span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={updateField}
              min={new Date().toISOString().split("T")[0]}
            />
          </label>
          <label className="booking-field">
            <span>Preferred Time *</span>
            <select name="time" value={form.time} onChange={updateField}>
              <option value="">Select a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="booking-section">
        <h3 className="booking-section-title">Additional Information</h3>

        <div className="booking-field">
          <span>Gender</span>
          <div className="booking-radio-row">
            {["Male", "Female", "Other"].map((g) => (
              <label className="booking-radio" key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={updateField}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <label className="booking-field">
          <span>Special Requests or Health Conditions</span>
          <textarea
            name="notes"
            rows={4}
            value={form.notes}
            onChange={updateField}
            placeholder="Please let us know about any allergies, health conditions, or special requests…"
          />
        </label>
      </div>

      <label className="booking-terms">
        <input type="checkbox" name="agree" checked={form.agree} onChange={updateField} />
        <span>
          I agree to the terms and conditions and understand that my appointment is subject to
          availability. I will receive a confirmation call or message within 24 hours.
        </span>
      </label>

      {error && <p className="booking-error">{error}</p>}

      <div className="booking-actions">
        <button className="btn btn-gold booking-submit" type="submit">
          <CalendarCheck size={16} />
          Book Appointment
        </button>
        <button className="btn btn-outline-card" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}