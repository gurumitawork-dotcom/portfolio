import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_PHONE_HREF } from "../../data/clinic.js";

const REASONS = [
  "New patient consultation",
  "Follow-up visit",
  "Second opinion",
  "Referral from another physician",
  "Speaking / collaboration",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-paper-50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-crimson-500 focus:bg-white";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    reason: REASONS[0],
    preferredDate: "",
    message: "",
  });

  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Appointment request for ${OFFICE.name}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      form.location.trim() ? `Location: ${form.location.trim()}` : null,
      `Reason: ${form.reason}`,
      form.preferredDate ? `Preferred date: ${formatDate(form.preferredDate)}` : null,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
      "",
      `Please call the office at ${OFFICE.phone} to confirm. This form does not book online.`,
    ].filter((line) => line !== null);
    const subject = encodeURIComponent(`Appointment request — ${form.name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
      <p className="eyebrow">Request an appointment</p>
      <h2 className="mt-2 text-xl font-semibold sm:text-2xl">Tell us a bit about your visit</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        There is no online booking backend. Submit opens your email so you can send the details, or call the office
        directly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input type="text" required placeholder="Full name" value={form.name} onChange={update("name")} className={inputClass} />
        <input type="tel" required placeholder="Phone number" value={form.phone} onChange={update("phone")} className={inputClass} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={update("email")} className={inputClass} />
        <input type="text" placeholder="Your city / location" value={form.location} onChange={update("location")} className={inputClass} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <select value={form.reason} onChange={update("reason")} className={inputClass}>
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <input
          type="date"
          aria-label="Preferred date (optional)"
          min={new Date().toISOString().split("T")[0]}
          value={form.preferredDate}
          onChange={update("preferredDate")}
          className={inputClass}
        />
      </div>
      <div className="mt-4">
        <textarea
          rows={4}
          placeholder="Anything you'd like us to know beforehand (optional)"
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-none`}
        />
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Email this request <ArrowRight size={16} />
        </button>
        <a href={CLINIC_PHONE_HREF} className="btn-outline w-full sm:w-auto">
          <Phone size={16} /> Call {OFFICE.phone}
        </a>
      </div>
    </form>
  );
}
