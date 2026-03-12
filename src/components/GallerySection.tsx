import AnimatedSection from "./AnimatedSection";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryCarpet from "@/assets/gallery-carpet.jpg";
import galleryFacade from "@/assets/gallery-facade.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import gallerySofa from "@/assets/gallery-sofa.jpg";
import galleryTile from "@/assets/gallery-tile.jpg";

const images = [
  { src: galleryOffice, alt: "Office cleaning", label: "Ofis", span: "md:col-span-2 md:row-span-2" },
  { src: galleryCarpet, alt: "Carpet cleaning", label: "Gilam", span: "" },
  { src: galleryFacade, alt: "Facade cleaning", label: "Fasad", span: "" },
  { src: galleryLiving, alt: "Living room cleaning", label: "Uy", span: "md:col-span-2" },
  { src: gallerySofa, alt: "Sofa cleaning", label: "Divan", span: "" },
  { src: galleryTile, alt: "Tile cleaning", label: "Kafel", span: "" },
];

const GallerySection = () => (
  <section className="section-padding">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Ishlarimizdan lavhalar</h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className={img.span}>
            <div className="group img-hover-zoom h-full rounded-2xl relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                <span className="bg-card/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">{img.label}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
