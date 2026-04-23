import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Detailing in Delaware County, PA | Car Candy Detailing",
  description: "Car Candy Detailing provides professional auto detailing services across Delaware County, Pennsylvania, helping drivers restore, protect, and maintain their vehicles.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Car Candy Auto Detailing"
        subtitle="Auto Detailing in Delaware County, PA"
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Auto Detailing in Delaware County, PA | <span className="text-primary">Car Candy Detailing</span>
          </h2>
          <p className="text-accent font-medium mb-8 text-lg">
            Car Candy Detailing provides professional auto detailing services across Delaware County, Pennsylvania, helping drivers restore, protect, and maintain their vehicles inside and out.
          </p>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
            <p>
              Based in Aston Township, we proudly serve surrounding areas including Media, Brookhaven, Chester, and nearby communities. Our detailing services go far beyond a basic car wash. We specialize in interior and exterior auto detailing, removing dirt, stains, and buildup while restoring your vehicle&apos;s appearance and protecting it for the long term.
            </p>
            <p>
              From deep interior cleaning and stain removal to exterior paint enhancement and protection, every service is completed with precision and high-quality products. Whether your vehicle needs a full detail or a routine refresh, we deliver results that stand out.
            </p>
            <p>
              At Car Candy Detailing, we focus on convenience, quality, and consistent results — making it easy for Delaware County drivers to keep their vehicles looking their best.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              View Our Services
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
