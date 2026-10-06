const STEPS = [
  {
    number: "01",
    title: "We learn the business",
    text: "You tell us what you sell, who buys it, and where those people usually look.",
  },
  {
    number: "02",
    title: "We set the base",
    text: "Tracking, your Google listing, and the first pages are ready before any money is spent.",
  },
  {
    number: "03",
    title: "The work goes out",
    text: "Ads, emails, and new pages run on a steady rhythm through the month.",
  },
  {
    number: "04",
    title: "You see the month",
    text: "We sit with the numbers and decide what to keep, stop, or try next.",
  },
];

export default function GrowthMonth() {
  return (
    <section className="border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
      <div className="mb-16 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl lg:text-7xl">
          HOW A MONTH <br />
          <span className="text-[#0047FF]">with us.</span>
        </h2>
        <p className="max-w-sm text-left font-mono text-xs leading-relaxed text-[#6E6E78] md:text-right">
          FOUR STEPS. WE LEARN THE BUSINESS, SET THE BASE, KEEP THE WORK MOVING, AND SHOW YOU THE
          MONTH.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {STEPS.map((step) => (
          <li key={step.number} className="rounded-3xl border border-black/10 bg-white p-6">
            <span className="font-sans text-5xl font-black leading-none text-[#0047FF]">{step.number}</span>
            <h3 className="mt-8 font-sans text-2xl font-black leading-tight tracking-tight text-[#0E0E10]">
              {step.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#6E6E78]">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
