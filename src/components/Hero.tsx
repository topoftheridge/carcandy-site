import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark-lighter" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-primary">Car Candy</span>{" "}
            <span className="text-white">{title.replace("Car Candy ", "")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition shadow-lg text-lg"
              >
                GET A FREE QUOTE
              </Link>
              <a
                href="tel:+13023399679"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg"
              >
                CALL (302) 339-9679
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
