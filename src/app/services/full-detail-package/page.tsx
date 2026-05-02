import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Detail Package | Car Candy Auto Detailing",
  description: "Complete detail package — interior + exterior detailing bundled for a full vehicle refresh. Starting at $180. Delaware County, PA.",
};

export default function FullDetailPackagePage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Complete Detail Package</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(236,72,153,0.7)]">Starting at $180</p>
          <p className="text-gray-400 mt-2">Most vehicles typically fall between $180–$280 depending on size and condition.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Full exterior hand car wash including complete cleaning of wheels, tires, wheel wells, and door jambs. Then we remove all bugs, tar, and tree sap. Next, we power-wash and foam down the entire exterior of your car. Then we compound any scratches off the exterior. From there we polish the whole exterior. After that, we wax the entire exterior and remove it by hand. Chrome, grill, tailpipes, and emblems are all polished. Interior is vacuumed. Then we remove floor mats and shampoo all the carpeting and upholstery, clean door panels, compartments, headliner, ashtrays, instruments, knobs, and wood trim. The leather is cleaned and conditioned (if applicable). Tires are dressed for a high luster. The air vents are Q-Tipped and the dashboard is cleaned. All windows and vanity mirrors are left spotless. Only the finest products are used on your car. The best deal for your budget.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Exterior — What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior hand car wash",
            "Complete wheel, tire & wheel well cleaning",
            "Door jamb cleaning",
            "Bug, tar & tree sap removal",
            "Power wash & full foam coverage",
            "Scratch compounding on exterior",
            "Full exterior polish",
            "Full wax application — removed by hand",
            "Chrome, grill, tailpipes & emblem polishing",
            "Tire dressing for high luster",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Interior — What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Complete interior vacuum",
            "Floor mat removal & shampooing",
            "Full carpet & upholstery shampooing",
            "Door panel & compartment cleaning",
            "Headliner cleaning",
            "Dashboard, instruments, knobs & wood trim cleaning",
            "Leather cleaning & conditioning (if applicable)",
            "Air vent Q-Tip detailing",
            "Ashtray cleaning",
            "All windows & vanity mirrors left spotless",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Exact Quote
          </Link>
          <a href="tel:+16107260151" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Call (610) 726-0151
          </a>
        </div>

        {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/interior-detailing" className="p-5 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
              <span className="text-white font-semibold group-hover:text-primary transition">Interior Detailing →</span>
              <p className="text-gray-500 text-sm mt-1">Starting at $90</p>
            </Link>
            <Link href="/services/exterior-detailing" className="p-5 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
              <span className="text-white font-semibold group-hover:text-primary transition">Exterior Detailing →</span>
              <p className="text-gray-500 text-sm mt-1">Starting at $90</p>
            </Link>
            <Link href="/services/paint-protection" className="p-5 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
              <span className="text-white font-semibold group-hover:text-primary transition">Paint Enhancement & Protection →</span>
              <p className="text-gray-500 text-sm mt-1">From $30</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
