import Image from "next/image";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-dark">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo + Copyright */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="NittLaser"
              width={500}
              height={270}
              className="h-14 w-auto"
            />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Gravação a laser personalizada de alta precisão. Transforme objetos em peças únicas.
            </p>
          </div>

          {/* Redes sociais + Endereço */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-foreground">Contato</h3>

            <a
              href="https://www.instagram.com/nittlaser/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @nittlaser
            </a>

            <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p>
                Edifício Presidente Kennedy<br />
                Av. Pres. Vargas, 633 — Centro<br />
                Rio de Janeiro — RJ, 20071-004
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-foreground">Navegação</h3>
            <nav className="flex flex-col gap-2 font-body text-sm text-muted-foreground">
              <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
              <a href="#produtos" className="transition-colors hover:text-primary">Produtos</a>
              <a href="#diferenciais" className="transition-colors hover:text-primary">Diferenciais</a>
              <a href="#galeria" className="transition-colors hover:text-primary">Galeria</a>
              <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border/50">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} NittLaser — Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Desenvolvido por{" "}
            <a
              href="https://www.focamarketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-primary/80"
            >
              Foca Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
