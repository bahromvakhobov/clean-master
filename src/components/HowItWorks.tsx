import { MessageCircle, ClipboardCheck, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Bog'lanasiz",
    desc: "Telegram, Instagram yoki telefon orqali murojaat qilasiz.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Baholaymiz",
    desc: "Xizmat turi va hajmini aniqlaymiz.",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Tozalaymiz",
    desc: "Jamoamiz kelib professional tozalashni amalga oshiradi.",
  },
];

const HowItWorks = () => (
  <section className="section-padding">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Jarayon</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Buyurtma qanday ishlaydi?
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.15}>
            <div className="text-center">
              <div className="relative w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <step.icon size={32} className="text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
