import type { Metadata } from "next";
import Link from "next/link";
import { Car, Paintbrush, Wrench, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Detailing Services | Car Candy Auto Detailing",
  description: "Interior & exterior auto detailing services in Delaware County, PA. Deep cleaning, paint correction, waxing, engine detail, and more. Prices starting at $80.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Detailing Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional-grade products and meticulous attention to detail. Every service is priced based on vehicle size and condition.
            </p>
          </div>

          {/* Interior */}
          <div id="interior" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary"><Car className="w-8 h-8" /></div>
              <div>
                <h2 className="text-2xl font-bold text-white">Interior Detailing</h2>
                <p className="text-primary font-semibold">$90 – $200 <span className="text-gray-500 font-normal text-sm">(depends on condition)</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Complete interior vacuum & debris removal",
                "Deep stain removal from seats & carpets",
                "Dashboard, console & trim cleaning and conditioning",
                "Door panel & pocket cleaning",
                "Window & mirror cleaning (interior)",
                "Air vent dusting & cleaning",
                "Leather conditioning (if applicable)",
                "Odor elimination treatment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exterior */}
          <div id="exterior" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary"><Paintbrush className="w-8 h-8" /></div>
              <div>
                <h2 className="text-2xl font-bold text-white">Exterior Detailing</h2>
                <p className="text-primary font-semibold">$80 – $160 <span className="text-gray-500 font-normal text-sm">(depends on condition)</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Thorough hand wash & rinse",
                "Paint decontamination & clay bar treatment",
                "Tire & wheel deep cleaning",
                "Wheel well cleaning",
                "Trim & plastic restoration",
                "Window & mirror cleaning (exterior)",
                "Door jamb cleaning",
                "Tire dressing & shine",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons */}
          <div id="addons" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary"><Wrench className="w-8 h-8" /></div>
              <div>
                <h2 className="text-2xl font-bold text-white">Add-Ons</h2>
                <p className="text-gray-400 text-sm">Enhance your detail with these extras</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Full Wax", price: "$35" },
                { name: "Full Compound Buff & Wax", price: "$80" },
                { name: "Engine Detail", price: "$60–$100" },
                { name: "Floormat Replacement", price: "$30" },
              ].map((addon) => (
                <div key={addon.name} className="flex items-center justify-between p-4 rounded-lg bg-dark-lighter border border-white/5">
                  <span className="text-white font-medium">{addon.name}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
