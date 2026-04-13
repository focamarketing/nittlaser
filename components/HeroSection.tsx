import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpeg"
          alt="Caneta com gravação a laser personalizada"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary">
              Gravação a Laser Personalizada
            </span>
          </div>

          <h1 className="animate-fade-up-delay font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Transforme objetos em{" "}
            <span className="text-gradient-gold">peças únicas</span>
          </h1>

          <p className="animate-fade-up-delay-2 max-w-lg font-body text-lg text-muted-foreground md:text-xl">
            Gravação a laser de alta precisão em canetas, copos, facas, garrafas e muito mais.
            Presentes que marcam para sempre.
          </p>

          <div className="animate-fade-up-delay-2 pt-4">
            <WhatsAppButton>Peça seu orçamento agora</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
