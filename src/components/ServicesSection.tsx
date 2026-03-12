import { Home, Building2, Landmark, Sofa, Layers, Grid3X3, ArrowUpRight } from "lucide-react";
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
    title: "Bruschatka / kafel",
    desc: "Tosh va kafel yuzalarni professional tozalash bilan porlatomiz.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Xizmatlar</span>
          <h2 className="section-heading">Xizmatlarimiz</h2>
          <p className="section-subheading">
            Har bir makon uchun professional va puxta tozalash yechimlari
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.07}>
            <div className="group card-premium h-full cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-colors duration-500">
                  <service.icon size={24} className="text-primary" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <ArrowUpRight size={16} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
