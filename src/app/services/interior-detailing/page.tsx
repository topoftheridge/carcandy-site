import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Detailing | Car Candy Auto Detailing",
  description: "Professional interior auto detailing in Delaware County, PA. Full interior clean and restore — vacuuming, shampooing, leather conditioning, odor removal. Starting at $90.",
};

export default function InteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Interior Detailing</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(236,72,153,0.7)]">Starting at $90</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">Most vehicles typically fall between $120–$180.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Full Interior Clean and Restore Service. The interior of your vehicle is vacuumed including the trunk. Then we remove all floor mats. Next, we shampoo all the carpeting, upholstery, clean the door panels, compartments, headliner, ashtrays, instruments, knobs, and trim. The leather is cleaned and conditioned (if applicable). Air vents are dusted and the dashboard is cleaned. All fabrics are protected with Scotch Guard protection. All windows are cleaned on the inside and left spotless. Even the smallest spots you thought would be impossible to touch, we make sure of it. We also remove any unwanted odors and leave your vehicle smelling fresh.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Complete interior vacuum including trunk",
            "Floor mat removal & shampooing",
            "Deep carpet & upholstery shampooing",
            "Door panel & compartment cleaning",
            "Headliner cleaning",
            "Dashboard, instruments, knobs & trim cleaning",
            "Leather cleaning & conditioning (if applicable)",
            "Air vent dusting & Q-Tip detailing",
            "Scotch Guard fabric protection",
            "Interior window & mirror cleaning — left spotless",
            "Ashtray cleaning",
            "Odor elimination — left smelling fresh",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Free Quote
          </Link>
          <a href="tel:+16107260151" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Call (610) 726-0151
          </a>
        </div>

                {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition text-lg">Complete Detail Package →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Enhancement & Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
