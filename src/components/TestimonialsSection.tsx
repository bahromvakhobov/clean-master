import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Dilshod A.",
    service: "Uy tozalash",
    text: "Clean Master jamoasi juda professional ishladi. Uyimiz hech qachon bunday toza bo'lmagan edi. Juda tavsiya qilaman!",
    initial: "D",
    reel: "https://www.instagram.com/reel/DVTYyVWCNvx/embed",
  },
  {
    name: "Nodira K.",
    service: "Gilam tozalash",
    text: "Gilamlarimiz yangidek bo'ldi! Barcha dog'lar yo'qoldi va hid ham ketdi. Narxi ham o'rinli. Rahmat!",
    initial: "N",
    reel: "https://www.instagram.com/reel/DCEjPv9M1Gi/embed",
  },
  {
    name: "Sardor M.",
    service: "Ofis tozalash",
    text: "Ofisimizni muntazam tozalab turishadi. Xodimlar ham juda xursand. Professional va ishonchli xizmat.",
    initial: "S",
    reel: "https://www.instagram.com/reel/CtzYn7UOMzX/embed",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Fikrlar</span>
          <h2 className="section-heading">Mijozlar fikri</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="card-premium h-full flex flex-col relative overflow-hidden">
              <Quote size={48} className="absolute top-4 right-4 text-primary/[0.06]" />

              <div className="rounded-2xl overflow-hidden mb-5 border border-border bg-muted">
                <iframe
                  src={t.reel}
                  title={`${t.name} testimonial reel`}
                  className="w-full h-[320px]"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                />
              </div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={15} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8 flex-1 text-[15px]">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;