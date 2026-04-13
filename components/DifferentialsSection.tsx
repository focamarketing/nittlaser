import { Truck, MapPin, Package, Award } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const differentials = [
  { icon: Award, title: "Precisão e Qualidade", description: "Acabamento premium em cada gravação, com detalhes nítidos e permanentes" },
  { icon: Truck, title: "Entrega Rápida", description: "Produção ágil para que você receba seu pedido o mais rápido possível" },
  { icon: MapPin, title: "Todo o Brasil", description: "Enviamos para qualquer lugar do país com segurança e rastreamento" },
  { icon: Package, title: "Avulso ou em Lote", description: "De uma unidade personalizada a centenas de brindes corporativos" },
];

const DifferentialsSection = () => {
  return (
    <section className="bg-gradient-dark py-24" id="diferenciais">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Por que escolher a <span className="text-gradient-gold">NittLaser</span>?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div key={item.title} className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton>Solicitar Orçamento</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
