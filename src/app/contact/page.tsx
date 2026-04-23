import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Car Candy Auto Detailing",
  description: "Get in touch with Car Candy Auto Detailing in Aston, PA. Call (302) 339-9679 or (610) 757-7512. Open 7 days a week, 8 AM – 6 PM.",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to give your vehicle the Car Candy treatment? Reach out today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <Phone className="w-6 h-6" />, label: "Phone", content: (
                <div className="space-y-1">
                  <a href="tel:+13023399679" className="block text-white hover:text-primary transition font-semibold">(302) 339-9679</a>
                  <a href="tel:+16107577512" className="block text-white hover:text-primary transition font-semibold">(610) 757-7512</a>
                </div>
              )},
              { icon: <Mail className="w-6 h-6" />, label: "Email", content: (
                <a href="mailto:carcandyautodetailing@gmail.com" className="text-white hover:text-primary transition">carcandyautodetailing@gmail.com</a>
              )},
              { icon: <MapPin className="w-6 h-6" />, label: "Location", content: <span className="text-white">Aston, PA (Delaware County)</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">Monday – Sunday: 8:00 AM – 6:00 PM</span> },
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, label: "Instagram", content: (
                <a href="https://www.instagram.com/carcandyautodetailing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  @carcandyautodetailing
                </a>
              )},
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <Link href="/#quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Get a Free Quote
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24476.837!2d-75.44!3d39.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e4d2c9c58a9f%3A0x1d1b3e6c6b40c8a0!2sAston%2C%20PA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Car Candy Auto Detailing - Aston, PA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
