import {
  CalendarCheck,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  Phone,
  Receipt,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface OfferSystem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  timeline: string;
  overview: string;
  deliverables: string[];
  bestFor: string;
  highlight: string;
  accent: string;
}

const OFFERS: OfferSystem[] = [
  {
    id: "file-analysis",
    number: "01",
    title: "File Analysis Agent",
    tagline: "Upload documents, sheets, or images. The agent reads them and does the job you ask for.",
    badge: "FILE ANALYSIS",
    timeline: "READY TO DEPLOY",
    overview:
      "Give the agent a PDF, Word file, spreadsheet, or photo. It reads the file, finds the important details, answers your questions, and completes the task you want.",
    deliverables: [
      "Reads PDFs, documents, spreadsheets, and images",
      "Finds names, prices, dates, and key details",
      "Answers questions about the file in plain language",
      "Saves the result in the format your team needs",
    ],
    bestFor: "Any business that receives files and still reads them by hand.",
    highlight: "Hours of file reading done in minutes",
    accent: "#0047FF",
  },
  {
    id: "customer-chat",
    number: "02",
    title: "Customer Support Agent",
    tagline: "Answers customer questions on WhatsApp and your website, then sends hard cases to your team.",
    badge: "SUPPORT",
    timeline: "READY TO DEPLOY",
    overview:
      "This agent handles live chats, not phone calls. It replies on WhatsApp, your website chat, and SMS, shares the right information, collects details, and passes difficult questions to a person.",
    deliverables: [
      "Replies in WhatsApp, website chat, and SMS",
      "Shares prices, timings, and service details",
      "Collects the customer's name and contact",
      "Sends hard chat questions to your team",
    ],
    bestFor: "Shops, clinics, and service businesses that get the same questions in chat.",
    highlight: "Chat customers get an answer in seconds, not hours",
    accent: "#0047FF",
  },
  {
    id: "sales-follow-up",
    number: "03",
    title: "Sales & Follow-Up Agent",
    tagline: "Talks to new leads, asks useful questions, and books meetings.",
    badge: "SALES",
    timeline: "READY TO DEPLOY",
    overview:
      "When someone shows interest, the agent starts the conversation, asks what they need, follows up if they go quiet, and books a meeting with people who are ready.",
    deliverables: [
      "Greets every new lead",
      "Asks about their need and budget",
      "Sends reminders until they reply",
      "Books meetings on your calendar",
    ],
    bestFor: "Businesses that lose sales because follow-up stops too early.",
    highlight: "More leads turn into booked meetings",
    accent: "#0047FF",
  },
  {
    id: "operations",
    number: "04",
    title: "Business Operations Agent",
    tagline: "Handles repeated office work and keeps your tools updated.",
    badge: "DAILY WORK",
    timeline: "READY TO DEPLOY",
    overview:
      "The agent takes care of the same tasks your team does every day. It updates records, creates reports, sends reminders, and keeps your business tools in sync.",
    deliverables: [
      "Updates customer and order records",
      "Creates simple daily reports",
      "Sends reminders to the team",
      "Connects your apps so nothing is typed twice",
    ],
    bestFor: "Teams spending the day on copy-paste and reminders.",
    highlight: "Staff time goes back to real work",
    accent: "#0047FF",
  },
  {
    id: "invoices",
    number: "05",
    title: "Booking and Invoicing Agent",
    tagline: "Books the job, makes the bill, and reminds the customer to pay.",
    badge: "BOOKING",
    timeline: "READY TO DEPLOY",
    overview:
      "The agent confirms the booking, creates the invoice, checks the amount and due date, and sends a reminder when the bill is still unpaid.",
    deliverables: [
      "Confirms the booking details",
      "Creates the invoice",
      "Checks amount, date, and customer",
      "Sends reminders for unpaid bills",
    ],
    bestFor: "Businesses that book work and then chase the bill by hand.",
    highlight: "Bookings and bills stay in one place",
    accent: "#0047FF",
  },
  {
    id: "booking",
    number: "06",
    title: "Appointments and Scheduling Agent",
    tagline: "Finds an open time, sets the appointment, and sends a reminder.",
    badge: "SCHEDULE",
    timeline: "READY TO DEPLOY",
    overview:
      "The agent talks to the customer, checks open times, books the appointment, and helps them change it if plans change.",
    deliverables: [
      "Checks your open times",
      "Books the appointment",
      "Sends a confirmation",
      "Handles reschedule requests",
    ],
    bestFor: "Clinics, salons, consultants, and any booked service.",
    highlight: "Fewer empty slots and missed bookings",
    accent: "#0047FF",
  },
  {
    id: "review",
    number: "07",
    title: "Work Review Agent",
    tagline: "Checks documents and records for missing or wrong details.",
    badge: "QUALITY",
    timeline: "READY TO DEPLOY",
    overview:
      "The agent reviews a document or record, looks for blank fields and mistakes, and tells your team what to fix before it goes out.",
    deliverables: [
      "Checks required fields",
      "Spots wrong or missing details",
      "Lists what needs a fix",
      "Lets a person approve the final version",
    ],
    bestFor: "Teams that send quotes, contracts, or reports to customers.",
    highlight: "Fewer mistakes reach the customer",
    accent: "#0047FF",
  },
  {
    id: "support-calls",
    number: "08",
    title: "Inbound/Outbound Calling Agent",
    tagline: "Answers incoming calls and makes outgoing calls, then sends hard cases to your team.",
    badge: "CALLING",
    timeline: "READY TO DEPLOY",
    overview:
      "The agent answers calls that come in and places calls that need to go out. It handles the simple ones and passes the hard ones to your team.",
    deliverables: [
      "Answers incoming calls",
      "Makes follow-up and reminder calls",
      "Collects the caller's details",
      "Transfers difficult calls to your team",
    ],
    bestFor: "Teams that both answer the phone and need to call customers back.",
    highlight: "Incoming and outgoing calls are both covered",
    accent: "#0047FF",
  },
];

const CARD_LOOK: Record<
  string,
  { card: string; badge: string; text: string; number: string; iconWrap: string; icon: LucideIcon }
> = {
  "file-analysis": {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: FileSearch,
  },
  "customer-chat": {
    card: "bg-[#0E0E10] text-[#FAF9F5]",
    badge: "bg-[#CEFF00] text-[#0E0E10]",
    text: "text-white/70",
    number: "text-white/10",
    iconWrap: "bg-[#CEFF00] text-[#0E0E10]",
    icon: MessageCircle,
  },
  "sales-follow-up": {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: Sparkles,
  },
  operations: {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: Workflow,
  },
  invoices: {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: Receipt,
  },
  booking: {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: CalendarCheck,
  },
  review: {
    card: "bg-white text-[#0E0E10] border border-black/10",
    badge: "bg-[#0047FF] text-white",
    text: "text-[#6E6E78]",
    number: "text-[#0047FF]/12",
    iconWrap: "bg-[#0047FF] text-white",
    icon: ClipboardCheck,
  },
  "support-calls": {
    card: "bg-[#0E0E10] text-[#FAF9F5]",
    badge: "bg-[#0047FF] text-white",
    text: "text-white/70",
    number: "text-[#CEFF00]/20",
    iconWrap: "bg-[#0047FF] text-white",
    icon: Phone,
  },
};

export default function AutomationOfferSystems() {
  return (
    <section id="signature-offers" className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            AGENTS FOR THE <br />
            <span className="text-[#0047FF]">
              daily work.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            EIGHT AGENTS THAT READ FILES, SUPPORT CUSTOMERS, FOLLOW UP,
            SCHEDULE APPOINTMENTS, HANDLE BOOKINGS AND BILLS, AND CALL IN OR OUT.
          </p>
        </div>
      </div>

      {/* 4 Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {OFFERS.map((offer) => {
          const look = CARD_LOOK[offer.id];
          const Icon = look.icon;
          return (
            <article
              key={offer.id}
              className={`relative flex min-h-[250px] flex-col overflow-hidden rounded-3xl p-6 ${look.card}`}
            >
              <span className={`pointer-events-none absolute -right-1 -top-5 text-7xl font-black leading-none ${look.number}`}>
                {offer.number}
              </span>
              <div className="relative flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest ${look.badge}`}>
                  {offer.badge}
                </span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${look.iconWrap}`}>
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="relative mt-auto pt-8 text-xl font-black font-sans leading-tight tracking-tight">
                {offer.title}
              </h3>
              <p className={`relative mt-3 text-sm font-sans leading-snug ${look.text}`}>
                {offer.tagline}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
