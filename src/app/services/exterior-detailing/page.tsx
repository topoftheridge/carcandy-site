import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Detailing | Car Candy Auto Detailing",
  description: "Professional exterior auto detailing in Delaware County, PA. Hand wash, power wash, foam coverage, bug & tar removal, wax, chrome polish. Starting at $90.",
};

export default function ExteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Exterior Detailing</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(236,72,153,0.7)]">Starting at $90</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">Most vehicles typically fall between $120–$180.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Full exterior hand car wash, power-wash and complete foam coverage, including cleaning of wheels, tires, and wheel wells. We remove all bugs and tar. Dedicated treatment to the exterior of the vehicle, and polish. Then we apply wax and remove any tough spots by hand. All chrome is polished and the rubber is cleaned. Tires are dressed for a high luster. All windows are cleaned on the exterior of the car.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior hand car wash",
            "Power wash & complete foam coverage",
            "Wheel, tire & wheel well deep cleaning",
            "Bug & tar removal",
            "Exterior polish treatment",
            "Full wax application — tough spots removed by hand",
            "Chrome polishing",
            "Rubber cleaning & restoration",
            "Tire dressing for high luster",
            "Exterior window cleaning",
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/full-detail-package" className="p-5 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
              <span className="text-white font-semibold group-hover:text-primary transition">Complete Detail Package →</span>
              <p className="text-gray-500 text-sm mt-1">Starting at $180</p>
            </Link>
            <Link href="/services/interior-detailing" className="p-5 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
              <span className="text-white font-semibold group-hover:text-primary transition">Interior Detailing →</span>
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
