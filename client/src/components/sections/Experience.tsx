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
        
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-4xl font-display font-bold tracking-tight mb-2">Experience</h2>
             <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                Career Trajectory
             </p>
          </motion.div>
        </div>

        <div className="grid gap-px bg-border/40 border border-border/40 overflow-hidden">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 md:p-12 hover:bg-secondary/20 transition-colors group relative"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider border border-border px-2 py-1 rounded-sm group-hover:border-primary/40 transition-colors">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {exp.company}
                  </p>
                  <p className="text-foreground/80 leading-relaxed max-w-2xl group-hover:text-foreground transition-colors">
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
