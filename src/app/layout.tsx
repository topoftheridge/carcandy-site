import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Car Candy Auto Detailing | Professional Auto Detailing in Aston, PA",
    template: "%s | Car Candy Auto Detailing",
  },
  description:
    "Professional auto detailing services in Aston, PA and Delaware County. Interior & exterior detailing, waxing, paint correction. Call (302) 339-9679.",
  keywords: [
    "auto detailing Aston PA",
    "car detailing Delaware County",
    "interior detailing",
    "exterior detailing",
    "Car Candy Auto Detailing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
