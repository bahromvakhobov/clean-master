import { ArrowRight, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABanner = () => (
  <section className="py-16 px-4">
    <div className="container-premium">
      <AnimatedSection>
        <div className="gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="glow-blob w-64 h-64 bg-primary-foreground top-0 right-0 opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 max-w-2xl mx-auto leading-tight">
              Makoningizni professional darajada tozalatishga tayyormisiz?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Hozir bog'laning va Clean Master sifati bilan farqni his qiling
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-card text-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-card/90 transition-colors shadow-lg"
              >
                Buyurtma berish
                <ArrowRight size={18} />
              </a>
              <a
                href="https://t.me/ssba007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Send size={16} />
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
