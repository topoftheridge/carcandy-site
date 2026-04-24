import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Sparkles, Shield, Clock, Droplets, Car, Paintbrush, Wrench } from "lucide-react";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Car Candy Auto Detailing",
    description: "Professional auto detailing services in Aston, PA and Delaware County. Interior & exterior detailing, waxing, paint correction.",
    url: "https://carcandy-site.vercel.app",
    telephone: "+13023399679",
    email: "carcandyautodetailing@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aston",
      addressRegion: "PA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.8654, longitude: -75.4360 },
      geoRadius: "25000",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="Car Candy Auto Detailing"
          subtitle="Car detailing in Delaware County, PA including interior cleaning, exterior detailing, and full-service packages to keep your vehicle looking its best."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Car Candy</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            Not your average<br />car wash.
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Premium Products Only</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  We use professional-grade detailing products — no shortcuts, no diluted sprays. Every vehicle gets a showroom-quality finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Obsessive Attention to Detail</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Every inch of your vehicle is meticulously cleaned, polished, and protected. We treat your car like it&apos;s ours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Clock className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Open 7 Days a Week</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  8 AM – 6 PM, every day. We work around your schedule so you don&apos;t have to rearrange yours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Droplets className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Protection That Lasts</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Our detailing doesn&apos;t just clean — it shields your paint, interior, and investment long after you drive away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From deep interior cleaning to full exterior restoration, we offer comprehensive detailing packages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interior Detailing — with background image */}
            <Link href="/services#interior" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[260px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/interiorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-6">
                <div className="text-primary mb-4"><Car className="w-10 h-10" /></div>
                <h3 className="text-xl font-bold text-white mb-1">Interior Detailing</h3>
                <p className="text-primary font-semibold text-sm mb-3">$90–$200</p>
                <p className="text-gray-300 text-sm">Deep cleaning, stain removal, dashboard &amp; console detailing, upholstery treatment.</p>
                <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>

            {/* Exterior Detailing — with background image */}
            <Link href="/services#exterior" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[260px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/exteriorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-6">
                <div className="text-primary mb-4"><Paintbrush className="w-10 h-10" /></div>
                <h3 className="text-xl font-bold text-white mb-1">Exterior Detailing</h3>
                <p className="text-primary font-semibold text-sm mb-3">$80–$160</p>
                <p className="text-gray-300 text-sm">Hand wash, paint decontamination, tire &amp; wheel cleaning, trim restoration.</p>
                <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>

            {/* Paint Enhancement & Protection — with background image */}
            <Link href="/services#addons" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[260px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Paintcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-6">
                <div className="text-primary mb-4"><Wrench className="w-10 h-10" /></div>
                <h3 className="text-xl font-bold text-white mb-1">Paint Enhancement &amp; Protection</h3>
                <p className="text-primary font-semibold text-sm mb-3">From $30</p>
                <p className="text-gray-300 text-sm">Full wax, compound buff &amp; wax, engine detail, floormat replacement.</p>
                <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Proudly serving communities across Delaware County, Pennsylvania.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-4 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group"
              >
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for the <span className="text-primary">Candy Treatment</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Call us today or fill out the form above for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+13023399679" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Call (302) 339-9679
            </a>
            <span className="text-gray-500">or</span>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Aston, PA (Delaware County) &nbsp;|&nbsp; Mon–Sun: 8 AM – 6 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
