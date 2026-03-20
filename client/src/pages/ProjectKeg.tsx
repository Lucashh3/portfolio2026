import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Beaker, Wind, Brain, Beer, Cloud, Smartphone, Box, Cpu } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";

const challenges = [
  "Breweries were losing up to a third of their beer before it even reached a glass",
  "CO₂ cylinders were expensive, dangerous, and a constant headache for small operations",
  "Owners had zero visibility. They couldn't tell how much beer was left until a keg ran dry",
  "The equipment looked industrial and cold, completely out of place in craft beer bars"
];

const products = [
  {
    icon: Box,
    title: "BeverAitor",
    subtitle: "Smart Cooler",
    description: "I wanted something that felt at home in a craft beer bar, not a vending machine. The result is a stainless steel self-service station with a clean, minimalist look that blends into any space. It's fully autonomous, handles up to 4 beer styles from one tap, and was built to survive Brazil's tropical heat and humidity."
  },
  {
    icon: Beaker,
    title: "AiKeg",
    subtitle: "Smart Keg",
    description: "This was the big breakthrough. Instead of heavy steel kegs that need CO₂, I designed a polymer and fiberglass barrel that's lighter, tougher, and runs on plain air. A double-bag system inside means the beer never touches the barrel walls, so every last drop gets served and there's no heavy cleaning when it comes back."
  },
  {
    icon: Cloud,
    title: "AiCerv Cloud",
    subtitle: "Management Platform",
    description: "Brewery owners kept telling me they felt blind. No idea what was happening with their kegs once they left the brewery. So I built a dashboard that tracks everything in real time: stock levels, pressure, temperature, humidity, even GPS location. It pings you when a keg needs restocking or something looks off."
  },
  {
    icon: Smartphone,
    title: "AiCerv App",
    subtitle: "Consumer Experience",
    description: "The customer side had to be dead simple. Walk up, scan a QR code, pick your beer, pay, done. But I also layered in discovery features: find nearby machines on a map, browse beer menus, join subscription clubs. It turns a quick pour into an ongoing relationship with the brewery."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Research",
    description: "I spent weeks visiting breweries, talking to owners, watching how they struggled with leaky kegs, expensive CO₂ refills, and broken cold chains. The more I listened, the clearer it became: the problem wasn't just one bad product, it was a broken system."
  },
  {
    step: "02",
    title: "Sketches & Ideation",
    description: "I filled notebooks with ideas. What if the keg didn't need gas at all? What if the machine could serve itself? I sketched dozens of form factors, mapped out how hardware and software would talk to each other, and started seeing the shape of something new."
  },
  {
    step: "03",
    title: "3D Prototyping",
    description: "Everything came to life in Fusion 360. I modeled every piece: the cooler's stainless steel body, the keg's polymer shell, the internal bag system. Each part had to work in 40°C heat and 90% humidity, so material choices weren't just aesthetic, they were survival."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "We put prototypes in real bars with real breweries. Some things broke. The pneumatic pressure needed tweaking, a sensor placement was off, the first keg seal didn't hold. Each failure taught us something, and each iteration got us closer."
  },
  {
    step: "05",
    title: "Production & Launch",
    description: "When everything finally clicked (hardware, firmware, cloud, app) we launched. Seeing a brewery owner pour his first beer through the system and realize he could track every drop from his phone... that was the moment it all became real."
  }
];

const results = [
  { value: "30%", label: "Reduction in beer waste" },
  { value: "40+", label: "Craft breweries adopted" },
  { value: "2×", label: "Keg lifespan increase" },
  { value: "1", label: "Patent registered" }
];

const galleryImages = [
  "/images/keg-1.jpg",
  "/images/keg-2.jpg",
  "/images/keg-3.jpg",
  "/images/keg-4.jpg",
  "/images/keg.png",
  "/images/cooler.png",
  "/images/dash.png",
  "/images/login_page_saas.png"
];

export default function ProjectKeg() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
              <span>IoT · Hardware · Software</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
              AiCerv: How I Built a Smart Beer System from the Ground Up
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Craft breweries were losing beer, money, and customers to outdated equipment. I designed everything (the hardware, the kegs, the cloud platform, the app) to fix that. The result is a patented ecosystem now used by over 40 breweries.
            </p>
          </div>
        </section>

        {/* Hero Video */}
        <section className="border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="aspect-video overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/UJOou23kyds"
                title="Sistema Inteligente de Kegs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">The Project</h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                <p className="text-xl leading-relaxed text-foreground/90">
                  It started with a simple question: why is it so hard for small breweries to get their beer to people? The more I dug in, the more I realized the entire chain was broken, from how beer is stored to how it's served. So instead of fixing one piece, I decided to rethink the whole thing.
                </p>
                <p className="text-lg leading-relaxed text-foreground/70">
                  AiCerv became a full ecosystem: smart kegs that don't need CO₂, a self-service cooler that pours the perfect glass, a cloud dashboard that gives brewery owners total visibility, and an app that makes buying craft beer as easy as scanning a QR code. I designed every layer, from the physical hardware in Fusion 360 to the digital experience on screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Role Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">My Role</h2>
              </div>
              <div className="md:col-span-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Industrial Design</h3>
                    <p className="text-muted-foreground text-sm">I shaped every physical piece: choosing materials, defining the form factor, and building production-ready 3D models for the cooler and kegs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">IoT Architecture</h3>
                    <p className="text-muted-foreground text-sm">I figured out where to place each sensor, how to track kegs via RFID and GPS, and how to pipe all that data to the cloud reliably.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">UX/UI Design</h3>
                    <p className="text-muted-foreground text-sm">I designed both sides: the operator dashboard where breweries manage everything, and the consumer app where people find, order, and pay for beer.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Product Strategy</h3>
                    <p className="text-muted-foreground text-sm">I talked to dozens of brewery owners to understand what was really hurting them, then used those insights to define what we should build and why.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Challenges</h2>

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

        {/* Products Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">What I Built</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Four products that work together as one system, each one solving a piece of the puzzle.</p>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="border border-border p-8 group hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <product.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{product.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">How It Came Together</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">It wasn't a straight line. Here's how the project actually unfolded.</p>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1">
                    <span className="text-3xl font-bold text-primary/30">{step.step}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Impact & Results</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {results.map((result, index) => (
                <div key={index}>
                  <span className="text-4xl md:text-5xl font-bold text-primary">{result.value}</span>
                  <p className="text-muted-foreground mt-2">{result.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border space-y-3">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Registered Patent:</span>{" "}
                <span className="font-mono">BR 10 2022 010428 0</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Eco-friendly impact:</span>{" "}
                No more CO₂ cylinders, no harsh chemical cleaning, and way less back-and-forth shipping. The system is lighter on the planet by design, not as an afterthought.
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

        {/* Key Takeaway Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight">Key Takeaway</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl leading-relaxed text-foreground/90">
                  AiCerv changed how I work. Before this project, I thought of hardware and software as separate worlds. Building something where a physical keg talks to a cloud dashboard that triggers a notification on someone's phone... that forced me to think in systems, not silos. It's a mindset I bring to everything I design now.
                </p>
              </div>
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
                I love working on products that live at the intersection of physical and digital. If that sounds like your kind of challenge, I'd love to hear about it.
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
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
