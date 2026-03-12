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
  <section className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Jarayon</span>
          <h2 className="section-heading">Buyurtma qanday ishlaydi?</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />
        
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.15}>
            <div className="text-center relative">
              <div className="relative w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8" style={{ boxShadow: '0 8px 30px -8px hsl(214 90% 52% / 0.3)' }}>
                <step.icon size={30} className="text-primary-foreground" />
                <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-extrabold flex items-center justify-center shadow-md">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[260px] mx-auto">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
