import { ArrowRight, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABanner = () => (
  <section className="py-20 px-4">
    <div className="container-premium">
      <AnimatedSection>
        <div className="gradient-cta rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary-foreground mb-5 max-w-2xl mx-auto leading-tight tracking-tight" style={{ fontFamily: "'Space Grotesk', 'Manrope', system-ui, sans-serif" }}>
              Makoningizni professional darajada tozalatishga tayyormisiz?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
              Hozir bog'laning va Clean Master sifati bilan farqni his qiling
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-full font-bold hover:bg-card/95 transition-all shadow-lg text-[15px]"
              >
                Buyurtma berish
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://t.me/ssba007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/10 transition-colors text-[15px]"
              >
                <Send size={15} />
                Telegramda yozish
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABanner;
