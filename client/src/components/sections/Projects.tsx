import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sistema Inteligente de Kegs",
    subtitle: "Transformando gestão de barris em dados acionáveis",
    category: "IoT · Hardware · Software",
    year: "2024",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2670&auto=format&fit=crop",
    link: "/projeto/keg-inteligente",
    color: "#3b82f6",
  },
  {
    title: "Portal White Label",
    subtitle: "Distribuição de ofertas com compliance nativo",
    category: "B2B Fintech · Product Design",
    year: "2024",
    image: "/images/HomeWL01.jpg",
    link: "/projeto/bloxs",
    color: "#8b5cf6",
  },
  {
    title: "Site Institucional Bloxs",
    subtitle: "Mercado de capitais para dois públicos distintos",
    category: "Web Design · B2B Fintech",
    year: "2024",
    image: "/images/bloxswebpage.png",
    link: "/projeto/bloxs-site",
    color: "#06b6d4",
  },
];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 150);
    mouseY.set(e.clientY - rect.top - 100);
  };

  const content = (
    <motion.div
      ref={rowRef}
      className="group relative border-b border-border/50 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      {/* Floating Image Preview */}
      <motion.div
        className="pointer-events-none absolute z-20 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-2xl"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Gradient on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.color}08 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-8 md:py-12 px-6 md:px-12">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Index + Title */}
          <div className="flex items-center gap-6 md:gap-12 flex-1 min-w-0">
            {/* Index Number */}
            <motion.span
              className="text-4xl md:text-6xl font-bold text-muted-foreground/20 font-mono w-16 md:w-24 flex-shrink-0"
              animate={{
                color: isHovered ? project.color : undefined,
                opacity: isHovered ? 0.5 : 0.2,
              }}
              transition={{ duration: 0.3 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.span>

            {/* Title + Subtitle */}
            <div className="min-w-0 flex-1">
              <motion.h3
                className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight truncate"
                animate={{ x: isHovered ? 20 : 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base truncate"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  y: isHovered ? 0 : 0,
                  x: isHovered ? 20 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                {project.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Right: Category + Year + Arrow */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{project.category}</p>
              <p className="text-sm font-mono text-muted-foreground/60">{project.year}</p>
            </div>

            <motion.div
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                borderColor: isHovered ? project.color : undefined,
                backgroundColor: isHovered ? `${project.color}15` : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  x: isHovered ? 2 : 0,
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: isHovered ? project.color : undefined }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Arrow */}
          <motion.div
            className="md:hidden w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0"
            animate={{
              borderColor: isHovered ? project.color : undefined,
            }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Line Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ backgroundColor: project.color }}
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      />
    </motion.div>
  );

  if (project.link) {
    return (
      <Link href={project.link} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      {/* Header */}
      <div className="container px-6 mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-[1px] bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-sm text-primary font-mono tracking-wider">03 — TRABALHOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl">
            Projetos que transformam
            <span className="text-muted-foreground"> ideias em experiências</span>
          </h2>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="border-t border-border/50">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}
