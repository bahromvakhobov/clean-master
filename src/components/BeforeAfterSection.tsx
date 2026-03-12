import AnimatedSection from "./AnimatedSection";
import sofaImg from "@/assets/before-after-sofa.jpg";
import facadeImg from "@/assets/before-after-facade.jpg";
import carpetImg from "@/assets/before-after-carpet.jpg";
import tileImg from "@/assets/before-after-tile.jpg";

const results = [
  { img: sofaImg, label: "Divan tozalash", alt: "Sofa before and after cleaning" },
  { img: facadeImg, label: "Fasad tozalash", alt: "Facade before and after cleaning" },
  { img: carpetImg, label: "Gilam tozalash", alt: "Carpet before and after cleaning" },
  { img: tileImg, label: "Bruschatka tozalash", alt: "Tile before and after cleaning" },
];

const BeforeAfterSection = () => (
  <section id="results" className="section-padding">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Natijalar</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Natija o'zi gapiradi
          </h2>
          <p className="text-muted-foreground text-lg">
            Ishimizni oldin va keyin ko'ring
          </p>
        </div>
      </AnimatedSection>

      {/* Featured result */}
      <AnimatedSection className="mb-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={sofaImg}
            alt="Featured before and after sofa cleaning"
            className="w-full h-[300px] md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-3">
              <span className="bg-destructive/80 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Oldin</span>
              <span className="bg-accent/90 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Keyin</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mt-3">Divan tozalash natijasi</h3>
            <p className="text-primary-foreground/80 text-sm mt-1">Professional chuqur tozalash xizmati</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid results */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.slice(1).map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg group relative">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary-foreground font-bold">{item.label}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
