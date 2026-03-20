import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Layers, UserCheck, Shield, GitBranch, Eye, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Lightbox } from "@/components/ui/lightbox";

const heroImages = [
  "/images/HomeWL01.jpg",
  "/images/produto.png",
  "/images/signin.png",
];

const challenges = [
  "CVM 88 caps how much each person can invest per year. CVM 160 doesn't. Two different logics, one shared codebase",
  "What can you show to someone who hasn't logged in? Depends on which regulation applies. The line is blurry",
  "Consent forms, KYC, e-signatures, payments. Every step needs an audit trail",
  "What if a document changes mid-offering? Old version or new? Does the investor need to re-accept?"
];

const solutions = [
  { icon: Layers, title: "Separated Layers", description: "Brand is customizable. Rules are untouchable. Layout is reusable across both CVM 88 and 160" },
  { icon: UserCheck, title: "Smart Eligibility", description: "Annual limit? Checked. Investor profile? Validated. Everything happens before the invest button" },
  { icon: Shield, title: "Built-in Audit Trail", description: "Every consent has a timestamp, document version, and step-by-step log. Ready for regulatory review" },
  { icon: GitBranch, title: "Adaptive Flow", description: "Same engine, different flags. CVM 88 checks limits, CVM 160 doesn't. No code duplication" }
];

const processSteps = [
  { step: "01", title: "Understand", description: "Sat down with legal, compliance, and ops teams" },
  { step: "02", title: "Structure", description: "Defined what changes and what stays fixed" },
  { step: "03", title: "Map Flows", description: "Charted every possible user path" },
  { step: "04", title: "Design Screens", description: "Built components that work across any partner" },
  { step: "05", title: "Test", description: "Validated edge cases with engineering" }
];

const flowSteps = [
  {
    number: "01",
    title: "Browse offers",
    description: "All investment offers in one place. Filter by term, risk, type. You don't need to be an expert to understand what's available.",
    icon: Eye
  },
  {
    number: "02",
    title: "Understand the offer",
    description: "What it is, expected return, risks, maturity date. Everything on one page, documents included.",
    icon: Layers
  },
  {
    number: "03",
    title: "Check eligibility",
    description: "A few quick questions to confirm this offer fits your profile. Answer right away.",
    icon: UserCheck
  },
  {
    number: "04",
    title: "Reserve",
    description: "Pick the amount, review the key points, confirm. No surprises, no hidden fine print.",
    icon: CheckCircle
  },
  {
    number: "05",
    title: "Track",
    description: "Once reserved, just follow along. Updated status, stored documents, clear next steps.",
    icon: GitBranch
  }
];

const layers = [
  {
    title: "The Offer",
    subtitle: "What you're buying",
    items: [
      "Everything about the offer on one page",
      "Documents always accessible, never buried",
      "'Before you invest, know this...' section",
      "Easy to compare with other offers"
    ],
    color: "bg-blue-500"
  },
  {
    title: "Your Profile",
    subtitle: "Are you eligible?",
    items: [
      "Straightforward questions, no legal jargon",
      "Clear answer: yes, no, or here's what's missing",
      "Progress bar showing what's left",
      "If you can't invest, explains why"
    ],
    color: "bg-green-500"
  },
  {
    title: "The Rules",
    subtitle: "What can't be skipped",
    items: [
      "Required consents and confirmations",
      "Every step of the journey is logged",
      "Everything stored for audit",
      "Document version control"
    ],
    color: "bg-purple-500"
  }
];

const edgeCases = [
  "Investor hit their annual limit under CVM 88? Block the investment, explain why, suggest CVM 160 offers instead",
  "Prospectus updated during fundraising? Force re-consent with the new version, log everything",
  "Want to see a return simulation without logging in? OK under CVM 160 with disclaimer, more restricted under CVM 88",
  "Is the e-signature valid? Check specific requirements for each document type",
  "Offer exempt from registration? Still has mandatory documents. Show what's needed"
];

const regulationComparison = [
  {
    aspect: "Investment Limit",
    cvm88: "Annual limit per investor. Needs to be calculated, persisted, and checked",
    cvm160: "No limit. Qualified investor or not, they can invest"
  },
  {
    aspect: "Logged-Out View",
    cvm88: "Limited info. Avoid direct calls to action for investment",
    cvm160: "More disclosure allowed, with mandatory risk warnings"
  },
  {
    aspect: "Required Documents",
    cvm88: "Legal docs + operational data. Version control required",
    cvm160: "Formal prospectus + communications. Available even logged out (with disclaimer)"
  },
  {
    aspect: "Investment Flow",
    cvm88: "Login > KYC > Eligibility > Consents (individual checkbox) > Payment",
    cvm160: "Login > KYC > Prospectus consent > E-signature > Payment"
  }
];

const galleryImages = [
  "/images/HomeWL01.jpg",
  "/images/produto.png",
  "/images/signin.png",
];

export default function ProjectBloxs() {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentGalleryIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-12"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="font-mono">2024</span>
              <span>·</span>
              <span>Product Design</span>
              <span>·</span>
              <span>B2B Fintech</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
              Turning Complex Financial Compliance into a Seamless User Journey
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Financial regulations usually kill the user experience. I made sure they didn't. I took heavy legal rules and turned them into a portal that actually makes sense for everyday investors.
            </p>
          </div>
        </section>

        {/* Hero Image - Ken Burns Effect with Image Rotation */}
        <section className="relative h-[70vh] overflow-hidden border-b border-border">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: 1,
                scale: 1.05,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.5 },
                scale: { duration: 8, ease: "easeOut" },
              }}
            >
              <img
                src={heroImages[currentImage]}
                alt="White Label Portal"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Overview Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">The Project</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl leading-relaxed text-foreground/90 mb-6">
                  I designed a white-label portal where different partners could distribute investment offers under their own brand, without each one having to reinvent the wheel. The investor experience stays consistent no matter who's offering it.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  It's not just swapping logos and colors. The real challenge was building something that scales: partners come in, set up their brand, and the entire compliance structure is already running (CVM 88 for crowdfunding, CVM 160 for public offerings). All they had to do was plug in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Role Section */}
        <section className="py-24 border-b border-border bg-card/30">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">My Role</h2>
                <p className="text-muted-foreground mt-2">Product Designer (B2B/Fintech)</p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Took dense regulatory rules and turned them into screens people actually understand</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Designed a journey that works the same across all partners</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Built reusable components and patterns, no rework needed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Worked side by side with legal, product, and engineering to validate every detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6">The Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              Distributing investment offers is a regulatory minefield. CVM 88 requires one thing, CVM 160 requires another. Investors need KYC, individual consent checkboxes, valid e-signatures, payment proof. Every single step needs to be logged for auditing.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Then there's the logged-out experience: what can you show? Return simulations? Only with a disclaimer. Direct call to invest? Depends on the regulation. Each partner wants their own brand on it, but none of these rules can break.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="border-l border-border pl-6">
                  <span className="text-sm font-mono text-muted-foreground mb-2 block">0{index + 1}</span>
                  <p className="text-lg">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Layers Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">The Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              I separated what each partner can customize from what can never be touched. That way, everyone gets to put their own face on the product, but nobody skips the steps that make sure investors understand where their money is going.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {layers.map((layer, index) => (
                <div key={index} className="border border-border p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className={`w-3 h-3 rounded-full ${layer.color} mb-4`} />
                  <h3 className="text-lg font-semibold mb-1">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{layer.subtitle}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-muted-foreground">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulation Comparison Section */}
        <section className="py-24 border-b border-border bg-card/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">CVM 88 vs CVM 160</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Two regulations, two different logics. The challenge was building one engine that handles both cleanly.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-6 text-sm font-medium text-muted-foreground">Aspect</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-blue-400">CVM 88 (Crowdfunding)</th>
                    <th className="text-left py-4 pl-6 text-sm font-medium text-purple-400">CVM 160 (Public Offering)</th>
                  </tr>
                </thead>
                <tbody>
                  {regulationComparison.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 pr-6 font-medium">{row.aspect}</td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">{row.cvm88}</td>
                      <td className="py-4 pl-6 text-muted-foreground text-sm">{row.cvm160}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 border border-border bg-background">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Insight:</span> Most of the flow is shared.
                What changes are the specific checks (limits, consent type, disclosure level).
                Reusable components with context flags.
              </p>
            </div>
          </div>
        </section>

        {/* Main Flow Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Main Flow</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              From "let me see what's available" to "I invested." Five steps that guide without pushing.
            </p>

            <div className="space-y-6">
              {flowSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-background border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-bold text-primary/30">{step.number}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <step.icon className="h-6 w-6 text-muted-foreground/50 flex-shrink-0 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Design Decisions</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="group">
                  <solution.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="font-semibold mb-6">Principles that guided my decisions:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Consents grouped in one step, but each term gets its own checkbox. Logged separately</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Logged-out view shows only what the regulation allows. CVM 160 is more permissive than CVM 88</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Return simulations only with standard disclaimer. No exceptions</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Versioned documents. Changed? Mandatory re-consent, with the previous version logged</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Edge Cases */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">When Things Go Sideways</h2>
                <p className="text-muted-foreground mt-2">
                  The happy path is easy. The hard part is when things go off script.
                </p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4">
                  {edgeCases.map((caseItem, index) => (
                    <li key={index} className="flex gap-3 text-lg">
                      <span className="text-primary font-mono text-sm">0{index + 1}</span>
                      <span>{caseItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Process</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index}>
                  <span className="text-3xl font-bold text-primary/30 mb-2 block">{step.step}</span>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Results</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">Simplified auditing:</span> every consent carries a timestamp,
                  document version, and investor ID. Ready for regulatory inspection.
                </p>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">Automated annual limits:</span> the system calculates,
                  persists, and blocks when needed. No more manual spreadsheets.
                </p>
              </div>
              <div>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">One engine, two regulations:</span> same base flow handles
                  CVM 88 and CVM 160 with context flags. Zero code duplication.
                </p>
                <p className="text-lg text-foreground/90">
                  <span className="font-medium">Fast partner onboarding:</span> set up the brand,
                  connect the offers, compliance is already running. No custom project needed.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Compliance:</span>{" "}
                <span className="font-mono">CVM 88 · CVM 160</span>
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="aspect-square overflow-hidden bg-card cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-6 mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's talk
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I enjoy turning complex systems into experiences that feel simple. If you're working on something like that, I'd love to hear about it.
              </p>
              <a
                href="/#contact"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        images={galleryImages}
        currentIndex={currentGalleryIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
