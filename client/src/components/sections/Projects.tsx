import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    title: "Sistema Inteligente de Kegs",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2670&auto=format&fit=crop",
    description: "Inovação premiada para cervejarias artesanais com design funcional.",
    link: "/projeto/keg-inteligente"
  },
  {
    title: "Dashboard Financeiro",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    description: "Interface intuitiva para gestão de ativos e investimentos.",
    link: null
  },
  {
    title: "App Mobile IoT",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    description: "Controle de dispositivos inteligentes com foco em usabilidade.",
    link: null
  },
  {
    title: "Plataforma E-commerce",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Experiência de compra otimizada para conversão.",
    link: null
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-border/40">
      <div className="container px-6 mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-primary font-medium mb-2">Portfólio</p>
            <h2 className="text-4xl font-display font-bold tracking-tight gradient-text">Projetos Selecionados</h2>
          </motion.div>

          <motion.a 
            href="#" 
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ver todos os projetos <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] bg-card rounded-xl overflow-hidden cursor-pointer border border-border/40 hover:border-primary/40 transition-all duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-md mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-white/70 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            if (project.link) {
              return (
                <Link key={index} href={project.link}>
                  <a>{content}</a>
                </Link>
              );
            }
            return <div key={index}>{content}</div>;
          })}
        </div>

      </div>
    </section>
  );
}
