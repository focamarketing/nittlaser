import WhatsAppButton from "./WhatsAppButton";

const CtaSection = () => {
  return (
    <section className="bg-gradient-dark py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Pronto para criar algo{" "}
            <span className="text-gradient-gold">único</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Entre em contato pelo WhatsApp e transforme suas ideias em gravações personalizadas.
            Atendimento rápido e orçamento sem compromisso.
          </p>
          <WhatsAppButton>Fale com a NittLaser agora</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
