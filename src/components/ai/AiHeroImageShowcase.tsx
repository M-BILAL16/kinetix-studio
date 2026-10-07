import Image from "next/image";

export default function AiHeroImageShowcase() {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
      <Image
        src="/images/ai-agents-hero.jpg"
        alt="AI agent core connected to calendar, email, charts, and tools"
        fill
        priority
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />
    </div>
  );
}
