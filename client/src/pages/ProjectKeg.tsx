import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Beaker, Wind, Brain, Beer, ChevronRight } from "lucide-react";
import { Link } from "wouter";

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
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2672&auto=format&fit=crop"
];

export default function ProjectKeg() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2670&auto=format&fit=crop"
              alt="Keg System"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          
          <div className="container px-6 mx-auto relative z-10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/#projects">
                <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                  <ArrowLeft className="h-4 w-4" /> Voltar aos projetos
                </a>
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-md">Product Design</span>
                <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded-md">IoT</span>
                <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded-md">Industrial</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] max-w-4xl mb-6">
                Sistema Inteligente de Kegs para Cervejarias Artesanais
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
                Inovação premiada no setor cervejeiro com design funcional e impacto ambiental reduzido.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 border-t border-border/40">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-primary font-medium mb-2">Visão Geral</p>
                  <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">O Projeto</h2>
                </motion.div>
              </div>
              <div className="md:col-span-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl leading-relaxed text-foreground/90"
                >
                  Este projeto nasceu da necessidade de repensar o serviço de chope em microcervejarias. 
                  A solução desenvolvida elimina o uso de CO₂ com um sistema de balão interno pressurizado 
                  a ar atmosférico — aumentando a segurança, eficiência e sustentabilidade.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 border-t border-border/40 bg-card/30">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-primary font-medium mb-2">Problema</p>
              <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">Desafios Identificados</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-background border border-border/40 rounded-xl hover:border-primary/30 transition-colors"
                >
                  <span className="text-4xl font-display font-bold text-primary/20 mb-4 block">0{index + 1}</span>
                  <p className="text-lg font-medium">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 border-t border-border/40">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-primary font-medium mb-2">Solução</p>
              <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">Diferenciais do Produto</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 bg-card/50 border border-border/40 rounded-xl hover:bg-primary hover:border-primary transition-all duration-500"
                >
                  <solution.icon className="h-10 w-10 text-primary group-hover:text-white mb-6 transition-colors" />
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-white transition-colors">{solution.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 border-t border-border/40 bg-card/30">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-primary font-medium mb-2">Metodologia</p>
              <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">Processo de Design</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-border/40" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative text-center lg:text-left"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto lg:mx-0 mb-4 relative z-10 bg-background">
                      <span className="text-xl font-display font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 border-t border-border/40">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-primary font-medium mb-2">Impacto</p>
              <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">Resultados Alcançados</h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-card/50 border border-border/40 rounded-xl"
                >
                  <span className="text-5xl md:text-6xl font-display font-bold gradient-text">{result.value}</span>
                  <p className="text-muted-foreground mt-2">{result.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-primary/10 border border-primary/30 rounded-xl"
            >
              <p className="text-lg">
                <span className="font-bold text-primary">Patente Registrada:</span>{" "}
                <span className="font-mono text-muted-foreground">BR 10 2022 010428 0</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 border-t border-border/40 bg-card/30">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-primary font-medium mb-2">Visual</p>
              <h2 className="text-3xl font-display font-bold tracking-tight gradient-text">Galeria do Projeto</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-xl border border-border/40 group cursor-pointer"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 border-t border-border/40">
          <div className="container px-6 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight gradient-text mb-6">
                Quer saber mais ou colaborar em projetos inovadores?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Estou sempre aberto a novos desafios e parcerias criativas.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-6 rounded-lg shadow-lg shadow-primary/25"
                onClick={() => window.location.href = '/#contact'}
              >
                Entre em contato <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>&copy; {new Date().getFullYear()} Lucas Hegouet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
