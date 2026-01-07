import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Custom Copy */}
          <p className="text-sm text-muted-foreground">
            Feito com amor da Bahia para o mundo
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lucas Hegouet
          </p>
        </div>
      </div>
    </footer>
  );
}
