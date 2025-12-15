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
              <h2 className="text-4xl font-display font-bold tracking-tight mb-2">About</h2>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                The Professional
              </p>
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
              <p className="text-2xl md:text-3xl leading-snug font-light text-foreground/90">
                Designer de Produto com mais de 10 anos de experiência, especializado em criar soluções centradas no usuário. 
                Liderando projetos no Brasil e na China, com foco em produtos digitais, 
                físicos e dashboards interativos.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/40">
                <div>
                   <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Location</h3>
                   <p className="text-lg">Salvador, BA — Brazil</p>
                </div>
                <div>
                   <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Contact</h3>
                   <p className="text-lg hover:underline cursor-pointer">lucasheg@yahoo.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary/50 border border-border/50 text-xs md:text-sm text-foreground/80 font-mono hover:bg-white hover:text-black hover:border-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
