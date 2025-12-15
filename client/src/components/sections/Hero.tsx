import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 bg-grid">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          <div className="md:col-span-8">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <h2 className="text-xs md:text-sm font-mono text-primary/60 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                AVAILABLE FOR NEW PROJECTS
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-[0.9] uppercase">
                Product
                <br />
                <span className="text-muted-foreground/30">Designer</span>
              </h1>
            </motion.div>
          </div>

          <div className="md:col-span-4 mb-2 md:mb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground font-light leading-relaxed max-w-sm"
            >
              Specialized in creating user-centered digital and physical solutions. 
              Bridging the gap between <span className="text-foreground font-medium">complex technology</span> and <span className="text-foreground font-medium">human experience</span>.
            </motion.p>
          </div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-10 flex items-center gap-4"
      >
         <div className="h-[1px] w-12 bg-border"></div>
         <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
