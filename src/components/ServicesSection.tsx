import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import serviceHome from "@/assets/service-home.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceFacade from "@/assets/service-facade.jpg";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceTile from "@/assets/service-tile.jpg";

const services = [
  {
    img: serviceHome,
    title: "Uy tozalash",
    slug: "uy-tozalash-toshkent",
    desc: "Uyingizni professional darajada tozalab, yangi va qulay muhit yaratamiz.",
  },
  {
    img: serviceOffice,
    title: "Ofis tozalash",
    slug: "ofis-tozalash-toshkent",
    desc: "Ish joyingizni doimo toza va tartibli holda saqlashga yordam beramiz.",
  },
  {
    img: serviceFacade,
    title: "Fasad tozalash",
    slug: "fasad-tozalash-toshkent",
    desc: "Binoning tashqi qismini professional uskunalar bilan yangidek ko'rinishga keltiramiz.",
  },
  {
    img: serviceSofa,
    title: "Divan tozalash",
    slug: "divan-tozalash-toshkent",
    desc: "Mebellaringizni chuqur tozalab, dog'lar va hidlardan xalos qilamiz.",
  },
  {
    img: serviceCarpet,
    title: "Gilam tozalash",
    slug: "gilam-tozalash-toshkent",
    desc: "Gilamlaringizni zamonaviy texnologiyalar bilan asliga qaytaramiz.",
  },
  {
    img: serviceTile,
    title: "Bruschatka / kafel",
    slug: "kafel-bruschatka-tozalash-toshkent",
    desc: "Tosh va kafel yuzalarni professional tozalash bilan porlatamiz.",
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
            <Link
              to={`/${service.slug}`}
              className="group card-premium block h-full overflow-hidden rounded-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={`${service.title} xizmati Toshkent`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;