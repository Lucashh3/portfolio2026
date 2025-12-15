import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
      {/* Animated 3D-like Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [-50, 50, -50],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* 3D Floating shapes with CSS */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div 
            className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/20 opacity-40"
            style={{ 
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
              boxShadow: '0 0 60px rgba(99, 102, 241, 0.2), inset 0 0 60px rgba(99, 102, 241, 0.1)'
            }}
          />
        </motion.div>
        
        {/* Animated ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/10 opacity-60"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full border border-primary/5 opacity-40"
          animate={{ 
            rotate: [360, 0],
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1]">
              <span className="gradient-text">Design</span> que
              <br />
              <span className="text-muted-foreground">transforma.</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
            >
              Designer de Produto com mais de 10 anos de experiência criando soluções digitais e físicas centradas no usuário no Brasil e na China.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em contato
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-secondary/50 px-8 py-6 rounded-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver projetos
              </Button>
            </motion.div>
          </motion.div>

          {/* Testimonial snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground italic">
              "Design que entrega resultados reais."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-primary flex items-center justify-center text-sm font-bold">
                LH
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Lucas Hegouet</p>
                <p className="text-xs text-muted-foreground">Product Designer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
