import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";

const navItems = [
  { name: "Sobre", href: "about" },
  { name: "Experiência", href: "experience" },
  { name: "Projetos", href: "projects" },
  { name: "Contato", href: "contact" },
];

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      if (isHome) {
        const sections = navItems.map(item => item.href);
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (isHome) {
      // Na home, scroll suave para a seção
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Em outras páginas, navega para home com hash
      setLocation(`/#${href}`);
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation("/");
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress bar - top */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ width: progressWidth }}
      />

      {/* Top bar - Logo + mobile menu */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <MagneticButton className="pointer-events-auto">
            <a
              href="/"
              onClick={handleLogoClick}
              className="group flex items-baseline hover:text-primary transition-colors duration-500"
            >
              <span className="text-xl font-semibold tracking-tight font-display">
                lucas
              </span>
              <span className="text-primary text-2xl font-bold leading-none font-display">
                .
              </span>
            </a>
          </MagneticButton>

          {/* Menu toggle - mobile only */}
          <div className="pointer-events-auto md:hidden">
            <MagneticButton>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-border/30"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </MagneticButton>
          </div>
        </div>
      </motion.header>

      {/* Floating pill nav - appears on scroll (desktop only) */}
      <AnimatePresence>
        {scrolled && !isOpen && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/[0.05]"
          >
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.href;
              return (
                <MagneticButton key={item.name}>
                  <a
                    href={`/#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 rounded-full ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/[0.1]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                </MagneticButton>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Fullscreen menu overlay - mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col justify-center">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 80 }}
                      animate={{ y: 0 }}
                      exit={{ y: 80 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <a
                        href={`/#${item.href}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="group flex items-center gap-6 py-4"
                      >
                        <span className="text-sm font-mono text-muted-foreground">
                          0{index + 1}
                        </span>
                        <span className="text-5xl font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                          {item.name}
                        </span>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </nav>

              {/* Footer info in menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-12 left-6 right-6 flex justify-between items-end text-sm text-muted-foreground"
              >
                <div>
                  <p className="mb-1">Disponível para projetos</p>
                  <p className="text-foreground">lucasheg@yahoo.com</p>
                </div>
                <div className="text-right">
                  <p>São Paulo, Brasil</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
