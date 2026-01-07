import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "Client 1", logo: "/images/client-1.png" },
  { name: "Client 2", logo: "/images/client-2.png" },
  { name: "Client 3", logo: "/images/client-3.png" },
  { name: "Client 4", logo: "/images/client-4.png" },
  { name: "Client 5", logo: "/images/client-5.png" },
  { name: "Client 6", logo: "/images/client-6.png" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const x1 = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  // Image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col justify-between pt-16 pb-8 relative overflow-hidden"
    >
      {/* Photo - background on mobile, right side on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 md:inset-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[40vw] md:h-[70vh]"
      >
        <div className="relative w-full h-full">
          <img
            src="/images/lucas.jpg"
            alt="Lucas Hegouet"
            className="w-full h-full object-cover grayscale opacity-30 md:opacity-60 mix-blend-luminosity"
          />
          {/* Gradients for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background hidden md:block" />
        </div>
      </motion.div>

      {/* Client logos carousel - left side on desktop, bottom on mobile */}
      {/* Desktop: vertical scroll on left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 -rotate-90 origin-center whitespace-nowrap">
          Clientes
        </span>
        <div className="h-[300px] overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />

          <div className="flex flex-col gap-6 animate-scroll-up">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-16 h-12 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="container px-6 mx-auto lg:pl-28"
        >
          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Product Designer</span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              style={{ y: y1, x: x1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold tracking-tighter leading-[0.85] uppercase"
            >
              Lucas
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              style={{ y: y2, x: x2 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold tracking-tighter leading-[0.85] uppercase text-primary"
            >
              Hegouet
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 md:mt-12 text-base md:text-xl text-muted-foreground max-w-lg"
          >
            Criando produtos digitais e físicos no Brasil e na China há mais de 10 anos.
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile: horizontal logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="lg:hidden relative z-10 mb-6"
      >
        <div className="container px-6 mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Clientes</p>
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {clients.map((client, index) => (
              <div
                key={index}
                className="w-14 h-10 flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container px-6 mx-auto relative z-10 lg:pl-28"
      >
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 text-sm hover:text-primary transition-colors duration-300"
            >
              <span>Ver trabalhos</span>
              <span className="w-4 h-px bg-current group-hover:w-8 transition-all duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Fale comigo
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="w-4 h-px bg-current" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
