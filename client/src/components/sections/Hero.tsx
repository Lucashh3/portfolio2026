import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      <div className="container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
            Portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            Lucas Hegouet
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Designer de Produto especializado em criar soluções digitais e físicas centradas no usuário.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="sr-only">Rolar para baixo</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
