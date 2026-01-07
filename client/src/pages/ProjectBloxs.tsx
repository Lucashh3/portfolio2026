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
  "CVM 88 tem limite anual por investidor. CVM 160 não tem. Fluxos diferentes, mesma base",
  "Ambiente deslogado pode mostrar mais ou menos, dependendo da norma. Onde está a linha?",
  "Aceites, KYC, assinatura eletrônica, pagamento. Tudo precisa de registro para auditoria",
  "Documento mudou no meio da oferta? Versão antiga ou nova? Precisa re-aceite?"
];

const solutions = [
  { icon: Layers, title: "Camadas Separadas", description: "Marca customizável, regras intocáveis. Layout reutilizável entre 88 e 160" },
  { icon: UserCheck, title: "Elegibilidade Inteligente", description: "Limite anual? Checa. Perfil investidor? Valida. Tudo antes do botão de aporte" },
  { icon: Shield, title: "Auditoria Nativa", description: "Aceites com timestamp, versão do documento, log de cada etapa. Pronto pra fiscalização" },
  { icon: GitBranch, title: "Fluxo Adaptável", description: "Mesmo motor, flags diferentes. CVM 88 checa limite, CVM 160 não. Sem duplicação" }
];

const processSteps = [
  { step: "01", title: "Entender", description: "Conversar com jurídico, compliance, operação" },
  { step: "02", title: "Estruturar", description: "Definir o que muda e o que não muda" },
  { step: "03", title: "Desenhar fluxos", description: "Mapear cada caminho possível" },
  { step: "04", title: "Criar telas", description: "Componentes que funcionam em qualquer parceiro" },
  { step: "05", title: "Testar", description: "Validar os casos estranhos com engenharia" }
];

const flowSteps = [
  {
    number: "01",
    title: "Ver as opções",
    description: "Todas as ofertas num lugar só. Filtra por prazo, risco, tipo. Sem precisar ser especialista pra entender.",
    icon: Eye
  },
  {
    number: "02",
    title: "Entender a oferta",
    description: "O que é, quanto rende, quais os riscos, quando vence. Tudo na mesma página, documentos incluídos.",
    icon: Layers
  },
  {
    number: "03",
    title: "Checar se pode investir",
    description: "Algumas perguntas rápidas pra confirmar se essa oferta faz sentido pro seu perfil. Resposta na hora.",
    icon: UserCheck
  },
  {
    number: "04",
    title: "Reservar",
    description: "Escolhe o valor, confere os pontos principais, confirma. Sem surpresa, sem letra miúda escondida.",
    icon: CheckCircle
  },
  {
    number: "05",
    title: "Acompanhar",
    description: "Reservou? Agora é só acompanhar. Status atualizado, documentos guardados, próximos passos claros.",
    icon: GitBranch
  }
];

const layers = [
  {
    title: "A Oferta",
    subtitle: "O que você está comprando",
    items: [
      "Tudo sobre a oferta numa página só",
      "Documentos sempre à mão, não escondidos",
      "Seção 'antes de investir, saiba que...'",
      "Fácil de comparar com outras ofertas"
    ],
    color: "bg-blue-500"
  },
  {
    title: "Seu Perfil",
    subtitle: "Você pode participar?",
    items: [
      "Perguntas diretas, sem juridiquês",
      "Resposta clara: pode, não pode, falta isso",
      "Barra de progresso mostrando o que falta",
      "Se não pode, explica por quê"
    ],
    color: "bg-green-500"
  },
  {
    title: "As Regras",
    subtitle: "O que não pode pular",
    items: [
      "Aceites e confirmações obrigatórios",
      "Registro de cada passo da jornada",
      "Tudo guardado pra auditoria",
      "Controle de versão dos documentos"
    ],
    color: "bg-purple-500"
  }
];

const edgeCases = [
  "Investidor atingiu limite anual na CVM 88? Bloqueia aporte, explica o motivo, sugere ofertas CVM 160",
  "Prospecto atualizado durante captação? Força re-aceite com versão nova, registra tudo",
  "Quer ver simulação de rentabilidade sem logar? OK na 160 com disclaimer, mais restrito na 88",
  "Assinatura eletrônica válida? Checagem de requisitos específicos por tipo de documento",
  "Oferta dispensada de registro? Ainda tem documentos obrigatórios. Mostra o que precisa"
];

const regulationComparison = [
  {
    aspect: "Limite de Investimento",
    cvm88: "Limite anual por investidor. Precisa calcular, persistir e checar",
    cvm160: "Sem limite. Investidor qualificado ou não, pode aportar"
  },
  {
    aspect: "Ambiente Deslogado",
    cvm88: "Informações limitadas. Evitar convite direto ao aporte",
    cvm160: "Divulgação maior permitida, com advertências de risco obrigatórias"
  },
  {
    aspect: "Documentos Obrigatórios",
    cvm88: "Documentos legais + dados operacionais. Versionamento obrigatório",
    cvm160: "Prospecto formal + comunicações. Disponível até em deslogado (com advertência)"
  },
  {
    aspect: "Fluxo de Aporte",
    cvm88: "Login → KYC → Elegibilidade → Aceites (checkbox individual) → Pagamento",
    cvm160: "Login → KYC → Aceite de prospecto → Assinatura eletrônica → Pagamento"
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
              <ArrowLeft className="h-4 w-4" /> Voltar aos projetos
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
              Portal White Label para Distribuição de Ofertas
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Transformei regras complexas de investimento em uma jornada que faz sentido
              para quem investe. Compliance que funciona, não que atrapalha.
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
                alt="Portal White Label"
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
                <h2 className="text-2xl font-bold tracking-tight">O Projeto</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl leading-relaxed text-foreground/90 mb-6">
                  Criei um portal onde diferentes parceiros podem distribuir ofertas de investimento
                  com a própria marca, mas sem cada um precisar reinventar a roda. A experiência
                  do investidor é consistente, independente de quem está oferecendo.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Não é só trocar logo e cores. O desafio foi criar algo que escala de verdade:
                  parceiros entram, configuram a marca, e já têm toda a estrutura de compliance
                  funcionando (CVM 88 para crowdfunding, CVM 160 para ofertas públicas).
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
                <h2 className="text-2xl font-bold tracking-tight">Meu Papel</h2>
                <p className="text-muted-foreground mt-2">Product Designer (B2B/Fintech)</p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Peguei regras regulatórias e transformei em telas que as pessoas entendem</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Desenhei uma jornada que funciona igual para todos os parceiros</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Criei componentes e padrões que a gente usa e reusa sem retrabalho</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Sentei com jurídico, produto e engenharia para validar cada detalhe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6">O Problema</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              Distribuir ofertas de investimento é um campo minado regulatório. CVM 88 exige uma coisa,
              CVM 160 exige outra. O investidor precisa de KYC, aceites com checkbox individual,
              assinatura eletrônica válida, comprovante de pagamento. Tudo isso precisa ficar registrado
              para auditoria.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              E ainda tem a questão do ambiente deslogado: o que pode mostrar? Simulação de rentabilidade?
              Só com disclaimer. Convite direto ao aporte? Depende da norma. Cada parceiro quer colocar
              a própria marca, mas não pode quebrar nenhuma dessas regras.
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
            <h2 className="text-2xl font-bold tracking-tight mb-4">A Solução</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Separei o que cada parceiro pode customizar do que não pode mudar de jeito nenhum.
              Assim, todo mundo coloca a própria cara no produto, mas ninguém pula as etapas que garantem
              que o investidor entenda onde está colocando dinheiro.
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
              Duas normas, duas lógicas. O desafio foi criar um motor só que atende as duas sem gambiarras.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-6 text-sm font-medium text-muted-foreground">Aspecto</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-blue-400">CVM 88 (Crowdfunding)</th>
                    <th className="text-left py-4 pl-6 text-sm font-medium text-purple-400">CVM 160 (Oferta Pública)</th>
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
                <span className="text-primary font-medium">Insight:</span> A maior parte do fluxo é compartilhada.
                O que muda são as checagens específicas (limite, tipo de aceite, nível de divulgação).
                Componentes reutilizáveis com flags de contexto.
              </p>
            </div>
          </div>
        </section>

        {/* Main Flow Section */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Fluxo Principal</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Do "quero ver as opções" até o "investi". Cinco etapas que guiam sem empurrar.
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
            <h2 className="text-2xl font-bold tracking-tight mb-12">Decisões de Design</h2>

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
              <h3 className="font-semibold mb-6">Princípios que guiaram as decisões:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Aceites agrupados em um passo, mas cada termo com checkbox individual. Registro separado</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Ambiente deslogado mostra o permitido por norma. CVM 160 libera mais que CVM 88</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Simulações de rentabilidade só com disclaimer padrão. Sem exceção</span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">→</span>
                  <span>Documentos versionados. Mudou? Re-aceite obrigatório, com log da versão anterior</span>
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
                <h2 className="text-2xl font-bold tracking-tight">E quando dá errado?</h2>
                <p className="text-muted-foreground mt-2">
                  O caminho feliz é fácil. O difícil é quando as coisas saem do script.
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">Auditoria simplificada:</span> cada aceite tem timestamp,
                  versão do documento e identificação do investidor. Pronto pra fiscalização da CVM.
                </p>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">Limite anual automatizado:</span> sistema calcula,
                  persiste e bloqueia quando necessário. Sem planilha manual.
                </p>
              </div>
              <div>
                <p className="text-lg text-foreground/90 mb-4">
                  <span className="font-medium">Um motor, duas normas:</span> mesmo fluxo base atende
                  CVM 88 e CVM 160 com flags de contexto. Zero duplicação de código.
                </p>
                <p className="text-lg text-foreground/90">
                  <span className="font-medium">Parceiro em produção rápido:</span> configura marca,
                  conecta ofertas, compliance já está funcionando. Sem projeto customizado.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Conformidade:</span>{" "}
                <span className="font-mono">CVM 88 · CVM 160</span>
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
        currentIndex={currentGalleryIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
