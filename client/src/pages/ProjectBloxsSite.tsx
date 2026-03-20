import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Layout, Users, Shield, Zap, BarChart3, Target } from "lucide-react";
import { Link } from "wouter";

const challenges = [
  "Communicating complex capital markets products in a way anyone can understand",
  "Serving two completely different audiences: issuers (sell side) and investors (buy side)",
  "Conveying institutional credibility without feeling stiff or corporate",
  "Dense regulatory framework (CVM 88, 160, 175) that needs to be visible but not intimidating"
];

const solutions = [
  { icon: Layout, title: "Clear Architecture", description: "Navigation segmented by audience. Issuers and investors find separate, dedicated paths" },
  { icon: Users, title: "Adapted Language", description: "Same product, different messaging. Sell side wants scale, buy side wants opportunity" },
  { icon: Shield, title: "Visible Trust", description: "ANBIMA seals, security certifications, regulated subsidiaries. All on the homepage" },
  { icon: Zap, title: "Strategic CTAs", description: "Schedule a demo, create an account, talk to the team. Always a clear next step" }
];

const processSteps = [
  { step: "01", title: "Benchmark", description: "Analyzed competitors and references across the financial sector" },
  { step: "02", title: "Architecture", description: "Defined information hierarchy and flows per persona" },
  { step: "03", title: "Wireframes", description: "Structured pages and validated with stakeholders" },
  { step: "04", title: "Visual Design", description: "Applied brand identity and built the component system" },
  { step: "05", title: "Implementation", description: "Developed with a focus on performance and SEO" }
];

const designDecisions = [
  {
    decision: "Primary blue (#2E61FF)",
    rationale: "Conveys trust and technology. Standard in finance, but with a more vibrant tone to stand out"
  },
  {
    decision: "Glassmorphism cards",
    rationale: "Modern look without sacrificing readability. Sets it apart from traditional bank websites"
  },
  {
    decision: "Expandable navigation",
    rationale: "Lots of products and services. Mega dropdown menu organizes everything without cluttering the main bar"
  },
  {
    decision: "Testimonial carousel",
    rationale: "Strong social proof with real names. Rotation keeps the section dynamic"
  }
];

export default function ProjectBloxsSite() {
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
              <span>Web Design</span>
              <span>·</span>
              <span>B2B Fintech</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
              Designing a Dual-Journey Experience for a Capital Markets Platform
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              How do you sell the same complex financial platform to two completely different audiences without oversimplifying or overcomplicating? That was the challenge.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="border-b border-border">
          <img
            src="/images/bloxswebpage.png"
            alt="Bloxs Institutional Website"
            className="w-full h-auto object-cover"
          />
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
                  Bloxs is a technology platform for capital markets. It handles everything from digital origination to securitization, distribution, and fiduciary management. All of it runs through regulated subsidiaries and ANBIMA-certified entities.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The website had to explain this entire chain of services to two very different groups: issuers looking to raise capital (boutiques, asset managers) and institutional investors looking for opportunities. Different audiences, different needs, same address.
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
                <p className="text-muted-foreground mt-2">Product Designer</p>
                <p className="text-sm text-muted-foreground mt-4">
                  In collaboration with{" "}
                  <a
                    href="https://www.insany.design/pt-BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Insany Design
                  </a>
                </p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Defined the information architecture for two distinct audiences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Created a visual hierarchy that prioritizes without hiding</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Translated technical products into clear value propositions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Balanced institutional credibility with a modern, approachable look</span>
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
              B2B fintech websites in capital markets usually fall into one of two extremes: either so technical that only specialists understand them, or so generic they say nothing at all. Bloxs needed a middle ground.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              On top of that, the company operates with 4 regulated subsidiaries, holds ANBIMA membership in 4 categories, and serves both issuers and investors. How do you show all of that without turning the site into an endless catalog?
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

        {/* Two Audiences Section */}
        <section className="py-24 border-b border-border bg-card/30">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Two Audiences, One Homepage</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              The split happens right away. Who you are defines what you see first.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-mono text-blue-400">SELL SIDE</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Issuers</h3>
                <p className="text-muted-foreground mb-6">
                  Boutiques, asset managers, and securitizers looking to structure and distribute deals.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Full platform for structuring and issuing</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Compliance with CVM 88, 160, 175</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Coordinated distribution and digital roadshow</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 border border-border bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm font-mono text-purple-400">BUY SIDE</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Institutional Investors</h3>
                <p className="text-muted-foreground mb-6">
                  Funds, family offices, and asset managers looking for investment opportunities.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Deal discovery with smart filters</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Direct interaction with issuers</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Decision-ready data: documents, metrics, track record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Design Decisions</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <div key={index} className="group">
                  <solution.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="font-semibold mb-6">Why these choices:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {designDecisions.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-primary font-mono text-sm">0{index + 1}</span>
                    <div>
                      <p className="font-medium mb-1">{item.decision}</p>
                      <p className="text-sm text-muted-foreground">{item.rationale}</p>
                    </div>
                  </div>
                ))}
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

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-6 mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's talk
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I like making complex things feel simple. If you have a product that needs that kind of thinking, I'd love to hear about it.
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
    </div>
  );
}
