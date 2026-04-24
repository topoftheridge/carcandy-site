"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Car, Paintbrush, Sparkles, ChevronLeft, Check } from "lucide-react";

const SERVICES = [
  { id: "interior", icon: <Car className="w-10 h-10" />, title: "Interior Detailing", desc: "Deep cleaning for seats, carpets, and interior surfaces" },
  { id: "exterior", icon: <Paintbrush className="w-10 h-10" />, title: "Exterior Detailing", desc: "Hand wash, wheels, and paint-safe exterior cleaning" },
  { id: "full", icon: <Sparkles className="w-10 h-10" />, title: "Full Detail Package", desc: "Complete interior and exterior detailing service" },
];

const CONDITIONS = [
  { id: "light", label: "Light cleaning", desc: "Regular maintenance, mostly clean" },
  { id: "moderate", label: "Moderate cleaning", desc: "Some buildup, needs a good detail" },
  { id: "heavy", label: "Heavy dirt / stains", desc: "Significant grime, stains, or neglect" },
  { id: "unsure", label: "Not sure?", desc: "We'll figure it out together" },
];

const ADDONS = [
  { id: "wax", label: "Full Wax" },
  { id: "buff", label: "Compound Buff & Wax" },
  { id: "engine", label: "Engine Detail" },
  { id: "floormats", label: "Floor Mat Replacement" },
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [condition, setCondition] = useState("");
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const toggleAddon = (id: string) => {
    setAddons((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

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

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-900/50 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Quote Request Received!</h2>
            <p className="text-gray-400 mb-8">
              Thanks for reaching out. A member of our team will contact you shortly with your personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13023399679" className="inline-flex items-center justify-center bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                Call (302) 339-9679
              </a>
              <Link href="/" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition border border-white/20">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Header />

      {/* Progress bar */}
      <div className="w-full bg-white/5">
        <div
          className="h-1 bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl mx-auto">

          {/* Back button */}
          {step > 1 && (
            <button onClick={goBack} className="flex items-center gap-1 text-gray-400 hover:text-white transition text-sm mb-8">
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">What does your vehicle need?</h1>
              <p className="text-gray-400 mb-10">Select a service to get your free quote started.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setService(s.id); setStep(2); }}
                    className={`p-6 rounded-xl border text-left transition hover:border-primary/50 hover:bg-white/5 ${
                      service === s.id ? "border-primary bg-white/5" : "border-white/10 bg-dark-lighter"
                    }`}
                  >
                    <div className="text-primary mb-4">{s.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Vehicle Condition */}
          {step === 2 && (
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Vehicle condition?</h1>
              <p className="text-gray-400 mb-10">This helps us give you a more accurate quote.</p>
              <div className="space-y-3">
                {CONDITIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setCondition(c.id); setStep(3); }}
                    className={`w-full p-5 rounded-xl border text-left transition hover:border-primary/50 hover:bg-white/5 flex items-center justify-between ${
                      condition === c.id ? "border-primary bg-white/5" : "border-white/10 bg-dark-lighter"
                    }`}
                  >
                    <div>
                      <h3 className="text-white font-semibold">{c.label}</h3>
                      <p className="text-gray-500 text-sm">{c.desc}</p>
                    </div>
                    <ChevronLeft className="w-5 h-5 text-gray-600 rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Add-ons */}
          {step === 3 && (
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Any extras?</h1>
              <p className="text-gray-400 mb-10">Select any add-ons you&apos;re interested in. These are optional.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {ADDONS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={`p-4 rounded-xl border text-left transition flex items-center gap-3 ${
                      addons.includes(a.id)
                        ? "border-primary bg-primary/10"
                        : "border-white/10 bg-dark-lighter hover:border-white/20"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                      addons.includes(a.id) ? "bg-primary border-primary" : "border-white/20"
                    }`}>
                      {addons.includes(a.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-white font-medium">{a.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(4)}
                className="w-full py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition text-sm"
              >
                Continue
              </button>
              <button
                onClick={() => setStep(4)}
                className="w-full mt-3 text-gray-500 text-sm hover:text-gray-300 transition"
              >
                Skip — no extras
              </button>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Almost done!</h1>
              <p className="text-gray-400 mb-10">Enter your info and we&apos;ll get back to you with a quote.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-lighter text-white outline-none text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
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
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-lighter text-white outline-none text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Zip Code *</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                      placeholder="19014"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-lighter text-white outline-none text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Preferred Date (optional)</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-lighter text-white outline-none text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary [color-scheme:dark]"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!canSubmit || submitting}
                className="mt-8 w-full py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Get My Free Quote"}
              </button>

              <p className="text-[10px] text-gray-500 mt-3 leading-snug">
                By submitting, you agree to receive calls and text messages related to your request. You can unsubscribe at any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/logoheader.png" alt="Car Candy" width={140} height={80} className="h-10 w-auto" />
          </Link>
          <span className="hidden sm:block text-gray-500 text-xs border-l border-white/10 pl-3">Auto Detailing in Delaware County, PA</span>
        </div>
        <a href="tel:+13023399679" className="text-gray-400 hover:text-primary transition text-sm hidden sm:block">
          (302) 339-9679
        </a>
      </div>
    </div>
  );
}
