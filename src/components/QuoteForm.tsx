"use client";

import { useState } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = phone.replace(/\D/g, "");
  const canSubmit = name.trim() && phoneDigits.length === 10 && zip.length === 5;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitting) {
    return (
      <div className="bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl p-8 -mt-12 relative z-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8">
          {/* Bubbles animation */}
          <div className="relative w-24 h-24 mb-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/60 animate-bubble"
                style={{
                  width: `${12 + i * 4}px`,
                  height: `${12 + i * 4}px`,
                  left: `${15 + i * 12}px`,
                  bottom: "0",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl">🧽</div>
          </div>
          <p className="text-lg font-semibold text-white animate-pulse">Polishing your request...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl p-8 -mt-12 relative z-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-900/50 border border-green-500/30 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">We&apos;ll Be in Touch! ✨</h3>
          <p className="text-gray-400 text-sm text-center max-w-sm">
            Thanks for reaching out! One of our detailing experts will contact you shortly to discuss your vehicle&apos;s needs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl -mt-12 relative z-10 max-w-2xl mx-auto overflow-hidden">
      <div className="bg-primary px-6 py-4">
        <h2 className="text-white font-bold text-lg">GET A FREE QUOTE</h2>
        <p className="text-white/70 text-xs mt-0.5">Quick &amp; easy — no obligation</p>
      </div>

      <div className="p-6 lg:p-8 space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Your Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Phone *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(000) 000-0000"
              className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Zip Code *</label>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              placeholder="19014"
              className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Vehicle Type (optional)</label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
          >
            <option value="">Select vehicle type</option>
            <option value="sedan">Sedan / Small Car</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="luxury">Luxury / Exotic</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
