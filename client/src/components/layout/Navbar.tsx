import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-xl font-bold font-display tracking-tighter uppercase hover:opacity-70 transition-opacity"
        >
          Lucas Hegouet<span className="text-primary/40">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all group-hover:w-full" />
            </a>
          ))}
          <Button variant="outline" className="rounded-none border-primary/20 hover:bg-white hover:text-black hover:border-white transition-all font-mono text-xs uppercase tracking-widest ml-4">
            Get in touch
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-none">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-border/40 w-full sm:w-[400px]">
            <nav className="flex flex-col gap-8 mt-20 px-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-4xl font-display font-bold uppercase tracking-tight hover:text-muted-foreground transition-colors border-b border-border/20 pb-4 flex justify-between items-center group"
                >
                  {item.name}
                  <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
