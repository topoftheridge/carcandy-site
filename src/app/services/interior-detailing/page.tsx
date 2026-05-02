import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Detailing | Car Candy Auto Detailing",
  description: "Professional interior auto detailing in Delaware County, PA. Deep cleaning, stain removal, dashboard detailing, and upholstery treatment. Starting at $90.",
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
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          A thorough deep clean of your vehicle&apos;s entire interior. We restore every surface — from seats and carpets to the dashboard and door panels — leaving your cabin fresh, sanitized, and looking like new.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
