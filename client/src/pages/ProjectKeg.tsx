import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Beaker, Wind, Brain, Beer } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";

const challenges = [
  "Armazenamento ineficiente",
  "Alto custo com cilindros de CO₂",
  "Falta de controle sobre consumo",
  "Estética pouco atrativa nos bares"
];

const solutions = [
  { icon: Beaker, title: "Materiais poliméricos", description: "Resistentes e leves para maior durabilidade" },
  { icon: Wind, title: "Dispensação por ar", description: "Sistema pressurizado com ar atmosférico" },
  { icon: Brain, title: "Sensorização inteligente", description: "Dashboard de monitoramento em tempo real" },
  { icon: Beer, title: "Design industrial", description: "Estética minimalista e funcional" }
];

const processSteps = [
  { step: "01", title: "Pesquisa", description: "Análise do mercado cervejeiro" },
  { step: "02", title: "Sketches", description: "Conceituação e ideação" },
  { step: "03", title: "Prototipagem", description: "Modelagem 3D em Fusion 360" },
  { step: "04", title: "Testes", description: "Validação com cervejarias" },
  { step: "05", title: "Implementação", description: "Produção e lançamento" }
];

const results = [
  { value: "30%", label: "Redução em perdas de chope" },
  { value: "+40", label: "Microcervejarias atendidas" },
  { value: "2x", label: "Aumento da vida útil do barril" },
  { value: "1", label: "Patente registrada" }
];

const galleryImages = [
  "/images/keg-1.jpg",
  "/images/keg-2.jpg",
  "/images/keg-3.jpg",
  "/images/keg-4.jpg"
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
              <ArrowLeft className="h-4 w-4" /> Voltar aos projetos
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="font-mono">2024</span>
              <span>·</span>
              <span>Product Design</span>
              <span>·</span>
              <span>IoT</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
              Sistema Inteligente de Kegs para Cervejarias Artesanais
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Inovação premiada no setor cervejeiro com design funcional e impacto ambiental reduzido.
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
                <h2 className="text-2xl font-bold tracking-tight">O Projeto</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl leading-relaxed text-foreground/90">
                  Este projeto nasceu da necessidade de repensar o serviço de chope em microcervejarias.
                  A solução desenvolvida elimina o uso de CO₂ com um sistema de balão interno pressurizado
                  a ar atmosférico — aumentando a segurança, eficiência e sustentabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Desafios</h2>

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

        {/* Solutions Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Solução</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="group">
                  <solution.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Processo</h2>

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
            <h2 className="text-2xl font-bold tracking-tight mb-12">Resultados</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {results.map((result, index) => (
                <div key={index}>
                  <span className="text-4xl md:text-5xl font-bold text-primary">{result.value}</span>
                  <p className="text-muted-foreground mt-2">{result.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Patente Registrada:</span>{" "}
                <span className="font-mono">BR 10 2022 010428 0</span>
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Galeria</h2>

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
                Quer saber mais?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estou sempre aberto a novos desafios e parcerias criativas.
              </p>
              <a
                href="/#contact"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Entre em contato →
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
