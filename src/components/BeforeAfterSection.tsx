import AnimatedSection from "./AnimatedSection";
import BeforeAfterSlider from "./BeforeAfterSlider";
import sofaImg from "@/assets/before-after-sofa.jpg";
import facadeImg from "@/assets/before-after-facade.jpg";
import carpetImg from "@/assets/before-after-carpet.jpg";
import tileImg from "@/assets/before-after-tile.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const results = [
  { img: facadeImg, label: "Fasad tozalash", tag: "Tashqi yuzalar", alt: "Facade cleaning" },
  { img: carpetImg, label: "Gilam tozalash", tag: "Chuqur tozalash", alt: "Carpet cleaning" },
  { img: tileImg, label: "Bruschatka tozalash", tag: "Tosh yuzalar", alt: "Tile cleaning" },
];

const BeforeAfterSection = () => (
  <section id="results" className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Natijalar</span>
          <h2 className="section-heading">Natija o'zi gapiradi</h2>
          <p className="section-subheading">
            Ishimizni oldin va keyin ko'ring — sifatga ishoning
          </p>
        </div>
      </AnimatedSection>

      {/* Featured interactive before/after slider */}
      <AnimatedSection className="mb-10">
        <BeforeAfterSlider
          beforeImg={sofaImg}
          afterImg={sofaImg}
          serviceLabel="Mebel tozalash"
          resultLabel="Divan tozalash natijasi"
          className="h-[320px] md:h-[480px]"
        />
        <p className="text-center text-muted-foreground text-sm mt-4 flex items-center justify-center gap-2">
          <CheckCircle size={14} className="text-accent" />
          Slayderni suring va natijani ko'ring
        </p>
      </AnimatedSection>

      {/* Grid results */}
      <div className="grid sm:grid-cols-3 gap-5">
        {results.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-72 object-cover group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-card/90 backdrop-blur-sm text-foreground text-[11px] font-bold px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-primary-foreground font-bold text-lg">{item.label}</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-primary-foreground/60 text-sm group-hover:text-primary-foreground/80 transition-colors">
                  <span>Natijani ko'ring</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
