import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" aria-label="NittLaser — Início" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="NittLaser"
            width={500}
            height={270}
            priority
            className="h-14 w-auto"
          />
        </a>

        <WhatsAppButton className="!px-5 !py-2.5 !text-sm md:!px-6 md:!py-3 md:!text-base">
          Falar no WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
};

export default Header;
