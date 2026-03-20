import { motion } from "framer-motion";

const experiences = [
  {
    role: "Product Designer",
    company: "Bloxs Tech",
    period: "2024 – Present",
    description: "Redesigning the investment experience in alternative assets for thousands of investors."
  },
  {
    role: "Co-founder & CPO",
    company: "Progema Brasil",
    period: "2020 – 2024",
    description: "Built an IoT company from scratch, from hardware to software. From idea to product in the hands of real customers."
  },
  {
    role: "Product Manager",
    company: "Yueyang JiBoRui Tech",
    period: "2023 – 2024",
    description: "Managed products in China, coordinating international teams and navigating cultural differences."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-border relative">
      <div className="container px-6 mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm text-primary font-mono tracking-wider">02 — EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Where I've worked</h2>
        </motion.div>

        {/* Experience List */}
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border hover:border-primary/30 transition-colors duration-500"
            >
              {/* Period */}
              <div className="md:col-span-3">
                <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.period}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-9">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {exp.company}
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
