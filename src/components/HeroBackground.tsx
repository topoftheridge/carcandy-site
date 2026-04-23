import Image from "next/image";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/heropic1.jpg"
        alt=""
        fill
        className="object-cover object-right-center sm:object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative">{children}</div>
    </div>
  );
}
