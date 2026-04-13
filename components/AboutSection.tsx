import { Crosshair, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-dark py-24" id="sobre">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Conheça a <span className="text-gradient-gold">NittLaser</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Somos especialistas em gravação a laser personalizada, trazendo precisão e qualidade
            para transformar produtos comuns em peças exclusivas. De presentes especiais a brindes
            corporativos, cada gravação é feita com atenção aos detalhes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Crosshair,
              title: "Alta Precisão",
              description: "Tecnologia laser que garante gravações perfeitas com acabamento impecável em qualquer material.",
            },
            {
              icon: Sparkles,
              title: "Personalização Total",
              description: "Nomes, logos, frases, datas — gravamos exatamente o que você imaginar, do jeito que quiser.",
            },
            {
              icon: Zap,
              title: "Entrega Rápida",
              description: "Produção ágil e envio para todo o Brasil. Seu pedido pronto no menor tempo possível.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
