import { motion } from "framer-motion";

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
    <section id="projects" className="py-24 bg-black text-white">
      <div className="container px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Projetos Selecionados</h2>
            <div className="h-1 w-20 bg-white/20 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-zinc-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400 font-medium">{project.category}</p>
                  <h3 className="text-xl font-semibold group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                  <p className="text-zinc-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
