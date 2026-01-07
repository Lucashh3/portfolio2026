import { motion } from "framer-motion";

const skills = [
  "Figma", "Fusion 360", "SolidWorks", "Angular", "Material UI",
  "VueJS", "TypeScript", "MongoDB", "MQTT", "Wordpress",
  "Webflow", "Blender", "Lottie", "ThreeJS"
];

export function About() {
  return (
    <section id="about" className="py-32 border-t border-border relative">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">

          {/* Left column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm text-primary font-mono tracking-wider">01 — SOBRE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quem sou eu</h2>
          </motion.div>

          {/* Right column - Content */}
          <div className="md:col-span-8 space-y-12">
            {/* Bio - punchy, personal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                Brasileiro, designer, e obcecado por criar coisas que funcionam.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nos últimos 10 anos, passei do Brasil à China liderando projetos de produto —
                de hardware IoT a dashboards financeiros. Acredito que bom design é invisível:
                resolve o problema e sai do caminho.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atualmente na Bloxs, transformando como pessoas investem em ativos alternativos.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold">2</p>
                <p className="text-sm text-muted-foreground mt-1">Países (Brasil & China)</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Produtos lançados</p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-6">Ferramentas do dia a dia</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-foreground/70 border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors duration-300"
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
