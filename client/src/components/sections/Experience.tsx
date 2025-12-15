import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="experience" className="py-24">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Experiência Profissional</h2>
            <div className="h-1 w-20 bg-black/10 rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-semibold">{exp.role}</CardTitle>
                      <Badge variant="secondary" className="w-fit font-normal text-muted-foreground bg-white border-border">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground/80">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
