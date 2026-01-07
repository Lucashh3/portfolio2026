import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/lucashegouet" },
  { name: "GitHub", url: "https://github.com/lucashh3" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl"
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              className="w-12 h-[1px] bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-sm text-primary font-mono tracking-wider">CONTATO</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Bora trocar uma ideia?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Sempre aberto pra novos projetos, parcerias criativas, ou só um café virtual.
          </p>

          {/* Email - Big CTA */}
          <motion.a
            href="mailto:lucasheg@yahoo.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-medium hover:text-primary transition-colors duration-300 mb-16"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span>lucasheg@yahoo.com</span>
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          {/* Social Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Me encontra também em</p>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
