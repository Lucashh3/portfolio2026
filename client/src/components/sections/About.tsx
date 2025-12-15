import { motion } from "framer-motion";

const skills = [
  "Figma", "Fusion 360", "SolidWorks", "Angular", "Material UI", 
  "VueJS", "TypeScript", "MongoDB", "MQTT", "Wordpress", 
  "Webflow", "Blender", "Lottie", "ThreeJS"
];

export function About() {
  return (
    <section id="about" className="py-32 border-t border-border/40">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <p className="text-sm text-primary font-medium mb-2">Sobre</p>
              <h2 className="text-4xl font-display font-bold tracking-tight gradient-text">Quem sou eu</h2>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                Designer de Produto com mais de 10 anos de experiência, especializado em criar soluções centradas no usuário. 
                Liderando projetos no Brasil e na China, com foco em produtos digitais, 
                físicos e dashboards interativos.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/40">
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary">Localização</p>
                  <p className="text-lg">Salvador, BA — Brasil</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary">Contato</p>
                  <a href="mailto:lucasheg@yahoo.com" className="text-lg hover:text-primary transition-colors">lucasheg@yahoo.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-6">Tecnologias & Habilidades</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-secondary/50 border border-border/50 rounded-lg text-sm text-foreground/80 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
