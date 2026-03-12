import AnimatedSection from "./AnimatedSection";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryCarpet from "@/assets/gallery-carpet.jpg";
import galleryFacade from "@/assets/gallery-facade.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import gallerySofa from "@/assets/gallery-sofa.jpg";
import galleryTile from "@/assets/gallery-tile.jpg";

const images = [
  { src: galleryOffice, alt: "Office cleaning", span: "md:col-span-2 md:row-span-2" },
  { src: galleryCarpet, alt: "Carpet cleaning", span: "" },
  { src: galleryFacade, alt: "Facade cleaning", span: "" },
  { src: galleryLiving, alt: "Living room cleaning", span: "md:col-span-2" },
  { src: gallerySofa, alt: "Sofa cleaning", span: "" },
  { src: galleryTile, alt: "Tile cleaning", span: "" },
];

const GallerySection = () => (
  <section className="section-padding bg-card">
    <div className="container-premium">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Ishlarimizdan lavhalar
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.06} className={img.span}>
            <div className="img-hover-zoom h-full rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
