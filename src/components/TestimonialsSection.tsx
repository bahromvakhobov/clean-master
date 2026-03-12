import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Dilshod A.",
    service: "Uy tozalash",
    text: "Clean Master jamoasi juda professional ishladi. Uyimiz hech qachon bunday toza bo'lmagan edi. Juda tavsiya qilaman!",
  },
  {
    name: "Nodira K.",
    service: "Divan tozalash",
    text: "Divanlarimiz yangidek bo'ldi! Barcha dog'lar yo'qoldi va hid ham ketdi. Narxi ham o'rinli. Rahmat!",
  },
  {
    name: "Sardor M.",
    service: "Ofis tozalash",
    text: "Ofisimizni muntazam tozalab turishadi. Xodimlar ham juda xursand. Professional va ishonchli xizmat.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fikrlar</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Mijozlar fikri
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="card-premium h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.service}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
