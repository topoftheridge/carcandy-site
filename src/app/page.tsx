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
      </HeroBackground>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-32 pb-12">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-4 bg-primary/15 rounded-3xl blur-2xl" />
          <div className="relative">
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-primary">Car Candy</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Premium Products", desc: "We use only professional-grade detailing products for a showroom finish every time." },
              { icon: <Shield className="w-8 h-8" />, title: "Attention to Detail", desc: "Every inch of your vehicle is meticulously cleaned, polished, and protected." },
              { icon: <Clock className="w-8 h-8" />, title: "Convenient Service", desc: "Open 7 days a week, 8 AM – 6 PM. We work around your schedule." },
              { icon: <Droplets className="w-8 h-8" />, title: "Lasting Protection", desc: "Our detailing doesn't just clean — it protects your paint, interior, and investment." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-dark-lighter border border-white/5 hover:border-primary/30 transition">
                <div className="mb-4 flex justify-center text-primary">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
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
            {[
              { icon: <Car className="w-10 h-10" />, title: "Interior Detailing", price: "$90–$200", desc: "Deep cleaning, stain removal, dashboard & console detailing, upholstery treatment.", href: "/services#interior" },
              { icon: <Paintbrush className="w-10 h-10" />, title: "Exterior Detailing", price: "$80–$160", desc: "Hand wash, paint decontamination, tire & wheel cleaning, trim restoration.", href: "/services#exterior" },
              { icon: <Wrench className="w-10 h-10" />, title: "Add-Ons", price: "From $30", desc: "Full wax, compound buff & wax, engine detail, floormat replacement.", href: "/services#addons" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="group p-6 rounded-xl bg-dark-lighter border border-white/5 hover:border-primary/50 transition">
                <div className="text-primary mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{s.price}</p>
                <p className="text-gray-400 text-sm">{s.desc}</p>
                <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">Learn More →</span>
              </Link>
            ))}
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
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name}</span>
                <span className="block text-gray-500 text-xs mt-1">PA</span>
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
            <a href="tel:+16107577512" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Call (610) 757-7512
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Aston, PA (Delaware County) &nbsp;|&nbsp; Mon–Sun: 8 AM – 6 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
