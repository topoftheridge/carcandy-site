import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="relative text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 lg:pt-32 lg:pb-48 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span className="text-primary">Car Candy</span>{" "}
            <span className="text-white">{title.replace("Car Candy ", "")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition shadow-lg text-lg"
              >
                GET A FREE QUOTE
              </Link>
              <a
                href="tel:+16107260151"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg"
              >
                CALL (610) 726-0151
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
