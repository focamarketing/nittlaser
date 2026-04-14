import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Quais materiais podem ser gravados a laser?",
    answer:
      "Trabalhamos com uma grande variedade de materiais, incluindo metais (aço inox, alumínio, latão), couro, acrílico e plásticos selecionados. Cada material recebe configurações específicas para garantir o melhor resultado.",
  },
  {
    question: "A gravação a laser é permanente?",
    answer:
      "Sim! A gravação a laser é permanente e resistente ao uso diário, lavagens e ao tempo. Diferente de adesivos ou impressões, a gravação altera a superfície do material, garantindo durabilidade.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo varia conforme a quantidade e complexidade do pedido. Em geral, pedidos avulsos ficam prontos em 2 a 5 dias úteis. Para lotes maiores ou brindes corporativos, entre em contato para um prazo personalizado.",
  },
  {
    question: "Vocês fazem entrega para todo o Brasil?",
    answer:
      "Sim! Enviamos para todo o Brasil pelos Correios e transportadoras parceiras, com código de rastreamento. Consulte o frete para a sua região pelo WhatsApp.",
  },
  {
    question: "Qual a quantidade mínima de pedido?",
    answer:
      "Não temos quantidade mínima — aceitamos desde uma única peça personalizada até lotes de centenas de unidades para brindes e eventos corporativos.",
  },
  {
    question: "Posso enviar minha própria arte ou logo?",
    answer:
      "Com certeza! Aceitamos logos, ilustrações, textos e artes personalizadas. Envie sua arte em alta resolução (PNG, SVG ou PDF) para o melhor resultado. Se precisar de ajuda com a arte, nossa equipe pode auxiliar.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "É simples! Clique no botão \"Falar no WhatsApp\" e envie os detalhes do que deseja gravar: tipo de produto, quantidade, arte/texto e prazo desejado. Respondemos rapidamente com o orçamento sem compromisso.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-gradient-dark py-24" id="faq">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de gravação a laser.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-card transition-colors open:border-primary/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-heading text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
