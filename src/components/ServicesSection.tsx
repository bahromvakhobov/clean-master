import { Home, Building2, Landmark, Sofa, Layers, Grid3X3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Home,
    title: "Uy tozalash",
    desc: "Uyingizni professional darajada tozalab, yangi va qulay muhit yaratamiz.",
  },
  {
    icon: Building2,
    title: "Ofis tozalash",
    desc: "Ish joyingizni doimo toza va tartibli holda saqlashga yordam beramiz.",
  },
  {
    icon: Landmark,
    title: "Fasad tozalash",
    desc: "Binoning tashqi qismini professional uskunalar bilan yangidek ko'rinishga keltiramiz.",
  },
  {
    icon: Sofa,
    title: "Divan tozalash",
    desc: "Mebellaringizni chuqur tozalab, dog'lar va hidlardan xalos qilamiz.",
  },
  {
    icon: Layers,
    title: "Gilam tozalash",
    desc: "Gilamlaringizni zamonaviy texnologiyalar bilan asliga qaytaramiz.",
  },
  {
    icon: Grid3X3,
    title: "Bruschatka / kafel tozalash",
    desc: "Tosh va kafel yuzalarni professional tozalash bilan porlatomiz.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Xizmatlar</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Xizmatlarimiz
          </h2>
          <p className="text-muted-foreground text-lg">
            Har bir makon uchun professional va puxta tozalash yechimlari
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.08}>
            <div className="card-premium group cursor-default h-full">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
