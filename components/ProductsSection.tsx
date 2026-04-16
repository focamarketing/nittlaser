import Image from "next/image";

const WHATSAPP_NUMBER = "5521991631341";

const products = [
  { name: "Canetas", image: "/images/product-pen.jpeg", description: "Elegância personalizada para presentear ou usar no dia a dia" },
  { name: "Copos Stanley", image: "/images/product-stanley.jpg", description: "Deixe seu Stanley com a sua cara, único e inconfundível" },
  { name: "Facas", image: "/images/product-knife.png", description: "Gravações precisas que adicionam identidade às suas lâminas" },
  { name: "Garrafas", image: "/images/product-bottle.jpeg", description: "Garrafas personalizadas para uso pessoal ou brindes corporativos" },
  { name: "Pingentes", image: "/images/product-pendant.jpeg", description: "Jóias e acessórios com gravação delicada e permanente" },
];

function whatsappUrl(productName: string) {
  const message = `Olá! Vi o site da NittLaser e tenho interesse em gravação personalizada em *${productName}*. Poderia me passar mais informações?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const ProductsSection = () => {
  return (
    <section className="py-24" id="produtos">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            O que <span className="text-gradient-gold">gravamos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Versatilidade é nosso forte. Confira os produtos que personalizamos com gravação a laser.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={whatsappUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={`Gravação a laser em ${product.name}`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">{product.name}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{product.description}</p>
              </div>
              {/* Overlay no hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-body text-base font-semibold text-foreground shadow-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar orçamento
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
