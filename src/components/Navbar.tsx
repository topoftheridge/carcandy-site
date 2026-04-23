"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { locations } from "@/data/locations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[120px] lg:h-[130px]">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logoheader.png" alt="Car Candy Auto Detailing" width={170} height={100} className="h-auto w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-12">
            <div className="flex items-center gap-10 mr-auto ml-8">
              <Link href="/" className="text-gray-300 hover:text-primary transition font-medium">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-primary transition font-medium">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-primary transition font-medium">Services</Link>
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="text-gray-300 hover:text-primary transition font-medium flex items-center gap-1">
                  Areas <ChevronDown className="w-4 h-4" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-dark-lighter border border-white/10 rounded-lg shadow-xl py-2 w-56">
                      {locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/${loc.slug}`}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary hover:text-white transition"
                        >
                          {loc.name}, PA
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact" className="text-gray-300 hover:text-primary transition font-medium">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+13023399679" className="text-primary hover:text-primary-light transition font-bold text-lg flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                (302) 339-9679
              </a>
              <Link
                href="/#quote"
                className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition shadow-sm"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block font-medium text-gray-300 hover:text-primary" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" className="block font-medium text-gray-300 hover:text-primary" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/services" className="block font-medium text-gray-300 hover:text-primary" onClick={() => setMobileOpen(false)}>Services</Link>
            <div>
              <p className="font-medium text-gray-300 mb-2">Areas Served</p>
              <div className="pl-4 space-y-2">
                {locations.map((loc) => (
                  <Link key={loc.slug} href={`/${loc.slug}`} className="block text-sm text-gray-400 hover:text-primary" onClick={() => setMobileOpen(false)}>
                    {loc.name}, PA
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="block font-medium text-gray-300 hover:text-primary" onClick={() => setMobileOpen(false)}>Contact</Link>
            <a href="tel:+13023399679" className="block font-bold text-primary text-lg">📞 (302) 339-9679</a>
            <Link href="/#quote" className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg font-semibold" onClick={() => setMobileOpen(false)}>GET A QUOTE</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
