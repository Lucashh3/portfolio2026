import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Layout, Users, Shield, Zap, BarChart3, Target } from "lucide-react";
import { Link } from "wouter";

const challenges = [
  "Comunicar produtos complexos de mercado de capitais de forma acessível",
  "Atender dois públicos distintos: emissores (sell side) e investidores (buy side)",
  "Transmitir credibilidade institucional sem parecer engessado",
  "Estrutura regulatória densa (CVM 88, 160, 175) que precisa estar visível mas não assustar"
];

const solutions = [
  { icon: Layout, title: "Arquitetura Clara", description: "Navegação segmentada por público: quem emite e quem investe encontram caminhos distintos" },
  { icon: Users, title: "Linguagem Adaptada", description: "Mesmo produto, comunicação diferente. Sell side quer escala, buy side quer oportunidade" },
  { icon: Shield, title: "Confiança Visível", description: "Selos ANBIMA, certificações de segurança, subsidiárias reguladas. Tudo na home" },
  { icon: Zap, title: "CTAs Estratégicos", description: "Agendar demo, criar conta, falar com time. Sempre um próximo passo claro" }
];

const processSteps = [
  { step: "01", title: "Benchmark", description: "Analisar concorrentes e referências do mercado financeiro" },
  { step: "02", title: "Arquitetura", description: "Definir hierarquia de informação e fluxos por persona" },
  { step: "03", title: "Wireframes", description: "Estruturar páginas e validar com stakeholders" },
  { step: "04", title: "Visual Design", description: "Aplicar identidade e criar componentes" },
  { step: "05", title: "Implementação", description: "Desenvolver com foco em performance e SEO" }
];

const designDecisions = [
  {
    decision: "Azul primário (#2E61FF)",
    rationale: "Transmite confiança e tecnologia. Padrão do setor financeiro, mas com tom mais vibrante"
  },
  {
    decision: "Cards com glassmorphism",
    rationale: "Visual moderno sem perder legibilidade. Diferencia dos sites tradicionais de banco"
  },
  {
    decision: "Navegação expandível",
    rationale: "Muitos produtos e serviços. Menu mega dropdown organiza sem poluir a barra principal"
  },
  {
    decision: "Depoimentos em carrossel",
    rationale: "Social proof forte com nomes reais. Rotação mantém a seção dinâmica"
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
              <ArrowLeft className="h-4 w-4" /> Voltar aos projetos
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
              Site Institucional Bloxs
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Como comunicar uma plataforma complexa de mercado de capitais para dois públicos
              completamente diferentes — sem simplificar demais nem complicar.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="border-b border-border">
          <img
            src="/images/bloxswebpage.png"
            alt="Site Institucional Bloxs"
            className="w-full h-auto object-cover"
          />
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
                  A Bloxs é uma plataforma de tecnologia para mercado de capitais. Oferece desde
                  originação digital até securitização, passando por distribuição e gestão fiduciária.
                  Tudo isso operando através de subsidiárias reguladas e membros da ANBIMA.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  O desafio do site institucional: explicar essa cadeia completa de serviços para
                  quem quer emitir (boutiques, gestoras) e para quem quer investir (institucionais).
                  Públicos diferentes, necessidades diferentes, mesmo endereço.
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
                <p className="text-muted-foreground mt-2">Product Designer</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Em colaboração com{" "}
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
                    <span>Definir arquitetura de informação para dois públicos distintos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Criar hierarquia visual que prioriza sem esconder</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Traduzir produtos técnicos em propostas de valor claras</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span>Equilibrar credibilidade institucional com visual moderno</span>
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
              Sites de fintechs B2B do mercado de capitais costumam cair em dois extremos:
              ou são tão técnicos que só especialista entende, ou são tão genéricos que não
              dizem nada. A Bloxs precisava de um meio termo.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Além disso, a empresa opera com 4 subsidiárias reguladas, é membro da ANBIMA em
              4 categorias, e atende tanto quem emite quanto quem investe. Como mostrar tudo
              isso sem virar um catálogo infinito?
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
            <h2 className="text-2xl font-bold tracking-tight mb-4">Dois Públicos, Uma Home</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              A segmentação acontece logo no início. Quem você é define o que você vê primeiro.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-mono text-blue-400">SELL SIDE</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Emissores</h3>
                <p className="text-muted-foreground mb-6">
                  Boutiques, gestoras, securitizadoras que querem estruturar e distribuir operações.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Plataforma completa para estruturação e emissão</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Conformidade com CVM 88, 160, 175</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Target className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Distribuição coordenada e roadshow digital</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 border border-border bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm font-mono text-purple-400">BUY SIDE</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Investidores Institucionais</h3>
                <p className="text-muted-foreground mb-6">
                  Fundos, family offices, assets que buscam oportunidades de investimento.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Descoberta de operações com filtros inteligentes</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Interação direta com emissores</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Dados para decisão: documentos, métricas, histórico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="py-24 border-b border-border">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Decisões de Design</h2>

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
              <h3 className="font-semibold mb-6">Por que essas escolhas:</h3>
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
    </div>
  );
}
