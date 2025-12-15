import { motion } from "framer-motion";

const skills = [
  "Figma", "Fusion 360", "SolidWorks", "Angular", "Material UI", 
  "VueJS", "TypeScript", "MongoDB", "MQTT", "Wordpress", 
  "Webflow", "Blender", "Lottie", "ThreeJS"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Sobre Mim</h2>
            <div className="h-1 w-20 bg-black/10 rounded-full"></div>
          </div>

          <div className="prose prose-lg text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Sou um Designer de Produto com mais de 10 anos de experiência, especializado em criar soluções centradas no usuário. 
              Tenho um histórico comprovado de liderança em projetos tanto no Brasil quanto na China, com foco em produtos digitais, 
              físicos e dashboards interativos.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Minha abordagem combina estética minimalista com funcionalidade robusta, sempre buscando a melhor experiência possível para o usuário final.
              Resido atualmente em Salvador - BA, mas minha visão e atuação são globais.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">Habilidades e Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-border rounded-full text-sm text-muted-foreground hover:border-black/20 hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
