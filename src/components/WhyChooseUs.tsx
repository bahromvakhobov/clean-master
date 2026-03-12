import { Users, Wrench, Sparkles, Zap, Heart, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Users, title: "Tajribali jamoa", desc: "7 yildan ortiq tajribaga ega professional mutaxassislar jamoasi." },
  { icon: Wrench, title: "Professional uskunalar", desc: "Zamonaviy va sifatli tozalash qurilmalari bilan ishlaymiz." },
  { icon: Sparkles, title: "Sifatli tozalash vositalari", desc: "Xalqaro standartlarga mos ekologik tozalash vositalari." },
  { icon: Zap, title: "Tezkor xizmat", desc: "Buyurtmangizni tez va o'z vaqtida bajaramiz." },
  { icon: Heart, title: "Mas'uliyatli yondashuv", desc: "Har bir buyurtmaga alohida e'tibor va mas'uliyat bilan yondashamiz." },
  { icon: Star, title: "Mijoz roziligi ustuvor", desc: "Sizning qoniqishingiz — bizning asosiy maqsadimiz." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Afzalliklar</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Nega aynan Clean Master?
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.08}>
            <div className="flex gap-4 p-5 rounded-2xl hover:bg-secondary/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <b.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
