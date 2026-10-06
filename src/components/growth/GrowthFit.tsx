const FITS = [
  {
    number: "01",
    title: "People nearby should find you",
    text: "You sell in a town or a city, and most new customers still hear about you by chance.",
  },
  {
    number: "02",
    title: "Ads are on, but the picture is fuzzy",
    text: "Money is already going out, and you cannot tell which part is bringing people in.",
  },
  {
    number: "03",
    title: "The site is up, the phone is quiet",
    text: "You have a website, but it does not turn visits into calls, bookings, or walks through the door.",
  },
  {
    number: "04",
    title: "You want one partner, not five",
    text: "Search, ads, words, and the monthly numbers should sit with the same team.",
  },
  {
    number: "05",
    title: "Paying for campaigns with no results",
    text: "You keep spending on ads and posts, but you cannot show a clear return in calls, bookings, or sales.",
  },
  {
    number: "06",
    title: "Getting leads that never convert",
    text: "Inquiries come in, then go quiet. The people reaching out are not the ones who actually buy.",
  },
];

export default function GrowthFit() {
  return (
    <section className="border-b border-black/10 bg-[#0E0E10] py-28 text-[#FAF9F5] site-gutter">
      <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          A GOOD FIT <br />
          <span className="text-[#0047FF]">if this is you.</span>
        </h2>
        <p className="max-w-sm text-left font-mono text-xs leading-relaxed text-white/60 md:text-right">
          LOCAL SHOPS, CLINICS, AND SERVICE BUSINESSES THAT WANT CUSTOMERS THEY CAN ACTUALLY SEE.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FITS.map((item) => (
          <article key={item.number} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <span className="font-mono text-xs font-bold tracking-widest text-[#CEFF00]">{item.number}</span>
            <h3 className="mt-6 font-sans text-2xl font-black leading-tight tracking-tight sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-white/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
