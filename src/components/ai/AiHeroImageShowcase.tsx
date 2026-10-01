import Image from "next/image";

export default function AiHeroImageShowcase() {
  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-3xl">
      <Image
        src="/images/ai-agents-hero.png"
        alt="AI agent connected to files, calendars, charts, and tools"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
