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
  <section id="why-us" className="section-padding">
    <div className="container-premium">
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        {/* Left heading */}
        <AnimatedSection className="lg:col-span-2 lg:sticky lg:top-32">
          <span className="section-label">Afzalliklar</span>
          <h2 className="section-heading">Nega aynan Clean Master?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 mb-8">
            Biz har bir buyurtmaga professional yondashuvimiz va sifat kafolatimiz bilan ajralib turamiz.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-bold hover:shadow-[0_8px_30px_-6px_hsl(214_90%_52%/0.4)] transition-all duration-300"
          >
            Bog'lanish
          </a>
        </AnimatedSection>

        {/* Right grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.07}>
              <div className="group p-6 rounded-2xl border border-transparent hover:border-border hover:bg-card transition-all duration-500 hover:shadow-[var(--shadow-card)]">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors duration-500">
                  <b.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-[15px]">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
