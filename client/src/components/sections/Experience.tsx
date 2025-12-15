import { motion } from "framer-motion";

const experiences = [
  {
    role: "Designer de Produto Pleno",
    company: "Bloxs Tech",
    period: "Jan 2024 – Presente",
    description: "Liderança de design em produtos financeiros digitais, focando na experiência do investidor e interfaces de alta performance."
  },
  {
    role: "Cofundador e CPO",
    company: "Progema Brasil",
    period: "Mar 2020 – Jan 2024",
    description: "Gestão completa do ciclo de vida do produto, desde a concepção até o lançamento, alinhando estratégia de negócios com design centrado no usuário."
  },
  {
    role: "Gerente de Produto",
    company: "Yueyang JiBoRui Tech",
    period: "Ago 2023 – Jan 2024",
    description: "Gerenciamento de produtos tecnológicos na China, coordenando equipes internacionais e garantindo a qualidade da entrega final."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-border/40">
      <div className="container px-6 mx-auto">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-primary font-medium mb-2">Trajetória</p>
            <h2 className="text-4xl font-display font-bold tracking-tight gradient-text">Experiência</h2>
          </motion.div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/50 border border-border/40 rounded-xl p-8 hover:bg-card hover:border-primary/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-md">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {exp.company}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
