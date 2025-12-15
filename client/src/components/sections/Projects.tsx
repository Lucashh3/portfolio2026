import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Placeholder data for projects
const projects = [
  {
    title: "Dashboard Financeiro",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    description: "Interface intuitiva para gestão de ativos e investimentos."
  },
  {
    title: "App Mobile IoT",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    description: "Controle de dispositivos inteligentes com foco em usabilidade."
  },
  {
    title: "Identidade Visual Tech",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
    description: "Redesign completo de marca para startup de tecnologia."
  },
  {
    title: "Plataforma E-commerce",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Experiência de compra otimizada para conversão."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-border/40">
      <div className="container px-6 mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-4xl font-display font-bold tracking-tight mb-2">Selected Work</h2>
             <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                Digital & Physical
             </p>
          </motion.div>

          <motion.a 
            href="#" 
            className="text-sm font-mono uppercase tracking-widest border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View All Projects
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40 border border-border/40">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] bg-secondary/10 overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-mono text-primary/80 mb-2 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
                  </h3>
                  <p className="text-white/60 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                    {project.description}
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
